/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Vacations from "../pages/vacations";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Vacations} />
        <Route path="/vacations" component={Vacations} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
