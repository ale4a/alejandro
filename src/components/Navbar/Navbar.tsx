import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div>
      <Link to="#home" smooth>
        Home
      </Link>
      <Link to="#about" smooth>
        About
      </Link>
      <Link to="#project" smooth>
        Projects
      </Link>
      <Link to="#contact" smooth>
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
