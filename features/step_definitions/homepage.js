var Browser = require("zombie");

var hompageSteps = function() {
	browser = new Browser();

	this.Given(/^I am on the lnug homepage$/, function(callback) {
		browser.visit("http://lnug.org", callback);
	});

	this.Given(/^I register for the next lnug event$/, function(callback) {
		// express the regexp above with the code you wish you had
		callback();
	});

	this.Then(/^I should be taken to eventbrite$/, function(callback) {
		// express the regexp above with the code you wish you had
		callback();
	});

}
module.exports = hompageSteps;

