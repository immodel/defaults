module.exports = function() {
  this.on('init', function(evt) {
    var doc = evt.doc;
    if(doc.value === undefined) {
      doc.value = doc.model.defaultValue;
    }
  });

  this.default = function(value) {
    return this.use(function() {
      this.defaultValue = value;
    });
  };
};