import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import Navbar from "./templates/Layout/Navbar";
import cover from "./templates/cover.jpg";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      <Navbar />
      <div>
        <img src={cover} alt="cover" className="coverimg"></img>
        <h1 className="header">Sign up</h1>
        <form onSubmit={handleSignUp} className="loginform">
          <label className="email">
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label className="password">
            Password
            <input name="password" type="password" placeholder="Password" />
          </label>
          <button type="submit" className="submitlogin">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
