import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Signup() {
  const [firstName, setFN] = useState("");
  const [lastName, setLN] = useState("");
  const [email, setemail] = useState("");
  const [password, setpass] = useState("");
  const [phoneNumber, setPN] = useState(0);
  const handleSignup = () => {
    axios.post("http://localhost:3002/signup", {
      FirstName: firstName,
      LastName: lastName,
      phoneNumber: phoneNumber,
      password: password,
      email: email,
    });
  };
  return (
    <div>
      <h1>SignUP</h1>
      <form onSubmit={handleSignup}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFN(e.target.value)}
        /><br/><br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLN(e.target.value)}
        /> <br /> <br />
        <label htmlFor="phonenumber">Phone Number:</label>
        <input
          type="number"
          id="phonenumber"
          value={phoneNumber}
          onChange={(e) => setPN(e.target.value)}
        /> <br /> <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        /> <br /> <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setpass(e.target.value)}
        /> <br /> <br />
      </form>
      <div>
      Already having an account? <Link to="/Login">Login</Link>
      </div>
    </div>
  );
}
export default Signup;
