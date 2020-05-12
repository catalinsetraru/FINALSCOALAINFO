import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "./logo.png";
import app from "../../base";

const Navbar = () => {
  return (
    <nav className="navwrapper">
      <div className="container">
        <Link to="/" className="appname">
          <img src={logo} alt="logonavbar" className="logo" />
        </Link>
        <Link to="/list" className="list">
          List
        </Link>
        <Link to="/SignUp" className="register">
          Register
        </Link>
        <Link to="/Login" className="login">
          Login
        </Link>
        <Link to="/" className="signout" onClick={() => app.auth().signOut()}>
          Sign Out
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
