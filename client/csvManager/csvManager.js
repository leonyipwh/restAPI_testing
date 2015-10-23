// Required package:
// meteor add harrison:papa-parse
// meteor add cfs:standard-packages
// meteor add cfs:filesystem

// Required files:
// 1. csvManager.js
// 2. collections/upload.js

// Export Data -> csvManager.exportData(data, 'filename');
// Import Data -> csvManager.importData(event, template, 'selecor');
// Upload CSV -> csvManager.uploadCsv(event);

// Example:
// 'change .fileUpload':function(event, template){
// csvManager.uploadCsv(event, template);
// csvManager.importData(event, template, '#uploader');
//  }

var _validFileExtensions = 'text/csv';

csvManager = {
  exportCSV:function(data, filename){
    var self = this;
    var csv = Papa.unparse(data);
    self._downloadCSV(csv, filename);
  },
  importCSV:function(event, template, selector){
    var self = this;
    var fileType = template.find(selector).files[0].type;
    if (fileType != _validFileExtensions) {
      console.log('invalid file type');
    }else{
      Papa.parse(template.find(selector).files[0], {
        header: true,
        complete: function(results, file) {
          console.log("Parsing complete:", results, file);
          // _.each(results.data, function(csvData) {
          //   console.log(csvData);
          //   });

          // upload CSV
          self.uploadCSV(event, template);

          },
          skipEmptyLines: true
        });
     }
  },
  uploadCSV: function(event){
    FS.Utility.eachFile(event , function(file){
      var fileObj = new FS.File(file);
      // Store into DB
      Uploads.insert(fileObj, function(err, data){
        if(err)
          console.log('upload error');
      });
    });
  },
  _downloadCSV: function(csv, filename) {
    var blob = new Blob([csv]);
    var a = window.document.createElement("a");
    a.href = window.URL.createObjectURL(blob, {type: "text/plain"});
    a.download = filename + ".csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  },
};
