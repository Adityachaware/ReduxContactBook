import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar shadow fixed-top navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Contact Book
          </Link>
          <Link className="navbar-brand" to="/contacts/add">
            <button className="bg-white">create contact</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
