import React, { Component } from "react";
import { WineMap, GrapeSearch } from "./components";

class Routes extends Component {
  constructor() {}

  render() {
    <Switch>
      <Link to="/map" component={WineMap} />
      <Link to="/grape" component={GrapeSearch} />
    </Switch>;
  }
}
