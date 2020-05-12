import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import app from "../base";
import Navbar from "./Layout/Navbar";
import cover from "./cover.jpg";

function Home() {
  return (
    <div className="Nav">
      <Navbar />
      <ajaxApp />
      <img src={cover} alt="cover" className="coverimg"></img>
    </div>
  );
}
export default Home;
