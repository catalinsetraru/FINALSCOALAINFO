import React from "react";
import "./App.css";
import List from "./List";
import Homepage from "./templates/Homepage";
import Delete from "./templates/Delete";
import AddTask from "./templates/Add";
import ViewTask from "./templates/viewTask";
import Edit from "./templates/Edit";
import { AuthProvider } from "./Auth";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="app_body">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/list" component={List} />
            <Route path="/delete/:id" component={Delete} />
            <Route path="/add/" component={AddTask} />
            <Route path="/view/:id" component={ViewTask} />
            <PrivateRoute path="/task/:id" component={Edit} />
            <PrivateRoute exact path="/" component={Homepage} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
