import React, { Component } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/grapes">Grape Search</Link>
      </nav>

      <div className="welcome">
        <h1>Gabby's World by Wine</h1>
      </div>
    </div>
  );
};

export default Navbar;
