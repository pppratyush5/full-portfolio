import { useEffect } from "react";
import { useState } from "react";
import UpdateCounter from "./HOC/UpdateCounter";

function ClickCounter({count,incrementCounter,props}){
    return(
        <div className="ClickCounter" onClick={()=>{
            incrementCounter()      
            console.log("props>>", props);      
        }}>
           <h1>
                ClickCounter {count}
           </h1>
        </div>
    )
}

export default UpdateCounter(ClickCounter);