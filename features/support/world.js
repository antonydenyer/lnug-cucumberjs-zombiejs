var Browser = require('zombie');
var should = require('should');

var World = function(callback) {
    this.browser = new Browser({
		runScripts: true,
		debug: false
	});
    
    callback();
};

exports.World = World;

