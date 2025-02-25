const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Signup = require("./models/signupSchema");
const app = express();
app.use(express.json);

// app.get("/",req,res)=
// const app = express();
const PORT = 3001;

mdb
  .connect(process.env.MONGODB_URL) //if it doesn't connect with localhost, replace it with 127.0.0.1 ip
  .then(() => {
    console.log("MDB connection successfull");
  })
  .catch((err) => console.log("Check the connection", err));

app.get("/", (req, res) => {
  res.send("<h1> this is backend for websites </h1>");
});

app.get("/signup", (req, res) => {
  try {
    const { FirstName, LastName, email, password, phoneNumber } = req.body;
    const newSignup = new Signup({
      FirstName: FirstName,
      LastName: LastName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
    });
    newSignup.save();
    console.log("Signup Successfull");
    ({ message: "Signup Successfull", isSignUp: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Signup UnSuccessfull", isSignUp: false });
  }
});

app.listen(PORT, () => {
  console.log("server started successfully");
});

app.get("/static", (req, res) => {
  res.sendFile("/mern stack/Frontend/index.html");
});
