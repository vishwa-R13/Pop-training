import { useEffect, useState } from "react";

// const useState = () =>{
const UseEffect = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <section>
      <h1>This is useEffect Example</h1>
      Type your text:{" "}
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <h1>typed here: {text}</h1>
    </section>
  );
};
// }
export default UseEffect;
