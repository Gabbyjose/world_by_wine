import React, { Component } from "react";
import { connect } from 'react-redux';

class GrapeDetail extends Component {
  constructor() {
    super()
  }

  render() {
    console.log(this.props.grape.regions)
    return (<div className="browseGrape"><h2>Grape: {this.props.grape.name}</h2>
      <h3>Regions:
      <ul>
          {this.props.grape.regions.map(el => <li>{el.name}</li>)}
        </ul>
      </h3>
    </div>);
  }
}

const mapState = (state, ownProps) => {
  const grapeId = +ownProps.match.params.id;
  return {
    grape: state.grapes.find(el => el.id === grapeId)
  }
}

export default connect(mapState)(GrapeDetail);
