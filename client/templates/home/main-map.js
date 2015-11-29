var styles = [
  {
    stylers: [
      { invert_lightness: true },
      { hue: "0x006eff" },
      { saturation: 19 },
      { lightness: 4 },
      { gama: 1.11 }
    ]
  }
];

Template.mainMap.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('kosiceMap', function(map) {
    // Add a marker to the map once it's ready
    var marker1 = [
    new google.maps.Marker({
      position: new google.maps.LatLng(48.7263837,21.247982),
      map: map.instance,
      icon: "/img/markers/basketball.png"
    }),
    new google.maps.Marker({
      position: new google.maps.LatLng(48.715327,21.2459155),
      map: map.instance,
      icon: "/img/markers/soccer.png"
    }),
    new google.maps.Marker({
      position: new google.maps.LatLng(48.6970366,21.2432349),
      map: map.instance,
      icon: "/img/markers/volleyball.png"
    })];
  });
});

Template.mainMap.helpers({
  mapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(48.7190494,21.2569908),
        zoom: 13,
        minZoom: 12,
        styles: styles
      };
    }
  }
});
