// $(function () {


//   //reset map focus to the origin of 0,0
//   $('.reset').click(reset);

//   function handleRegionClick(event, code) {
//     //This will be the code that either calls up the regional map if it's available, or zoom into a country
//     if (code === 'FR') {
//       callCountryMap('franceMap', 'france', code);

//     }

//     else if (code === 'US') {
//       callCountryMap('usMap', 'us', code);
//     }

//     else if (code === 'ES') {
//       callCountryMap('spainMap', 'spain', code);

//     }

//     else if (code === 'AR') {
//       callCountryMap('argentinaMap', 'argentina', code);

//     }

//     else if (code === 'ZA') {
//       callCountryMap('southAfricaMap', 'south-africa', code);
//     }

//     else {
//       focusOnClickedCountry(code);
//     }
//   }

//   function reset() {
//     if ($('#world-map').hasClass('hide')) {
//       $('#world-map').toggleClass('hide');
//       $('#argentina-map').toggleClass('hide', true);
//       $('#france-map').toggleClass('hide', true);
//       $('#spain-map').toggleClass('hide', true);
//       $('#italy-map').toggleClass('hide', true);
//       $('#us-map').toggleClass('hide', true);
//       $('#south-africa-map').toggleClass('hide', true);
//       $('#world-map').vectorMap('set', 'focus', {
//         scale: 1,
//         x: 0,
//         y: 0,
//         animate: true
//       })
//     }

//     else {
//       $('#world-map').vectorMap('set', 'focus', {
//         scale: 1,
//         x: 0,
//         y: 0,
//         animate: true
//       })
//     }

//   };


//   function hideWorldMap() {
//     $('#world-map').toggleClass('hide');
//   }

//   function callCountryMap(countryMap, countryName, code) {
//     countryMap = '#' + countryName + '-map';
//     $(countryMap).toggleClass('hide');
//     hideWorldMap();
//   }

//   function focusOnClickedCountry(code) {
//     $('#world-map').vectorMap('set', 'focus', {
//       /**
//        * The region property takes a string that represents the region. It can
//        * be written in manually, but we are choosing to make it dynamic using a
//        * variable.
//        */
//       region: code,
//       animate: true
//     });
//   }

//   $('.ui.secondary.menu .item').tab();




//   var worldMarkerMap = {
//     map: 'world_mill',
//     backgroundColor: 'transparent',
//     scaleColors: ['#C8EEFF', '#0071A4'],
//     normalizeFunction: 'polynomial',
//     hoverOpacity: 0.7,
//     hoverColor: false,
//     markerStyle: {
//       initial: {
//         fill: 'purple',
//         stroke: '#383f47'
//       }
//     }
//   }

//   var pinotNoirMap = {
//     map: 'world_mill',
//     backgroundColor: 'transparent',
//     scaleColors: ['#C8EEFF', '#0071A4'],
//     normalizeFunction: 'polynomial',
//     hoverOpacity: 0.7,
//     hoverColor: false,
//     markerStyle: {
//       initial: {
//         fill: 'purple',
//         stroke: '#383f47'
//       }
//     },
//     markers: [
//       { latLng: [47.0525, 4.3837], name: 'Burgundy' },
//       { latLng: [38.5025, -122.2654], name: 'Napa Valley' },
//       { latLng: [44.9426, -122.9338], name: 'Willamette Valley' },
//       { latLng: [-32.8895, -68.8458], name: 'Mendoza' },
//       { latLng: [-41.5038, 173.9672], name: 'Marlborough' },
//       { latLng: [-45.2828, 169.6568], name: 'Central Otago' },
//       { latLng: [-33.3190, -71.4076], name: 'Casablanca Valley' },
//       { latLng: [-27.733333, 32.05], name: 'Elgin' },
//       { latLng: [50.3334, 7.1637], name: 'Ahr' },
//       { latLng: [46.7341, 11.2888], name: 'South Tyrol' },
//       { latLng: [-37.4713, 144.7852], name: 'Victoria' },
//       { latLng: [45.9432, 24.9668], name: 'Romania' }
//     ]
//   }

//   var cabSauvMap = {
//     map: 'world_mill',
//     backgroundColor: 'transparent',
//     scaleColors: ['#C8EEFF', '#0071A4'],
//     normalizeFunction: 'polynomial',
//     hoverOpacity: 0.7,
//     hoverColor: false,
//     markerStyle: {
//       initial: {
//         fill: 'purple',
//         stroke: '#383f47'
//       }
//     },
//     markers: [
//       { latLng: [44.8378, -.5792], name: 'Bordeaux' },
//       { latLng: [38.5025, -122.2654], name: 'Napa Valley' },
//       { latLng: [43.7711, 11.2486], name: 'Tuscany' },
//       { latLng: [-32.8895, -68.8458], name: 'Mendoza' },
//       { latLng: [37.1108, -121.1108], name: 'Santa Cruz' },
//       { latLng: [38.291859, -122.4580356], name: 'Sonoma' },
//       { latLng: [35.6368759, -120.6545022], name: 'Paso Robles' },
//       { latLng: [45.0522366, 7.515388499], name: 'Piedmont' },
//       { latLng: [-34.6182425, 138.9001364], name: 'Barossa Valley' },
//       { latLng: [-37.58111, 144.713889], name: 'Sunbury' },
//       { latLng: [-33.955, 115.075], name: 'Margaret River Valley' },
//       { latLng: [-37.896549, 175.60236429], name: 'North Island' },
//       { latLng: [-33.9321045, 18.8601519], name: 'Stellenbosch' },
//       { latLng: [46.0645809, -118.34302], name: 'Walla Walla Valley' }
//     ]
//   }

//   var chardonnayMap = {
//     map: 'world_mill',
//     backgroundColor: 'transparent',
//     scaleColors: ['#C8EEFF', '#0071A4'],
//     normalizeFunction: 'polynomial',
//     hoverOpacity: 0.7,
//     hoverColor: false,
//     markerStyle: {
//       initial: {
//         fill: 'yellow',
//         stroke: '#383f47'
//       }
//     },
//     markers: [
//       { latLng: [47.0525, 4.3837], name: 'Burgundy' },
//       { latLng: [38.5025, -122.2654], name: 'Napa Valley' },
//       { latLng: [44.9426, -122.9338], name: 'Willamette Valley' },
//       { latLng: [47.8153, 3.8005], name: 'Chablis' },
//       { latLng: [-32.8895, -68.8458], name: 'Mendoza' },
//       { latLng: [47.504582, 1.0105289], name: 'Loire Valley' },
//       { latLng: [-37.4713, 144.7852], name: 'Victoria' },
//       { latLng: [-33.9550, 115.0750], name: 'Margaret River' },
//       { latLng: [-37.816637, 144.9775221], name: 'Yarra Valley' },
//       { latLng: [-33.2277918, 21.8568586], name: 'Western Cape' },
//       { latLng: [-41.57269, 173.42166129], name: 'Marlborough' },
//       { latLng: [] }

//     ]
//   }


//   $('#world-map-markers').vectorMap(worldMarkerMap);
//   $('#pinot-noir').vectorMap(pinotNoirMap);
//   $('#cab-sauv').vectorMap(cabSauvMap);
//   $('#chardonnay').vectorMap(chardonnayMap);

//   $('.ui.dropdown').dropdown({
//     onChange: function (value, text, $selectedItem) {
//       addMap(value);
//     }
//   });


//   function addMap(value) {
//     map = '#' + value
//     $('#world-map-markers').toggleClass('hide', true);
//     $('#cab-sauv').toggleClass('hide', true);
//     $('#pinot-noir').toggleClass('hide', true);
//     $('#chardonnay').toggleClass('hide', true);
//     $(map).toggleClass('hide', false);
//   }


// });
