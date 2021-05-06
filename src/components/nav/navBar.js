import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo.png";
import "./nav.css"

export const NavBar = (props) => {
  const history = useHistory();

  const handleLogout = () => {
    sessionStorage.clear();
    history.push("/login")
  }


  return (
    <nav className="navbar">
      <div>
        <a href="/"><img className="logo" src={logo} alt="logo" /></a>
      </div>
      <div className="navLinks">
        <ul className="navlinkbox nav nav-pills nav-fill">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/quiz">Plan a trip</Link>
          <Link className="nav-link" to="/trips">My trips</Link>
          <Link className="nav-link" onClick={handleLogout} to="/Login"> Logout </Link>
        </ul>
      </div>
    </nav>
  )
}
