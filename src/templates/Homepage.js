import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import app from "../base";

function Home() {
  return (
    <div className="Nav">
      <Link to="/list">List</Link>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
      <button onClick={() => app.auth().Login()}>Log in</button>
    </div>
  );
}
export default Home;
