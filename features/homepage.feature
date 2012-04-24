Feature: Homepage
    In order to find music I like
    As a music lover
    I want be able to find music

    Scenario: Search from the homepage
        Given I am on the homepage
        And I search for kylie 
        Then I should see the artist kylie in the search results
