Router.route('/', function () {
  this.render('index');
});

Router.route('/callsifu/sifuRespond/', { where: "server" } )
  .get( function() {
    // If a GET request is made, return the user's profile.
  })
  .post( function() {
    // If a POST request is made, create the user's profile.
    // var name    = this.params.name,
    var data = this.request.body;
    console.log(data);

    Push.send({
        from: 'server',
        title: 'Hello',
        text: 'world',
        badge: 1, //optional, use it to set badge count of the receiver when the app is in background.
        query: {
            // Ex. send to a specific user if using accounts:
            userId: 'mogqEooRmq3kcPxts'
        } // Query the appCollection
        // token: appId or token eg. "{ apn: token }"
        // tokens: array of appId's or tokens
        // payload: user data
        // delayUntil: Date
    });

    this.response.end();
  })
  .put( function() {
    // If a PUT request is made, either update the user's profile or
   // create it if it doesn't already exist.
  })
  .delete( function() {
   // If a DELETE request is made, delete the user's profile.
  });
