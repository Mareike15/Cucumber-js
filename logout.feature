Feature: Log Out
  As a IBM Employee
  I want to log out
  So that I can leave the Website of “DevOps Backbone Initiative”

  Scenario: Log Out
    Given I am as a IBM Employee login on “DevOps Backbone Initiative”-Website
    Given I insert my UserID
    Given I insert my password
    Given I click on "Sign In"-Button
    Given I wait for "Your DevOps Experience"
    When I click on “Logout”-Button
    Then I should see the Confirmation "You are now logged out"
