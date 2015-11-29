Meteor.methods({
  addActivity: function(data, lat, lon) {
    Activity.insert({
      userId        : Meteor.userId(),
      sport         : data.sport,
      pocetOsob     : parseInt(data.pocetOsob),
      eventDate     : data.eventDate,
      eventTime     : data.eventTime,
      nazovUdalosti : data.nazovUdalosti,
      miestoKonania : data.miestoKonania,
      lat           : lat,
      lon           : lon,
      popisUdalosti : data.popisUdalosti,
    });
  }
})
