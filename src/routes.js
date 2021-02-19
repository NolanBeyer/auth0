import React from "react";
import Profile from "./components/Profile";
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" />
      <PrivateRoute path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
);
