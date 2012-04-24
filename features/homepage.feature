Feature: Homepage
    In order to learn more about node
    As a node user 
    I want to see info about lnug events

    Scenario: Visit the home page
        Given I am on the homepage
        And I search for kylie 
        Then I should see the lnug site in the search results
