Template.activityFeed.onRendered(function() {

});

Template.activityFeed.helpers({
  activity: function() {
    return Activity.find().fetch();
  }
});
