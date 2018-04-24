import React, { Component } from 'react';
import { fetchCountries, fetchRegions } from '../store';
import { connect } from 'react-redux';
// const reactJvectormap = require("react-jvectormap")

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
      FR: {
        map: 'fr_regions_mill',
        backgroundColor: 'transparent',
        zoomOnScroll: false,
        regionStyle: {
          initial: {
            fill: 'white',
            "fill-opacity": 1,
            stroke: 'none',
            "stroke-width": 0,
            "stroke-opacity": 1
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: 'pointer'
          }
        },
        series: {
          regions: [{
            values: {
              'FR-F': '#9400D3',
              'FR-B': '#4B0082',
              'FR-D': '#800080',
              'FR-V': '#8B008B',
              'FR-A': '#9932CC'
            },
            attribute: 'fill'
          }]
        },
        onRegionClick: (event, code) => this.handleRegionClick(event, code, this.props)
      },
      ES: {
        map: 'es_mill',
        backgroundColor: 'transparent',
        zoomOnScroll: false,
        regionStyle: {
          initial: {
            fill: 'white',
            "fill-opacity": 1,
            stroke: 'none',
            "stroke-width": 0,
            "stroke-opacity": 1
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: 'pointer'
          }
        },
        series: {
          regions: [{
            values: {
              'ES-BU': '#800080',
              'ES-LO': '#4B0082',
              'ES-T': '#8B008B',
              'ES-PO': '#9932CC'
            },
            attribute: 'fill'
          }]
        },
        onRegionClick: (event, code) => this.handleRegionClick(event, code, this.props)
      },
      AR: {
        map: 'ar_mill',
        backgroundColor: 'transparent',
        zoomOnScroll: false,
        regionStyle: {
          initial: {
            fill: 'white',
            "fill-opacity": 1,
            stroke: 'none',
            "stroke-width": 0,
            "stroke-opacity": 1
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: 'pointer'
          }
        },
        series: {
          regions: [{
            values: {
              'AR-M': '#4B0082',
              'AR-A': '#9932CC',
            },
            attribute: 'fill'
          }]
        },
        onRegionClick: (event, code) => this.handleRegionClick(event, code, this.props)
      },
      US: {
        map: 'us_aea',
        backgroundColor: 'transparent',
        zoomOnScroll: false,
        regionStyle: {
          initial: {
            fill: 'white',
            "fill-opacity": 1,
            stroke: 'none',
            "stroke-width": 0,
            "stroke-opacity": 1
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: 'pointer'
          }
        },
        series: {
          regions: [{
            values: {
              'US-CA': 'indigo',
              'US-NY': '#9932CC',
              'US-OR': '#9400D3'
            }
          }]
        },
        onRegionClick: (event, code) => this.handleRegionClick(event, code, this.props)
      },
      ZA: {
        map: 'za_mill',
        backgroundColor: 'transparent',
        zoomOnScroll: false,
        regionStyle: {
          initial: {
            fill: 'white',
            "fill-opacity": 1,
            stroke: 'none',
            "stroke-width": 0,
            "stroke-opacity": 1
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: 'pointer'
          }
        },
        series: {
          regions: [{
            values: {
              'ZA-WC': 'indigo'
            }
          }]
        },
        onRegionClick: (event, code) => this.handleRegionClick(event, code, this.props)
      },
      localRange: ''

    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRegionClick = this.handleRegionClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.resetClick = this.resetClick.bind(this)
  }

  componentWillMount() {
    this.props.getCountries();
    this.props.getRegions();
  }

  componentDidMount() {
    const map = document.getElementById("world-map")
    $(map).vectorMap(this.state.worldMap);
  }

  handleRegionClick(event, code) {
    const localRegion = this.props.regions.find(el => el.value === code);
    this.setState({ localRegion });

  }

  handleClick(event, code) {
    const newMap = this.state[code];
    const tooltips = document.getElementsByClassName('jvectormap-tip');
    Array.prototype.forEach.call(tooltips, el => el.parentNode.removeChild(el));

    const map = document.getElementById("world-map")
    const oldMap = document.getElementsByClassName('jvectormap-container');
    oldMap[0].parentNode.removeChild(oldMap[0]);
    $(map).vectorMap(newMap);
  }

  handleCloseClick() {
    this.setState({ localRegion: '' })
  }

  resetClick() {
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
                <div className="column-one-fourth">Grape of Fame:</div>
                <div className="column-three-fourths">{region.fameGrape}</div>
              </div>
              <div className="row">
                <div className="column-one-fourth">Other Grapes:</div>
                <div className="column-three-fourths">{region.grapes}</div>
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
  }
});


export default connect(mapState, mapDispatch)(WineMap)
