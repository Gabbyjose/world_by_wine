import React, { Component } from "react";
import { WineMap, GrapeSearch, GrapeDetail } from "./components";
import { Switch, Route } from "react-router-dom";

class Routes extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={WineMap} />
        <Route path="/grapes/:id" component={GrapeDetail} />
        <Route path="/grapes" component={GrapeSearch} />
      </Switch>
    );
  }
}

export default Routes;
