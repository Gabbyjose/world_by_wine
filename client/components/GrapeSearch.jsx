import React, { Component } from "react";
import { fetchAllGrapes } from '../store';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class GrapeSearch extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGrapes()
  }

  render() {
    return (
      <div>
        <h2>Browse Grapes</h2>
        <ul>
          {this.props.grapes.map(grape => (<li key={grape.name}><Link to={`/grapes/${+grape.id}`}>{grape.name}</Link></li>))}
        </ul>
      </div>
    )
  }

}


const mapState = ({ countries, regions, grapes }) => ({
  countries, regions, grapes
})

const mapDispatch = (dispatch) => ({
  fetchGrapes: () => {
    dispatch(fetchAllGrapes())
  }
})

export default connect(mapState, mapDispatch)(GrapeSearch)
