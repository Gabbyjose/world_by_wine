$(function(){

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
    $('button').click(function(){
      $('#world-map').vectorMap('set', 'focus', 1, 0, 0);
    });

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


    function wineLabel (event, code) {
      if (code == 'FR'){
        console.log(franceWineInfo);
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
     if (code=='AR'){
        // function(code, multiMap){
        //   return 'jquery-jvectormap-data-'+
        //          code.toLowerCase()+'-'+
        //          multiMap.defaultProjection+'-en.js';
        // }
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


  //declaring wine objects
  var franceWineInfo = {
    regions: ['Bordeaux', 'Rhone', 'Loire', 'Champagne'],
    grapes: ['Cabernet Sauvignon', 'Merlot', 'Petit Verdot', 'Cabernet Franc', 'Syrah']

  }
  


});