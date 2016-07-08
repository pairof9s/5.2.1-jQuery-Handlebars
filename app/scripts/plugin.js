var $ = require('jquery');

$.fn.plugin = function(template){
  var context = {};
  this.html('#target-id', context);
  return this;
};

$('#target-container').plugin();
