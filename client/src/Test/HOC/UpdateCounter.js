import { useState } from "react";

const Counter = (WrappedCompoment)=>{
    const Counter = (props)=>{    
        console.log(props);
        const [count, setCount] = useState(0);
        function incrementCounter(){
            setCount(count+1)
        }
        return (
            <div>
                <WrappedCompoment count={count} incrementCounter={incrementCounter} {...props}></WrappedCompoment>
            </div>
        )
    }
    return Counter;
}

export default Counter;
