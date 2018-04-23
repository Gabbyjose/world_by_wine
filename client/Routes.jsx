import React, { Component } from "react";
import { WineMap, GrapeSearch, Home } from "./components";

class Routes extends Component {
  constructor() {}

  render() {
    <Switch>
      <Link to="/" component={Home} />
      <Link to="/map" component={WineMap} />
      <Link to="/grapes" component={GrapeSearch} />
    </Switch>;
  }
}

export default Routes;
