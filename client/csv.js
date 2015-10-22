Template.csv.helpers({
  start:function(){
    var data = Papa.unparse([
    	{
    		"Column 1": "foo",
    		"Column 2": "bar"
    	},
    	{
    		"Column 1": "abc",
    		"Column 2": "def"
    	}
    ]);
    console.log(data);
  }
});

Template.csv.events({
});
