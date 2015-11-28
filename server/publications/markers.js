Meteor.publishComposite("markers", function() {
  return {
    find: function() {
      return Markers.find({});
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
