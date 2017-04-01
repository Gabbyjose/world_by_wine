$(function(){


  var countryMap = {
    map: '',
    backgroundColor: 'transparent',
    regionStyle: {
      initial: {
        fill: 'purple',
        "fill-opacity": 1,
        stroke: 'none',
        "stroke-width": 0,
        "stroke-opacity": 1
      }
    }
  }

//This is the drill down functionality

  var worldMap = {
    map: 'world_mill',
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
    }
  }

  var franceMap = {
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
          'FR-F': '#9932CC',
          'FR-B': 'indigo',
          'FR-D': '#9400D3',
          'FR-V': '#9932CC',
          'FR-A': '#DA70D6'
        },
        attribute: 'fill'
      }]
    }
  }


  var spainMap = {
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
          'ES-BU': '#9932CC',
          'ES-LO': 'indigo',
        },
        attribute: 'fill'
      }]
    }
  }


  var argentinaMap = {
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
          'AR-M': '#9932CC',
          'AR-A': 'indigo',
        },
        attribute: 'fill'
      }]
    }
  }


  var usMap = {
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
          'US-WA': '#9932CC',
          'US-NY': '#9932CC',
          'US-OR': '#9400D3'
        }
      }]
    }
  }

  var southAfricaMap = {
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

  worldMap.series = {
    regions: [{
      values: {
        // 'AU': '#9932CC',
        'FR': 'indigo',
        'ZA': '#9932CC',
        'US': '#9932CC',
        'AR': '#9932CC',
        'ES': 'purple'
        // 'IT': 'purple',
        // 'PT': '#9400D3',
        // 'DE': '#9400D3'
      },
    attribute: 'fill'
    }]
  }

  worldMap.onRegionClick = handleRegionClick;
  franceMap.onRegionClick = handleSubRegionClick;
  argentinaMap.onRegionClick = handleSubRegionClick;
  spainMap.onRegionClick = handleSubRegionClick;
  usMap.onRegionClick = handleSubRegionClick;
  southAfricaMap.onRegionClick = handleSubRegionClick;


  $('#world-map').vectorMap(worldMap);
  $('#france-map').vectorMap(franceMap);
  $('#us-map').vectorMap(usMap);  
  $('#spain-map').vectorMap(spainMap);
  $('#argentina-map').vectorMap(argentinaMap);
  $('#south-africa-map').vectorMap(southAfricaMap);

  //reset map focus to the origin of 0,0
  $('button').click(reset);

   function handleRegionClick(event, code) {
     //This will be the code to zoom in on a country when selected if a region map is available
     if (code === 'FR'){
      callCountryMap('franceMap', 'france', code);

      // focusOnClickedCountry(code);
      // $('#france-map').toggleClass('hide');
      // hideWorldMap();
      // countryMap = 'francMap';
      // countryName = 'France';
      // callCountryMap(countryMap, countryName);
     }

     else if (code === 'US'){
      callCountryMap('usMap', 'us', code);
      // countryMap.map = 'us_aea';
      // countryName = 'United States';
      // callCountryMap(countryMap, countryName);    
     }

     else if (code === 'ES'){
      callCountryMap('spainMap', 'spain', code);
      // countryMap.map = 'es_mill';
      // countryName = 'Spain';
      // callCountryMap(countryMap, countryName);
     }

     else if (code === 'AR'){
      callCountryMap('argentinaMap', 'argentina', code);
      // countryMap.map = 'ar_mill';
      // countryName = 'Argentina';
      // callCountryMap(countryMap, countryName);
     }

     // else if (code === 'IT'){
     //  hideWorldMap():
     //  $('#france-map').vectorMap(franceMap);
     //  countryMap.map = 'it_regions_mill';
     //  countryName = 'Italy';
     //  callCountryMap(countryMap, countryName);
     // }

     else if (code === 'ZA'){
      callCountryMap('southAfricaMap', 'south-africa', code);
     }

     else {
      focusOnClickedCountry(code);
     }
   }

  function reset (){
     if ($('#world-map').hasClass('hide')){
       $('#world-map').toggleClass('hide');
       $('#argentina-map').toggleClass('hide', true);
       $('#france-map').toggleClass('hide', true);
       $('#spain-map').toggleClass('hide', true);
       $('#italy-map').toggleClass('hide', true);
       $('#us-map').toggleClass('hide', true);
       $('#world-map').vectorMap('set', 'focus', {
          scale: 1,
          x: 0,
          y: 0,
          animate: true     
       })       
    }
     
     else {
        $('#world-map').vectorMap('set', 'focus', {
          scale: 1,
          x: 0,
          y: 0,
          animate: true     
        })
     }

    };
  

  function hideWorldMap(){
    console.log('testing this hide feature');
    $('#world-map').toggleClass('hide');

  }

  function callCountryMap(countryMap, countryName, code){
    // $('.header').html(countryName);
    focusOnClickedCountry(code);
    countryMap = '#'+countryName+'-map';
    $(countryMap).toggleClass('hide');
    hideWorldMap();
    $(countryMap).vectorMap('set', 'focus', {
     /**
      * The region property takes a string that represents the region. It can
      * be written in manually, but we are choosing to make it dynamic using a 
      * variable.
      */
     region: code,
     animate: true
  });
    // $('#modalMap').html('');

    // $('#modalMap').updateSize();
    // $('.ui.modal').modal('show');
  }

  function focusOnClickedCountry(code) {
   $('#world-map').vectorMap('set', 'focus', {
     /**
      * The region property takes a string that represents the region. It can
      * be written in manually, but we are choosing to make it dynamic using a 
      * variable.
      */
     region: code,
     animate: true
  });
  }

  function handleSubRegionClick(event, code){
    console.log(event, code);
    if (code === "FR-F"){
      $('.ui.modal.loire').modal('show');   
    }

    else if (code === "FR-B"){
      $('.ui.modal.bordeaux').modal('show');    
    }

    else if (code === "FR-V"){
      $('.ui.modal.rhone').modal('show');   
    }

    else if (code === "FR-D"){
      $('.ui.modal.burgundy').modal('show');   
    }

    else if (code === "FR-A"){
      $('.ui.modal.alsace').modal('show');   
    }

    else if (code === "AR-M"){
       $('.ui.modal.mendoza').modal('show');       
    }

    else if (code === "AR-A"){
      $('.ui.modal.salta').modal('show');  
    }

    else if (code === "ES-BU"){
      $('.ui.modal.ribera').modal('show');       
    }

    else if (code === "ES-LO"){
      $('.ui.modal.rioja').modal('show');       
    }

    else if (code === "US-CA"){
      $('.ui.modal.california').modal('show');       
    }

    else if (code === "US-WA"){
      $('.ui.modal.washington').modal('show');       
    }

    else if (code === "US-NY"){
      $('.ui.modal.newYork').modal('show');       
    }

    else if (code === "ZA-WC"){
      $('.ui.modal.westernCape').modal('show');       
    }

    else {
      console.log('nothing');
    }
  }



});