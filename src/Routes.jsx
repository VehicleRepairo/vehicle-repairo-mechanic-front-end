import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./home";
import ServiceCompletionPage from "./Service";
import AppointmentsPage from "./appointments";
import ProfilePage from "./profile";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/serviceCompletion" component={ServiceCompletionPage} />
        <Route exact path="/appointments" component={AppointmentsPage} />
        <Route exact path="/profile" component={ProfilePage} />
      </Switch>
    </Router>
  );
};

export default Routes;
