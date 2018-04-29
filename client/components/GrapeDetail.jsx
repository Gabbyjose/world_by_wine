import React, { Component } from "react";
import { connect } from 'react-redux';

class GrapeDetail extends Component {
  constructor() {
    super()
  }

  render() {
    return (<h1>You've made it to grape search for {this.props.grape.name}</h1>);
  }
}

const mapState = (state, ownProps) => {
  const grapeId = +ownProps.match.params.id;
  console.log(grapeId, state)
  return {
    grape: state.grapes.find(el => el.id === grapeId)
  }
}

export default connect(mapState)(GrapeDetail);
