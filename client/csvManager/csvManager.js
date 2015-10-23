csvManager = {
  getData:function(data, filename){
    var self = this;
    var csv = Papa.unparse(data);
    self._downloadCSV(csv, filename);
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
