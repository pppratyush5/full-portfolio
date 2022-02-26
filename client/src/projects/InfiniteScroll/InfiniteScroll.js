import axios from "axios";
import { useCallback,useState ,useEffect, useRef } from "react";
import './InfiniteScroll.css';
const InfiScroll = ()=>{

    const [query,setQuery] = useState("");
    const [pageNo,setPageNo] = useState(1);
    let {books,loading,hasMore} = useBookSearch(query, pageNo);
    const observer = useRef();

    const lastBookRef = useCallback((node)=>{
        if(observer.current) observer.current.disconnect();
        observer.current =  new IntersectionObserver((entries)=>{
            if(loading) return
            if(entries[0].isIntersecting){
                console.log("VIsible.....");
                setPageNo((previousPage)=>{
                    console.log(previousPage);
                    return previousPage+1
                })
                console.log(pageNo);
            }
        });
        if(node) observer.current.observe(node)
    },[loading,hasMore])
    
    function handleSearch(e){
        setQuery(e.target.value);
    }

    return (
        <div>
            <h1>hello inFinite</h1>
            <input type="text" onChange={handleSearch} placeholder="Search Book" />
            <div className="cardRapper">
            {books.map((book,i)=>{
                if(books.length == i+1){
                    return <p className="card" ref={lastBookRef} key={i}>{book.title} +++++ last element</p>;
                }else {
                    return <p className="card" key={i}>{book.title}</p>;
                }
            })}
            </div>
        </div>
    )
} 

export default InfiScroll;

function useBookSearch(query,pageNo){
    let [books, setbooks ] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(false);
    useEffect(()=>{
        let cancel;
        setLoading(true)
        axios({
            method:"GET",
            url:"http://openlibrary.org/search.json",
            params : {
                q:query,
                page: pageNo,
            },
            cancelToken: new axios.CancelToken(c=> cancel = c )
        }).then((res)=>{
            // console.log(res.data.docs);
            setbooks(res.data.docs);
            setLoading(false);
            setHasMore(res.data.docs.length > 0)
        }).catch((err)=>{
            setLoading(false);
            if(axios.isCancel(err))return;
        })

        return ()=> cancel();
            
    },[query,pageNo])

    return {books, loading, hasMore};
}