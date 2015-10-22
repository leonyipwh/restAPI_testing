var userID;

if (Meteor.isClient) {

  Template.index.helpers({
    counter: function () {
      return Session.get('counter');
    },
    loggedIn: function() {
      if (Meteor.userId()) {
        userID = Meteor.userId();
        return userID;
      }
    }
  });

  Template.index.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    },
    'click #send': function() {
      var id = $('#id').val();
      var title = $('#title').val();
      var msg = $('#msg').val();

      console.log('send!');

      Push.send({
          from: 'server',
          title: title,
          text: msg,
          badge: 1, //optional, use it to set badge count of the receiver when the app is in background.
          query: {
              // Ex. send to a specific user if using accounts:
              userId: id
          } // Query the appCollection
          // token: appId or token eg. "{ apn: token }"
          // tokens: array of appId's or tokens
          // payload: user data
          // delayUntil: Date
      });
    }
  });
}
