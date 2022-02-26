import React, { Suspense } from "react"
import { useRef,useEffect,useState } from "react";
import './Test.scss'
import axios from "axios";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
// import BreakingBad from "./BreakingBad";
const BreakingBad = React.lazy(()=>{ return import("./BreakingBad")});

const Test = ()=>{
const [cateList, setCateList] = useState();

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/categories")
        .then(res=>res.json())
        .then(json=>setCateList(json))
        .catch((e)=>{console.log(e);})
        promiseAndAsyncAwait();
    },[])
    //code to clear the input on button click
        let userName =  useRef();
        function clearInput(){
            //console.log(userName);
            userName.current.onfocus = true
        }
    //code to clear the input on button click

    //code to change shape on button click
        const [changeShape, setChangeShape] = useState(false)
    // code to change shape on button click  

    // Custom hook to call api
        const {joke, refreshJoke, loading} = useFetch("https://v2.jokeapi.dev/joke/Any")
        function nextJoke(){
            refreshJoke()
        }
    // Custom hook to call api

    // HOC (higher order compoment)
        function increment(){
            console.log("incremented");
        }
    // HOC (higher order compoment)
    return (
    <div className="test">

        {/* Breaking bad implementation */}
            <Suspense fallback={<h1 className="fallback">loading breaking bad....!!!!</h1>}>
                <h3>Breaking Bad</h3>
                <BreakingBad></BreakingBad>
            </Suspense>
        {/* Breaking bad implementation */}


        {/* HOC (higher order compoment) */}
            <ClickCounter name="AAAA"/>
            <HoverCounter/>            
        {/* HOC (higher order compoment) */}

        {/* TODO */}
        <h3>TODO APP</h3>
        <ToDo></ToDo>
        {/* TODO */}

        {/*code to clear the input on button click  */}
            <h3>Clear Input Field</h3>
            <input ref={userName} placeholder="Enter Name" type="text" name="name" id="name" />
            <button type="submit" onClick={clearInput}>Subimt</button>
        {/*code to clear the input on button click  */}
    
        {/*code to change shape on button click  */}
            <h3>Change Shape</h3>
            <div className={changeShape?"circle":"square"}></div>
            <button onClick={()=>{
                setChangeShape(!changeShape)
                //console.log("Shape changed...");
            }}>Change Shape </button>
        {/*code to change shape on button click  */}
       
        {/*  Custom hook to call api */}
            <h3>Fetch Joke Api</h3>
             { loading?<span>Loading....</span>:
             <h2> Joke - {joke? joke:"Click on next joke"}</h2>}
            <button onClick={nextJoke}>Next Joke</button>
        {/* Custom hook to call api */}
    </div>
    )
}

export default Test;

// Custom hook to call api
function useFetch(url){
    const [joke, setJoke] = useState(null)
    // let joke = null; 
    const err = ""
    const [loading ,setLoading] = useState(false)
    useEffect(()=>{
        refreshJoke()
    },[url])

    const refreshJoke = ()=>{
        setLoading(true)
        axios.get(url)
        .then((res)=>{
            //console.log(res?.data?.delivery);
            setJoke(res?.data?.delivery)
            setLoading(false)
        })
        .catch((err)=>{
            setLoading(false)
            //console.log("ERROR.....",err);
        })
    }
    return {joke, refreshJoke, loading};
}
// Custom hook to call api

// to do
const ToDo = ()=>{
    const [toDoList, setToDoList ] = useState([]);
    const [status, setState ] = useState("");

    const name = useRef("qwe");
    const email = useRef("emaillll2G.COM");
    const project = useRef("PROJECT REACT");
    const task = useRef("TASK TO DO");
    const startDate = useRef("01/01/2222");
    const endDate = useRef("03/03/4444");
    let isEdited = false;
    let index = null;

    function submit(){ 
        
        if(isEdited){
            let arr = toDoList;
            //console.log("successfully edited");
            arr[index] = {
                name :name.current.value,
                project:project.current.value,
                task:task.current.value,
                status:status,
                startDate:startDate.current.value,
                endDate:endDate.current.value
            }
            isEdited = false;
            setToDoList([...arr]);
        }else {
            let arr = [...toDoList,{
                name :name.current.value,
                project:project.current.value,
                task:task.current.value,
                status:status,
                startDate:startDate.current.value,
                endDate:endDate.current.value
            }];
            setToDoList(arr); 
            //console.log("successfully added");
        }
    }

    function handleRadio(e){
        console.log(e.target.value);
        setState(e.target.value);
    }

    function deleteTask(i){
        toDoList.splice(i,1);
        setToDoList([...toDoList]);
        index = i;
        //console.log(index)
    }

    // useEffect(()=>{
    //     return(
    //         //console.log(">>>>>>>>>",toDoList)
    //     )
    // })

    function editTask(i){
        isEdited = true;
        name.current.value = toDoList[i].name;
        email.current.value = toDoList[i].email;
        project.current.value = toDoList[i].project;
        task.current.value = toDoList[i].task;
        startDate.current.value = toDoList[i].startDate;
        endDate.current.value = toDoList[i].endDate;
        index = i;
    }

    return (
        <div>  
            <form>
                <input ref={name} maxLength="12" type="text" placeholder="name" />
                <input ref={email} maxLength="12" type="email" placeholder="email" />
                {/* <input maxLength="10" type="number" placeholder="moboile number" /> */}
                <input ref={task} maxLength="12" type="text" placeholder="task desc" />
                <input ref={project} maxLength="12" type="text" placeholder="project name" />
                <input ref={startDate} type="date"  />
                <input ref={endDate}   type="date"  />
                <input name="status" onChange={handleRadio} value="Planned"  type="radio" />
                <input name="status" onChange={handleRadio} value="InProgress" type="radio" />
                <input name="status" onChange={handleRadio} value="Done" type="radio" />
            </form> 
            <button onClick={submit} >save </button>   
            <button >view</button>

            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Mobile Number</td>
                            <td>Project Name</td>
                            <td>Start Date</td>
                            <td>End Date</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {toDoList.length > 0?
                            toDoList.map((e,index)=>{
                            return(
                            <tr key={Math.random()*100}>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>mobile N0.</td>
                                <td>{e.project}</td>
                                <td>{e.startDate}</td>
                                <td>{e.endDate}</td>
                                <td>{e.status}</td>
                                <td>
                                    <span onClick={()=>{editTask(index)}}>edit</span>/
                                    <span onClick={()=>{deleteTask(index)}}>delete</span>
                                </td>
                            </tr>
                            )}):<tr><td>No data</td></tr>}
                    </tbody>
                </table>
            </div>   
        </div>
    )
}
// to do

// promise and async/await
function promiseAndAsyncAwait(){

    // a promise
    function apiCall(){
        return new Promise(function (resolve, reject) {
          const respData =  fetch("https://jsonplaceholder.typicode.com/posts/1")
          resolve(respData)
        });
    }
    
    
    apiCall().then((res)=>{
        console.log(res)
    }).then((res)=>{
      console.log(res)
    }).catch((errr)=>{
      
    })
    
    async function p(){ 
      const res1 = await apiCall();
      const res2 = await apiCall();
      const res3 = await apiCall();
      const res4 = await apiCall();
    //   console.log(res1)
    }
    p();    
}