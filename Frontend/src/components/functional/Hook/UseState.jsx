import { useState } from "react";

function UseState(){
    function handlingDecrement(){
        setNum(num-1);
    }
    var initialVal = 0
    var [num,setNum]= useState(initialVal)
    return (<div>
        <h1 >About Page</h1>
        <h2>State initial value is {initialVal}</h2>
        <button onClick={()=>setNum(handlingDecrement)}>-</button>
        <h3>Updating state:{num}</h3>
        
        <button onClick={()=>setNum(num+1)}>+</button>
    </div>);

}
export default UseState;