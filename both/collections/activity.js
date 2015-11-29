Activity = new Mongo.Collection('activity');

Activity.helpers({

});

Activity.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
