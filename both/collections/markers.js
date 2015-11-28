Markers = new Mongo.Collection('markers');

Markers.helpers({

});

Markers.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});