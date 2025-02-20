import { Link } from "react-router-dom";
import "../components/css/Navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <div>
          <li>
            <Link to="/Hook">Hook</Link>
          </li>
          <ul style={{ textDecoration: "none" }}>
            <li>
              <Link to="/ue">UseEffect</Link>
            </li>
            <li>
              <Link to="/us">UseState</Link>
            </li>

            <li>
              <Link to="/uea">UseEffectAPI</Link>
            </li>
            <li>
              <Link to="/ur">UseRef</Link>
            </li>
            <li>
              <Link to="/um">UseMemo</Link>
            </li>
          </ul>
        </div>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/SignUp">SignUp</Link>
        </li>
      </nav>
    </header>
  );
};
export default Navbar;
