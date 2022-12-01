import React from "react";
import { NavLink } from "react-router-dom";
import './style.css'



function NavBar() {
  return (
    <div>
      <NavLink className="navbar" to="/">
        Walks
      </NavLink>
      <NavLink className="navbar" to="/dogs/:id">
        Edit Puppers
      </NavLink>
      <NavLink className="navbar" to="/dogs/new">
        Add a Dogo!
      </NavLink>
    </div>
  )
}

export default NavBar;