Template._sidebar.onRendered(function() {

});

Template._sidebar.helpers({
  userId: function() {
    return Meteor.userId();
  }
});

Template._sidebar.events({
  'click #open-menu': function(e) {
    var templateName = $(e.currentTarget).attr('data-open');
    LEFT_MENU_CONTENT.set(templateName);

    var $sidebar = $('#sidebar');
    if ($sidebar.attr("class") === 'sidebar mini-menu') {
      $('#sidebar').addClass('open-menu');
      $('#main-content').removeClass('margin-left-50');
    }
  },
  'click #logout': function(e) {
    Meteor.logout(function(error){
      if(error){
        alert(error.reason);
      } else {
        FlowRouter.go('/')
      }
    });
  }
});
