import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import Navbar from "./templates/Layout/Navbar.js";
import cover from "./templates/cover.jpg";
import "./App.css";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Navbar />
      <div className="containerlogin">
        <img src={cover} alt="cover" className="coverimg"></img>
        <h1 className="header">Log in</h1>
        <form onSubmit={handleLogin} className="loginform">
          <label className="email">
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label className="password">
            Password
            <input name="password" type="password" placeholder="Password" />
          </label>
          <button type="submit" className="submitlogin">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Login);
