import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Food List
        </Link>
        <div>
          <Link to="/admin/dishes/AddDish"  className="btn btn-light  ml-auto">
            Add Dish
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
