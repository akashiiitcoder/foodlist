import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
const homepage = () => {
  return (
    <div>
      <center>
          <Link to="/admin" className="btn btn-light" style={{marginRight:1}}>
            Admin
          </Link>
          <Link to="/user"  className="btn btn-light">
            User
          </Link>
      </center>
      
    </div>
  )
}

export default homepage
