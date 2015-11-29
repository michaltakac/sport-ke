Meteor.publishComposite("activity", function() {
  return {
    find: function() {
      return Activity.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});
