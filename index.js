module.exports = function() {
  this.get(function(value, type) {
    return value === undefined
      ? type.defaultValue
      : value;
  });
  
  this.default = function(value) {
    return this.use(function() {
      this.defaultValue = value;
    });
  };
};