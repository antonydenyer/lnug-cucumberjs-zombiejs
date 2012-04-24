var Browser = require('zombie');

var World = function(callback) {
    this.browser = new Browser({
		runScripts: true,
		debug: false
	});
    
    callback();
};

exports.World = World;

