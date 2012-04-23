Feature: Homepage
    In order to learn more about node
    As a node user 
    I want to see info about lnug events

    Scenario: Visit the home page
        Given I am on the lnug homepage
        And I register for the next lnug event
        Then I should be taken to eventbrite
