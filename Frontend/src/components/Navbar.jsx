import { Link } from "react-router-dom";
// import { useState } from "react";
import "../components/css/Navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  var [dropdown, showDropdown] = useState(false);
  var [dropdown1, showDropdown1] = useState(false);
  return (
    <header>
      <nav >
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" className="link">
            About
          </Link>
        </li>
        <div className="dropdown" onMouseEnter={() => showDropdown(!dropdown)}
          onMouseLeave={() => showDropdown(!dropdown)}>
          <span>
            <Link to="/Hook" className="link">
              Hook
            </Link>
          </span>
          {dropdown && (
          <ul  className="dropdown-list" >
            <li>
              <Link to="/ue" className="link">UseEffect</Link>
            </li>
            <li>
              <Link to="/us" className="link">UseState</Link>
            </li>

            <li>
              <Link to="/uea" className="link">UseEffectAPI</Link>
            </li>
            <li>
              <Link to="/ur" className="link">UseRef</Link>
            </li>
            <li>
              <Link to="/um" className="link">UseMemo</Link>
            </li>
            <li>
              <Link to="/umz" className="link">UseMemoize </Link>
            </li>
            <li>
              <Link to="/ucb" className="link">UseCallback</Link>
            </li>
          </ul>
          )}
        </div>
        <li>
          <Link to="/hoc" className="link">
            Hoc
          </Link>
        </li>
        <div className="dropdown"
          onMouseEnter={() => showDropdown1(!dropdown1)}
          onMouseLeave={() => showDropdown1(!dropdown1)}>
          <span className="link">Memoization</span>
          {dropdown1 && (
          <ol className="dropdown-list">
            <li>
              <Link to="/memo" className="link">
                Memo
              </Link>
              </li>
              <li>
              <Link to="/lazy" className="link">
                LazyComp
              </Link>
            </li>
          </ol>
          )}
        </div>
        <li>
          <Link to="/res" className="link">
            ContextAPI
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="link">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/Login" className="link">
          Login
          </Link>
        </li>
      </nav>
    </header>
  );
};
export default Navbar;
