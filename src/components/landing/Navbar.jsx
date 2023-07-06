import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex container">
      <span className="logo flex">
        <img src="/vite.svg" alt="logo" />
        <span>Exp Tracker</span>
      </span>
      <nav>
        <ul className="header-nav flex">
          <li><a href="#home"> HOME</a></li>
          <li><a href="#about"> ABOUT US</a></li>
          <li><a href="#service">SERVICES</a></li>
          <li>
            <Link to='/auth/login'>Sign in</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
