
Router.route('/', function () {
  this.render('index');
});

Router.route('/csv', function () {
  this.render('csv');
});

Router.route('/csvFile', {
  where: 'server',
  action: function () {
    var filename = 'dummy.csv';
    var fileData = "";

    var headers = {
      'Content-type': 'text/csv',
      'Content-Disposition': "attachment; filename=" + filename
    };
    // var records = DummyData.find();

    var fileData = Papa.unparse([
    	{
    		"Column 1": "foo",
    		"Column 2": "bar"
    	},
    	{
    		"Column 1": "abc",
    		"Column 2": "def"
    	}
    ]);
    // build a CSV string. Oversimplified. You'd have to escape quotes and commas.
    // records.forEach(function(rec) {
    //   fileData += rec.Name + "," + rec.Address + "," + rec.Description + "\r\n";
    // });
    this.response.writeHead(200, headers);
    return this.response.end(fileData);
  }
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
