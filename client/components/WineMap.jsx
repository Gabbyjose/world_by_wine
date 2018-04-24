import React, { Component } from 'react';
import { fetchCountries } from '../store';
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
          },
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
        }
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
        }
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
        }
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
        }
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
        }
      }

    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.getCountries();
  }

  componentDidMount() {
    const map = document.getElementById("world-map")
    $(map).vectorMap(this.state.worldMap);
  }

  handleClick(event, code) {
    const newMap = this.props.countries.find(el => el.code === code);
    const map = document.getElementById("world-map")
    $(map).vectorMap(newMap.mapName);
  }

  render() {
    return (<div id="world-map" className="map" />)
  }
}

const mapState = ({ countries }) => ({ countries });

const mapDispatch = (dispatch) => ({
  getCountries: () => {
    dispatch(fetchCountries());
  }
});


export default connect(mapState, mapDispatch)(WineMap)
