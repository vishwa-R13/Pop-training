import React from "react";
import Home from "../src/components/functional/Home";
import About from "../src/components/functional/About";
import Navbar from "../src/components/Navbar.jsx";
import Contact from "../src/components/functional/Contact.jsx";
import Hook from "../src/components/functional/Hook.jsx"
import Login from "./components/functional/Login.jsx";
import UseEffect from "../src/components/functional/Hook/UseEffect.jsx"
import UseEffectAPI from "../src/components/functional/Hook/UseEffectAPI.jsx"
import UseState from "../src/components/functional/Hook/UseState.jsx"
import UseRef from "../src/components/functional/Hook/UseRef.jsx"
import UseMemo from "../src/components/functional/Hook/UseMemo.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App=()=> {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home properties="Hello"/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ue" element={<UseEffect />} />
          <Route path="/us" element={<UseState />} />
          <Route path="/ur" element={<UseRef />} />
          <Route path="/um" element={<UseMemo />} />
          <Route path="/uea" element={<UseEffectAPI />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Hook" element={<Hook />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
