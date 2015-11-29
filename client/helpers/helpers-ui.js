/*
* UI Helpers
* Define UI helpers for common template functionality.
*/

/*
* Current Route
* Return an active class if the currentRoute session variable name
* (set in the appropriate file in /client/routes/) is equal to the name passed
* to the helper in the template.
*/
UI.registerHelper('currentRoute', function(route){
  return Session.equals('currentRoute', route) ? 'active' : '';
});

/*
* User Logged-in
* Checks if user is logged in.
*/
UI.registerHelper('userLoggedIn', function(){
  if (Meteor.user()) {
    return Meteor.user();
  } else {
    return Meteor.user();
  }
});

/*
* User verified
* Checks if user's email is verified.
*/
UI.registerHelper('isVerified', function(){
  return Meteor.user().emails[0].verified;
});

/*
* Epoch to String
* Convert a UNIX epoch string to human readable time.
*/
UI.registerHelper('epochToString', function(timestamp){
  if (timestamp){
    var length = timestamp.toString().length;
    if ( length == 10 ) {
      return moment.unix(timestamp).format("MMMM Do, YYYY");
    } else {
      return moment.unix(timestamp / 1000).format("MMMM Do, YYYY");
    }
  }
});

/*
* Subscription next payment date format change.
* Convert a Braintree's nextBillingDate to nicer format.
*/
UI.registerHelper('niceBtDate', function(timestamp){
  // Example: from "2015-06-05" to "5th June, 2015".
  return moment(timestamp).format("Do MMMM, YYYY");
});

/*
* Drop times.
*/
UI.registerHelper('fullTime', function(timestamp){
  // Example: "26.6.2015, 20:53:33".
  return moment(timestamp).format("Do MMM YYYY, HH:mm:ss");
});

/*
* Classic time we use in Slovakia.
*/
UI.registerHelper('classicTime', function(timestamp){
  // Example: "26.6.2015, 20:53:33".
  return moment(timestamp).format("DD.MM.YYYY");
});

/*
* Drop times.
*/
UI.registerHelper('clockTime', function(timestamp){
  // Example: "20:53:33".
  return moment(timestamp).format("HH:mm:ss");
});

/*
* Miliseconds to seconds.
*/
UI.registerHelper('miliToSeconds', function(timestamp){
  // Example: from "2015-06-05" to "June 5th, 2015".
  return timestamp / 1000;
});

/*
* Bump index by 1.
*/
UI.registerHelper('bumpIndex', function(index){
  // Example: from "2015-06-05" to "June 5th, 2015".
  return index + 1;
});

/*
* Limit String
* Return the proper string based on the number of lists.
*/
UI.registerHelper('limitString', function(limit){
  return limit > 1 ? limit + " lists" : limit + " list";
});

/*
* Countries.
*/
UI.registerHelper('countries', function(){
  return countries;
});

/*
* Plan
* Get the current subscription data for our user. We set this up as a UI helper
* because we'll need to reference this information more than once.
*/
UI.registerHelper('plan', function(){
  // Get the current user.
  var user = Meteor.userId(),
      plan = Session.get('currentUserPlan_' + user);
  // If we have a user, call to checkUserPlan on the server to determine
  // their current plan. We do this so that we don't have to publish the user's
  // subscription data to the client.
  if ( user ) {
    Meteor.call('checkUserPlan', user, function(error, response){
      if (error) {
        alert(error.reason);
      } else {
        // Get the response from the server and set it equal to the user's
        // unique session variable (this will be either true or false).
        Session.set('currentUserPlan_' + user, response);
      }
    });
  }
  // Return the result of the method being called.
  return plan;
});

/*
* Already Tracked
* Checks if your account is being already tracked by XP Tracker.
*/
UI.registerHelper('alreadyTracked', function(game){
  var user = Meteor.user();
  var data = XpTracker.findOne({"userId": user._id, "game": game});
  if (data) {
    return true;
  } else {
    return false;
  }
});

/*
* Get Current RS3 Stats
* Get CurrentStats object.
*/
UI.registerHelper('getCurrentRs3Stats', function(){
  var user = Meteor.userId();
  return CurrentStats.findOne({"userId": user, "game": "rs3"});
});

/*
* Get Current OSRS Stats
* Get CurrentStats object.
*/
UI.registerHelper('getCurrentOsrsStats', function(){
  var user = Meteor.userId();
  return CurrentStats.findOne({"userId": user, "game": "osrs"});
});

/*
* Time until button resets
*/
UI.registerHelper('resetCountdown', function(){
  return Session.get('timeTillReset');
});

/*
* Get Skills Format
* Use Numeral.js to . We set this up as a UI helper
* because we'll need to reference this information more than once.
*/
UI.registerHelper('momentized', function(data){
  return numeral(data).format('0,0');
});

/*
* If Equals
* Take the two passed values and compare them, returning true if they're equal
* and false if they're not.
*/
UI.registerHelper('equals', function(c1,c2){
  // If case1 is equal to case2, return true, else false.
  return c1 == c2 ? true : false;
});

/*
* Cents to Dollars
* Take the passed value in cents and convert it to USD.
*/
UI.registerHelper('centsToDollars', function(cents){
  return "$" + cents / 100;
});

/*
* Dollar sign glue
* Take the passed value and convert it to USD.
*/
UI.registerHelper('addDollarSign', function(amount){
  return "$" + amount;
});

/*
* Percentage
* Take the two passed values, divide them, and multiply by 100 to return percentage.
*/
UI.registerHelper('percentage', function(v1,v2){
  return ( parseInt(v1) / parseInt(v2) ) * 100 + "%";
});

/*
* Capitalize
* Take the passed string and capitalize it. Helpful for when we're pulling
* data out of the database that's stored in lowercase.
*/
UI.registerHelper('capitalize', function(string){
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
});

/*
* Uppercase
* Take the passed string and uppercase it. Helpful for when we're pulling
* data out of the database that's stored in lowercase.
*/
UI.registerHelper('uppercase', function(string){
  if (string) {
    return string.toUpperCase();
  }
});

/*
* lowercase
* Take the passed string and lowercase it. Helpful for when we're pulling
* data out of the database that's stored in lowercase.
*/
UI.registerHelper('lowercase', function(string){
  if (string) {
    return string.toLowerCase();
  }
});
