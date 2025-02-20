import { useState, useMemo } from "react";

function slowFunction(num){
    for(var i=0;i<50000;i++){}
    return num*2
}
const UseMemo = () => {
  var [number, setNumber] = useState(0);
  var [theme, settheme] = useState(false);
  var styling = {
    background: theme ? "cyan" : "blue",
    color: theme ? "black" : "ghostwhite",
  };

  var doublingUpANumber = useMemo(()=>{
    return slowFunction(number)
  },[number])
  return (
    <div style={styling}>
      <button onClick ={() => settheme(!theme)}>toggle theme</button>
      <h1>This is UseMemo example</h1>
      Number Box:{" "}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2>the number is {number}</h2>
      {/* <h2>the number is {slowFunction(number)}</h2> */}
      <h3>the number is{doublingUpANumber}</h3>
    </div>
  );
};
export default UseMemo;
