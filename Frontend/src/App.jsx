import React from "react";
import Home from "../src/components/functional/Home";
import About from "../src/components/functional/About";
import Signup from "../src/components/functional/Signup.jsx";
import Navbar from "./components/Navbar.jsx";
import Contact from "../src/components/functional/Contact.jsx";
import Hook from "../src/components/functional/Hook.jsx"
import Login from "./components/functional/Login.jsx";
import UseEffect from "../src/components/functional/Hook/UseEffect.jsx"
import UseCallback from "../src/components/functional/Hook/UseCallback.jsx"
import UseEffectAPI from "../src/components/functional/Hook/UseEffectAPI.jsx"
import UseState from "../src/components/functional/Hook/UseState.jsx"
import UseMemoizes from "../src/components/functional/Hook/customeHook/UseMemoize.jsx"
import Hoc from "../src/components/functional/HOC/Hoc.jsx"
import UseRef from "../src/components/functional/Hook/UseRef.jsx"
import UseMemo from "../src/components/functional/Hook/UseMemo.jsx"
//import CoE from "../src/components/functional/Context/CoE.jsx"
// import Faculty from "../src/components/functional/Context/Faculty.jsx"
import Memo from "./components/functional/Hook/Memoization/Memo.jsx";
import LazyLoadingAndSuspense from "../src/components/functional/Hook/Memoization/LazyLoadingAndSuspense.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom" ;
import CoE from "./components/functional/CoE.jsx";

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
          <Route path="/ucb" element={<UseCallback />} />
          <Route path="/umz" element={<UseMemoizes />} />
          <Route path="/uea" element={<UseEffectAPI />} />
          <Route path="res" element={<CoE/>}/>
          <Route path="/hoc" element={<Hoc />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Hook" element={<Hook />} />
          <Route path="/memo" element={<Memo />} />
          <Route path="/lazy" element= {<LazyLoadingAndSuspense />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
