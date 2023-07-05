import React from "react";

const Navbar = () => {
  return (
    <header className="flex container">
      <span>
        <div>
          <img src="/vite.svg" alt="logo" />
          {/* <h3>expTRk</h3> */}
        </div>
      </span>
      <nav>
        <ul className="header-nav flex">
          <li>SERVICES</li>
          <li>ABOUT US</li>
          <li>
            <button>Sign in</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
