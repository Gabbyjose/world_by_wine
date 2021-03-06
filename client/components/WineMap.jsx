import React, { Component } from 'react';
import { fetchCountries, fetchRegions, fetchRegionGrapes } from '../store';
import { connect } from 'react-redux';

class WineMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      worldMap: {
        map: "world_mill",
        backgroundColor: "transparent",
        zoomOnScroll: false,
        regionStyle: {
          initial: {
            fill: "white",
            "fill-opacity": 1,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 1
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: "pointer"
          }
        },
        series: {
          regions: [{
            values: {
              'FR': '#800080',
              'ZA': '#8B008B',
              'US': '#9400D3',
              'AR': '#9932CC',
              'ES': '#4B0082'
            },
            attribute: 'fill'
          }]
        },
        onRegionClick: (event, code) => this.handleClick(event, code, this.props)
      },
      localRange: '',
      regionGrapes: ''

    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRegionClick = this.handleRegionClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
    this.createMaps = this.createMaps.bind(this)
  }

  componentWillMount() {
    this.props.getRegions();
    this.props.getCountries();

  }

  componentDidMount() {
    const map = document.getElementById("world-map")
    $(map).vectorMap(this.state.worldMap);
  }

  createMaps(mapName) {
    const country = this.props.countries.find(el => el.mapName === mapName)
    const colors = ['#800080',
      '#8B008B',
      '#9400D3',
      '#9932CC',
      '#4B0082']
    const regionValues = {}
    country.regions.forEach((region, index) => { regionValues[region.value + ''] = colors[index] })

    const newMap = {
      map: mapName,
      backgroundColor: "transparent",
      zoomOnScroll: false,
      regionStyle: {
        initial: {
          fill: "white",
          "fill-opacity": 1,
          stroke: "none",
          "stroke-width": 0,
          "stroke-opacity": 1
        },
        hover: {
          "fill-opacity": 0.8,
          cursor: "pointer"
        }
      },
      series: {
        regions: [{
          values: regionValues,
          attribute: 'fill'
        }]
      },
      onRegionClick: (event, code) => this.handleRegionClick(event, code, this.props)
    }

    return newMap;
  }

  handleRegionClick(event, code) {

    const localRegion = this.props.regions.find(el => el.value === code);
    const regionGrapes = localRegion.grapes.map(el => el.name).join(', ')
    this.setState({ localRegion, regionGrapes });

  }

  handleClick(event, code) {
    const country = this.props.countries.find(el => el.code === code)
    const newMap = this.createMaps(country.mapName);
    const tooltips = document.getElementsByClassName('jvectormap-tip');
    Array.prototype.forEach.call(tooltips, el => el.parentNode.removeChild(el));

    const map = document.getElementById("world-map")
    const oldMap = document.getElementsByClassName('jvectormap-container');
    oldMap[0].parentNode.removeChild(oldMap[0]);
    $(map).vectorMap(newMap);
  }

  handleCloseClick() {
    this.setState({ localRegion: '', regionGrapes: '' })
  }

  resetClick() {
    const tooltips = document.getElementsByClassName('jvectormap-tip');
    Array.prototype.forEach.call(tooltips, el => el.parentNode.removeChild(el));
    const map = document.getElementById("world-map")
    const oldMap = document.getElementsByClassName('jvectormap-container');
    if (oldMap[0]) oldMap[0].parentNode.removeChild(oldMap[0]);
    $(map).vectorMap(this.state.worldMap);
  }

  render() {
    const region = this.state.localRegion;

    return (
      <div className="flex">
        <button onClick={this.resetClick} className="ui button">Reset</button>
        <div id="world-map" className="map" />
        {!!region &&
          (<div className="ui modal pop-up">
            <i className="close icon" onClick={this.handleCloseClick} />
            <div className="header">{region.name}</div>
            <div className="image content">
              <img className="image" src="css/loire-valley.jpg" />
            </div>
            <div className="description">
              <div className="row">
                <div className="column-one-fourth">Grapes:</div>
                <div className="column-three-fourths">{this.state.regionGrapes}</div>
              </div>

              <div className="row">
                <div className="column-one-fourth">Primary Flavors:</div>
                <div className="column-three-fourths">{region.flavors}</div>
              </div>
              <div className="row">
                <div className="column-one-fourth">Fun Facts:</div>
                <div className="column-three-fourths">{region.description}</div>
                <div className="row">
                  <div className="column-one-fourth">Things to Say:</div>
                  <div className="column-three-fourths">{region.quote}</div>
                </div>
              </div>
            </div>
          </div>)}
      </div>
    )
  }
}

const mapState = ({ countries, regions }) => ({ countries, regions });

const mapDispatch = (dispatch) => ({
  getCountries: () => {
    dispatch(fetchCountries());
  },
  getRegions: () => {
    dispatch(fetchRegions())
  },
  getGrapes: (regionId) => {
    dispatch(fetchRegionGrapes(regionId));
  }
});


export default connect(mapState, mapDispatch)(WineMap)
