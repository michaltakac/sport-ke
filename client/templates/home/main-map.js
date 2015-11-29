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
    var marker1 = new google.maps.Marker({
      position: new google.maps.LatLng(48.6190494,21.2869908),
      map: map.instance,
      icon: "/img/markers/basketball.png"
    });
    var marker2 = new google.maps.Marker({
      position: new google.maps.LatLng(48.6490494,21.3869908),
      map: map.instance,
      icon: "/img/markers/soccer.png"
    });
    var marker3 = new google.maps.Marker({
      position: new google.maps.LatLng(48.4190494,22.2869908),
      map: map.instance,
      icon: "/img/markers/volleyball.png"
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
