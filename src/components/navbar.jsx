import React, { Component } from "react";
//Stateless functional component this means you must add in props manually. You need the curly braces inside the parenthesis for the destructuring of props.totalCounters to just get totalCounters
const NavBar = ({ totalCounters }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
