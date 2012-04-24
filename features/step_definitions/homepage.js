var homepageSteps = function() {
	this.World = require("../support/world.js").World;

	this.Given(/^I am on the homepage$/, function(callback) {
		this.browser.visit("http://www.7digital.com", callback);
	});

	this.Given(/^I search for kylie$/, function(callback) {
		this.browser.
		fill(".search-form input", "kylie").
		pressButton(".search-form button", callback);
	});

	this.Then(/^I should see the artist kylie in the search results$/, function(callback) {
		this.browser.html(".artist-list .artist :first").should.include("Kylie");

		callback();
	});

};

module.exports = homepageSteps;

