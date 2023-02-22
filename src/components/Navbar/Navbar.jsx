import React from "react";
import './navbar.css'
import { MdNoFood } from "react-icons/md";
function Navbar() {
  return (
    <div className="bg-light" >
      <nav className="navbar navbar-light" id="nav">
        <div className="container-fluid" >
          <span className="navbar-brand h5" size='20px'><MdNoFood size='50px'></MdNoFood> Hot Foods</span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
