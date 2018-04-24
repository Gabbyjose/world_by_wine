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
      }

    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRegionClick = this.handleRegionClick.bind(this)
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

    const region = this.props.regions.find(el => el.value === code)
    console.log(region)
  }

  handleClick(event, code) {
    const newMap = this.state[code];
    const map = document.getElementById("world-map")
    $(map).vectorMap(newMap);
  }

  render() {
    console.log(this.props)
    return (<div id="world-map" className="map" />)
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
