import { Link } from "react-router-dom";
// import { useState } from "react";
import "../components/css/Navbar.css";
// import { useState, useEffect } from "react";

const Navbar = () => {
  // var [dropdown, showDropdown] = useState(false);
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
        <div className="dropdown">
          <li>
            <Link to="/Hook" className="link">
              Hook
            </Link>
          </li>
          <ul className='dropdown-list' style={{ textDecoration: "none" }} >
            <li className="dropdown-link">
              <Link to="/ue" className="link">UseEffect</Link>
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
            <li>
              <Link to="/umz">UseMemoize </Link>
            </li>
            <li>
              <Link to="/ucb">UseCallback</Link>
            </li>
          </ul>
        </div>
        <li>
          <Link to="/hoc" className="link">
            Hoc
          </Link>
        </li>
        {/* <div>
          <ol>
            <li>
              <Link to="/memo" className="link">
                Memo
              </Link>
              <Link to="/lazy" className="link">
                LazyComp
              </Link>
            </li>
          </ol>
        </div> */}
        <li>
          
        </li>
        <li>
          <Link to="/Contact" className="link">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/Signup" className="link">
            SignUp
          </Link>
        </li>
      </nav>
    </header>
  );
};
export default Navbar;
