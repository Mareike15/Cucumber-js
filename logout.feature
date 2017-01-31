Feature: Log Out
  As an IBM Employee
  I want to log out
  So that I can leave the Website of “DevOps Backbone Initiative”

  Scenario: Log Out
    Given I am logged into the DevOps Backbone Initiative-Website
    When I click on “Logout”-Button
    Then I should see the Confirmation
