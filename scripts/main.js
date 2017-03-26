$(function(){


  //declaring wine objects
  var franceWineInfo = {
    regions: ['Bordeaux', 'Rhone', 'Loire', 'Champagne'],
    grapes: ['Cabernet Sauvignon', 'Merlot', 'Petit Verdot', 'Cabernet Franc', 'Syrah']

  }
  
  var frenchMap = {
    map: 'fr_regions_mill',
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


  var option = {
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

    option.onRegionClick = handleRegionClick;
    
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

    option.series = {
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

     //using the Labels object and the render function
     option.labels = {
      render: {
        'FR': 'Bordeaux',
        'ES': 'Rioja'
      }
     }

    $('#world-map').vectorMap(option);

    $('#france-map').vectorMap(frenchMap);
    $('#france-map').vectorMap('set', 'focus', {
        scale: 1,
        x: 0.5,
        y: 0.5   
      });

    // $('#france-map').vectorMap('set', 'focus', 1);


    function wineLabel (event, code) {
      if (code == 'FR'){
        console.log(franceWineInfo.regions);

      }
      else if (code == 'ZA'){
        console.log('Shiraz');
      }
      else if (code == 'US'){
        console.log('Cabernet Sauvignon');
      }
      else if (code == 'AR'){
        console.log('Malbec');
      }
    }

   function handleRegionClick(event, code) {
     //This will be the code to zoom in on a country when selected if a region map is available
     if (code === 'FR'){
      $('.ui.modal').modal('show');
     }

     else {

       console.log('this: ', this);
       console.log('event: ', event);
       console.log('code: ', code);

    }
       // Since we get the country code, let's do something with it.
     wineLabel(event, code);
     focusOnClickedCountry(code);
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

  // function mapReset(){
  //     $('#world-map').reset();
  //     console.log('pressed reset');
  //   };




});