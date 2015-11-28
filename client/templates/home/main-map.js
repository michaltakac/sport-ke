var styles = [
  {
    stylers: [
      { invert_lightness: true },
      { hue: "0x006eff" },
      { saturation: 19 },
      { lightness: 4 },
      { gama: 1.11 }
    ]
  },
  /*{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 100 },
      { visibility: "simplified" }
    ]
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }*/
];

Template.mainMap.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('kosiceMap', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
});

Template.mainMap.helpers({
  mapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      console.log("is loaded!")
      return {
        center: new google.maps.LatLng(48.7190494,21.2569908),
        zoom: 13,
        styles: styles
      };
    } else {
      console.log("problem");
    }
  }
});
