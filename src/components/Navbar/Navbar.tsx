import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div>
      <Link to="#Home" smooth>
        Home
      </Link>
      <Link to="#About" smooth>
        About
      </Link>
      <Link to="#Projects" smooth>
        Projects
      </Link>
      <Link to="#Contact" smooth>
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
