import React from "react";
import Profile from "./components/Profile";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" />
      <Route path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
);
