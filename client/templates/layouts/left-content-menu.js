Template.leftContentMenu.onRendered(function() {

});

Template.leftContentMenu.helpers({
  title: function() {
    return "Events";
  },
  dynamicTemplate: function() {
    return LEFT_MENU_CONTENT.get();
  }
});

Template.leftContentMenu.events({
  'click [data-event="close-left-menu"]': function(e) {
    LEFT_MENU_CONTENT.set(false);
    $('#sidebar').removeClass('open-menu');
    $('#left-content-menu').removeClass('open-menu');
    $('#main-content').addClass('margin-left-50');
  }
});
