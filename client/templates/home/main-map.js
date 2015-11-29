mapStyles = [
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

Template.mainMap.onRendered(function() {
  var self = this;

  GoogleMaps.ready('kosiceMap', function(map) {
    var marker;

    // Create and move the marker when latLng changes.
    self.autorun(function() {
      var subscription = self.subscribe('activity');
      if (subscription.ready()) {
        console.log("> Received ");
        var events = Activity.find().fetch();
        var array = events.map(function(event, i) {
          return [
            new google.maps.Marker({
              position: new google.maps.LatLng(48.7190494,21.2569908),
              map: map.instance,
              icon: "/img/markers/soccer.png"
            })
          ]
        });
        marker = array;
        console.log(marker);
      } else {
        console.log("> Subscription is not ready yet. \n\n");
      }
    });
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
        styles: mapStyles
      };
    }
  }
});

getLocation = function(address) {
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({'address': address}, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var latitude = results[0].geometry.location.lat();
      var longitude = results[0].geometry.location.lng();
      Session.set('address.lat', latitude);
      Session.set('address.lon', longitude);
    }
  });
};
