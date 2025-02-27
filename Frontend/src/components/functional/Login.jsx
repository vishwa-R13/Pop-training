import { useState } from "react";
import Home from '../functional/Home'
import { Link } from "react-router-dom";
function Login() {
  // const [username,setUN] = useState("");
  // const [pass,setpass] = useState("");
  return (
    <section>
      <h1 style={{ textAlign: "center" }}>Login Page</h1>
      <form action={<Link to='/Home'></Link>}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
        required/>
        <br /> <br />
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          id="password"
        required/>{" "}
        <br /> <br />
      <button type="submit">Login</button>
      </form>
      <p>Already as account <Link to='/Signup'>SignUp</Link> </p>
    </section>
  );
}
export default Login;
