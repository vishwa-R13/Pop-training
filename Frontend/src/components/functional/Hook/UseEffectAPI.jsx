import { useEffect, useState } from "react";
import axios from "axios";

const UseEffectAPI = () => {
  var [posts, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        // console.log(res.data)  
        setPost(res.data);
      })
      .catch((err) => console.log("Counldn't read the api", err));
  }, []);
  return (
    <div>
      <h1>This is useEffect example with API call </h1>
      <h3>
        We are going to fetch data from JSON Placeholder and display the data
      </h3>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
      <button onClick={()=>{console.log("Button Clicked !!!")}}>Hello</button>
    </div>
  );
};

export default UseEffectAPI;