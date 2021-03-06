// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 13,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(36.2731502, -115.2691882), // Las Vegas

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
          {
              "featureType": "administrative.locality",
              "elementType": "all",
              "stylers": [
                  {
                      "hue": "#2c2e33"
                  },
                  {
                      "saturation": 7
                  },
                  {
                      "lightness": 19
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [
                  {
                      "hue": "#ffffff"
                  },
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": 100
                  },
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [
                  {
                      "hue": "#ffffff"
                  },
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": 100
                  },
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                  {
                      "hue": "#bbc0c4"
                  },
                  {
                      "saturation": -93
                  },
                  {
                      "lightness": 31
                  },
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels",
              "stylers": [
                  {
                      "hue": "#bbc0c4"
                  },
                  {
                      "saturation": -93
                  },
                  {
                      "lightness": 31
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "labels",
              "stylers": [
                  {
                      "hue": "#bbc0c4"
                  },
                  {
                      "saturation": -93
                  },
                  {
                      "lightness": -2
                  },
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers": [
                  {
                      "hue": "#e9ebed"
                  },
                  {
                      "saturation": -90
                  },
                  {
                      "lightness": -8
                  },
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "all",
              "stylers": [
                  {
                      "hue": "#e9ebed"
                  },
                  {
                      "saturation": 10
                  },
                  {
                      "lightness": 69
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "all",
              "stylers": [
                  {
                      "hue": "#e9ebed"
                  },
                  {
                      "saturation": -78
                  },
                  {
                      "lightness": 67
                  },
                  {
                      "visibility": "simplified"
                  }
              ]
          }
      ]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Add a marker for the coffee shop
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(36.2731502, -115.2691882),
        icon: {                             
          url: "http://labs.google.com/ridefinder/images/mm_20_black.png"
        },
        map: map,
        title: 'Aware Coffee & Tea Lounge'
    });
}


document.querySelector(".menu-button").addEventListener("click", function() {
  document.querySelector(".menu-links").classList.toggle("toggle-menu");
});


document.querySelector(".close-button").addEventListener("click", function() {
  document.querySelector(".menu-links").classList.toggle("toggle-menu");
});


document.querySelectorAll(".toggle-nav").forEach(function(item) {
  item.addEventListener("click", function() {
    console.log("clicked");
    document.querySelector(".menu-links").classList.remove("toggle-menu");
  })
})
