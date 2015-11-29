FlowRouter.route('/', {
	name: 'home',
  action: function(params) {
    BlazeLayout.render("appLayout", {area: "home"});
  }
});

FlowRouter.route('/profil/:_id', {
  name: 'profil',
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function(params) {
    BlazeLayout.render("appLayout", {area: "profilePage"});
  }
});
