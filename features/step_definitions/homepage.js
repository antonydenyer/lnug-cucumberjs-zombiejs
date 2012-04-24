var homepageSteps = function() {
	this.World = require("../support/world.js").World; // overwrite default World constructor
	
    this.Given(/^I am on the homepage$/, function(callback) {
		this.browser.visit("https://www.7digital.com", callback);
	});

	this.Given(/^I search for kylie$/, function(callback) {
		this.browser.
            fill(".search-form input","kylie").
            pressButton(".search-form button",callback);
	});

	this.Then(/^I should see the lnug site in the search results$/, function(callback) {
		// express the regexp above with the code you wish you had
		callback.pending();
	});

};

module.exports = homepageSteps;

