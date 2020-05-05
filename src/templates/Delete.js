import React, { Component } from "react";
import axios from "axios";

import "../App.css";
import TasksDataService from "./taks.services";

function Delete({ match }) {
  // const axios = require("axios");

  TasksDataService.delete(match.params.id)
    .then((response) => {
      console.log(response.data);
    })
    .catch((e) => {
      console.log(e);
    });

  return (
    <div className="Delete">
      <h1>Task was deleted</h1>
    </div>
  );
}
export default Delete;
