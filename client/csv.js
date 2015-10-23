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
    csvManager.exportCSV(data, 'filename');
  },
  'change .fileUpload':function(event, template){
    // csvManager.uploadCSV(event, template);
    csvManager.importCSV(event, template, '#uploader');
  }
});
