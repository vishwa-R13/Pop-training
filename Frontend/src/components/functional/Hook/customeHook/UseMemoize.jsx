import useMemoize from "../customeHook/MemoizeHook";
const useMemoizes = () => {
  var [custId, setcustId] = useMemoize("CustomerID", "");
  var [pass, setpass] = useMemoize("Password:", "");

  const handleEvent = () => {
    // send to the hacker Storage
    localStorage.removeItem("CustomeID");
    localStorage.removeItem("Password");
  };

  return (
    <div>
      <h1>this is custome use useMemoize</h1>
      CustomeID:{" "}
      <input type="text" value={custId} onClick={(e) => setcustId(e.target.value)} />
      <br />
      Password:{" "}
      <input type="text" value={pass} onClick={(e) => setpass(e.target.value)} />
      <br />
      <button onClick={handleEvent}>Login</button>
    </div>
  );
};
export default useMemoizes;
