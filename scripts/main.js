$(function(){


  //declaring wine objects
  var franceWineInfo = {
    regions: ['Bordeaux', 'Rhone', 'Loire', 'Champagne'],
    grapes: ['Cabernet Sauvignon', 'Merlot', 'Petit Verdot', 'Cabernet Franc', 'Syrah']

  }

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

// This is the drill down functionality
  // new jvm.MultiMap({
  //   container: $('#modalMap'),
  //   maxLevel: 1,
  //   main: {
  //     map: 'world_mill'
  //   },
  //   mapUrlByCode: function(code, multiMap){
  //     return 'scripts/jquery-jvectormap-fr_regions_mill.js';
  //   }
  // });

  function testClick(){
    handleRegionClick();
    new jvm.MultiMap({
      container: $('#modalMap'),
      maxLevel: 1,
      main: {
        map: 'world_mill'
      },
      mapUrlByCode: function(code, multiMap){
        return 'scripts/jquery-jvectormap-fr_regions_mill.js';
      }
  });  
  }

  var world = {
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
      },
      selected: {
        fill: 'red'
      }  
    }
  }

    world.onRegionClick = testClick;
    
    //reset map focus to the origin of 0,0
    $('button').click(reset);

    function reset (){
       $('#world-map').vectorMap('set', 'focus', {
        scale: 1,
        x: 0,
        y: 0,
        animate: true     
      });
    }

    world.series = {
      regions: [{
       values: {
         'AU': '#9932CC',
         'FR': 'indigo',
         'ZA': '#9932CC',
         'US': '#9932CC',
         'AR': '#9932CC',
         'ES': 'purple',
         'IT': 'purple',
         'PT': '#9400D3',
         'DE': '#9400D3'
       },
       attribute: 'fill'
      }]
     }


    $('#world-map').vectorMap(world);


   function handleRegionClick(event, code) {
     //This will be the code to zoom in on a country when selected if a region map is available
     if (code === 'FR'){
      countryMap.map = 'fr_regions_mill';
      countryName = 'France';
      callCountryMap(countryMap, countryName);
     }

     else if (code === 'US'){
      countryMap.map = 'us_aea';
      countryName = 'United States';
      callCountryMap(countryMap, countryName);    
     }

     else if (code === 'ES'){
      countryMap.map = 'es_mill';
      countryName = 'Spain';
      callCountryMap(countryMap, countryName);
     }

     else if (code === 'AR'){
      countryMap.map = 'ar_mill';
      countryName = 'Argentina';
      callCountryMap(countryMap, countryName);
     }

     else if (code === 'IT'){
      countryMap.map = 'it_regions_mill';
      countryName = 'Italy';
      callCountryMap(countryMap, countryName);
     }

     else if (code === 'ZA'){
      countryMap.map = 'za_mill';
      countryName = 'South Africa';
      callCountryMap(countryMap, countryName);
     }

     else {

      }
       // Since we get the country code, let's do something with it.
     focusOnClickedCountry(code);
   }



 
   function callCountryMap(countryMap, countryName){
     
      $('.header').html(countryName);
      $('#modalMap').html('');
      $('#modalMap').vectorMap(countryMap);
      // $('#modalMap').updateSize();
      $('.ui.modal').modal('show');
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




});