import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        {/* INSTRUCTION: create a list of links that allows the user to navigate to the Dogs, Cats, and SmallAnimals pages */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dogs">Dogs</Link>
        </li>
        <li>
          <Link to="/cats">Cats</Link>
        </li>
        <li>
          <Link to="/small-animals">Small Animals</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
