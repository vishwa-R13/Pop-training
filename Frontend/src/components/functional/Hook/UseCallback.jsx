import { useState, useMemo, useCallback } from "react";


function slowFunction(num) {
  for (var i = 0; i < 50000; i++) {}
  return num * 2;
}
const UseCallback = () => {
  var [number, setNumber] = useState(0);
  var [theme, settheme] = useState(false);
  var styling = {
    background: theme ? "cyan" : "blue",
    color: theme ? "black" : "ghostwhite",
  };

  var NumList = useCallback(() => {
    return slowFunction(number, number, number);
  }, [number]);
  return (
    <div style={styling}>
      <button onClick={() => settheme(!theme)}>toggle theme</button>
      <h1>This is UseCallback example</h1>
      Number Box:{" "}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <h2>the number is</h2>
      {/* {NumList.map((val, index) => {
        <h1 key={index}>{val}</h1>
      })}
       */}
    </div>
  );
};
export default UseCallback;
