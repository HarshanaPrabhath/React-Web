import React from "react";
import "./Header.css";
import {Link} from "react-router"
 
function Header() {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">PS</h2>

        <div className='navdiv'>
          <li>
           <Link to="/">Home</Link>
          </li>
          <li>
           <Link to="/aboutus">About US</Link>
          </li>
          
        </div>

      </nav>
    </>
  );
}

export default Header;
