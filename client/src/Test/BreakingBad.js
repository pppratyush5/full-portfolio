import { useState, useEffect } from "react";
import axios from "axios";
const BreakingBad = ()=>{
    const [breackingBadData,setBreackingBadData] = useState([]); 
    const breakingBadBaseUrl = "https://www.breakingbadapi.com/api/characters";

    // const [data, setData] = useState([]);
    useEffect(()=>{
        fetchData(breakingBadBaseUrl)
    },[breakingBadBaseUrl])

    function fetchData(url){
        axios.get(url)
        .then((res)=>{          
            //console.log(res.data)  
            setBreackingBadData(res.data)
        }).catch((e)=>{
            //console.log("Error in fetching breaking bad ....");
        })
    }

    function searchCharacter(e){
        // console.log(">>>>>>>>>>>>>>>>>>>>>",e.target.value)
        if (e.target.value !== ""){
            fetchData(breakingBadBaseUrl+"?name="+e.target.value)
        }
    }

    return(
        <>
            <input type="text" placeholder="Search character" onChange={searchCharacter} />
            <div className="card">
                {breackingBadData.map((e)=>{
                    return(
                        <div className="cardItem" key={e.char_id}>
                            <img width="150px" src={e.img} alt="" />
                            <br />
                            <span>Name - {e.name}</span>
                            <span>Status - {e.status}</span>
                        </div>
                        )
                    })}   
            </div>
        </>
    )
}

export default BreakingBad