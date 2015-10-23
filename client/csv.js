Template.csv.helpers({
});

Template.csv.events({
  'click #csvExport': function(){

    var data = [
     {
       "Column 1": "foo",
       "Column 2": "bar"
     },
     {
       "Column 1": "abc",
       "Column 2": "def"
     }
    ];
    //csvManager.getData(data, filename);
    csvManager.getData(data, 'filename');
  },
});
