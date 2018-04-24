import React, { Component } from "react";
import { WineMap, GrapeSearch, Home } from "./components";
import { Switch, Route } from "react-router-dom";

class Routes extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/map" component={WineMap} />
        <Route path="/grapes" component={GrapeSearch} />
      </Switch>
    );
  }
}

export default Routes;
