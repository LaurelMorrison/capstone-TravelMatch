import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo.png";
import "./nav.css"

export const NavBar = (props) => {
const history = useHistory();

  const handleLogout = () => {
    sessionStorage.clear();
    history.push("/login")}


  return (
    <nav className="navbar">
      <div>
      <img className="logo" src={logo} alt="logo"/>
      </div>
      <div>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" onClick={handleLogout} to="/Login"> Logout </Link>
        </li>
      </ul>
      </div>
    </nav>
  )
}
