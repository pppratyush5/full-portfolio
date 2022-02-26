import {useState} from "react";
import UpdateCounter from "./HOC/UpdateCounter";

function HoverCounter(){
    const [counter, setCounter] = useState(0);
    function incrementCounter(){
        console.log("hover...");
        setCounter((preCounter)=>{
            return preCounter+1;
        })
    }

    return(
        <div className="HoverCounter" onMouseOver={incrementCounter} >
            <h1>HoverCounter {counter}</h1>
        </div>
    )
}
export default UpdateCounter(HoverCounter);