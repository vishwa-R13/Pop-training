import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Signup() {
  const navigate = useNavigate();
  const [firstName, setFN] = useState("");
  const [lastName, setLN] = useState("");
  const [email, setemail] = useState("");
  const [password, setpass] = useState("");
  const [phoneNumber, setPN] = useState(0);
  const handleSignup = async(event) => {
    event.preventDefault();
    const req = await axios.post("http://localhost:3003/Signup", {
      FirstName: firstName,
      LastName: lastName,
      phoneNumber: phoneNumber,
      password: password,
      email: email,
    });
    const message = req.data.message;
    const isSignup = req.data.isSignup;
    if(isSignup){
        alert(message);
        navigate("/login");
    }
    else{
        alert(message);
    }
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
          required/><br/><br />
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
        <button type="submit">Signup</button>
      </form>
      <p>
      Already having an account? <Link to="/Login">Login</Link>
      </p>
    </div>
  );
}
export default Signup;
