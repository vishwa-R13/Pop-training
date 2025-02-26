const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const signup = require("./models/signupSchema");
const bcrypt = require("bcrypt");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = 3002;

dotenv.config();
app.use(express.json());
mdb
  .connect(process.env.MONGODB_URL) // if it doesn't connect with localhost replace it with 127.0.0.1 ip address
  .then(() => {
    console.log("MDB connection succesful");
  })
  .catch((err) => {
    console.log("Check your connection string", err);
  });

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Backend Server </h1>");
});

app.get("/", (req, res) => {
  res.sendFile("D:/mern stack/Backend/index.js");
});

app.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newSignup = new signup({
      FirstName: firstName,
      LastName: lastName,
      phoneNumber: phoneNumber,
      password: hashedPassword,
      email: email,
    });
    newSignup.save();
    console.log("Signup Succesful");
    res.status(201).json({ message: "Signup Succsesful", isSignup: true });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(400).json({ message: "Signup Unsuccsesful", isSignup: false });
  }
});

app.get("/getsignupdet", async (req, res) => {
  const Signup = await signup.find(); //Signup.find()
  console.log(Signup);
  res.json("signup details fetched");
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await signup.findOne({ email: email });
    console.log(existingUser);
    // res.json({message:"Login Fetched"})
    if (existingUser) {
      const isValidPassword = await bcrypt.compare(
        password,
        existingUser.password
      );
      console.log(isValidPassword);
      if (isValidPassword) {
        res.status(201).json({ message: "Login Succesful", isLoggedIn: true });
      } else {
        res
          .status(201)
          .json({ message: "Incorrect Password", isLoggedIn: false });
      }
    } else {
      res
        .status(201)
        .json({ message: "User not found, Signup first", isLoggedIn: false });
    }
    res.json("Login fetched");
  } catch (error) {
    console.log("Login error");
    res
      .status(400)
      .json({ message: "Login Error Check Your Code", isLoggedIn: false });
  }
});

app.listen(PORT, () => {
  console.log("Server started successfully.");
});
