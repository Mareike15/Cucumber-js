Feature: Delete Skills
  As an IBM Employee
  I want to delete my DevOps Skills
  So that my skills are deleted from database

  Scenario: Deleting of skills
    Given As a IBM Employee visit “DevOps Backbone Initiative”-Website
    Given I insert my UserID
    Given I insert my password
    Given I click on "Sign In"-Button
    When I click the "Delete"-Button
    When I click the button "OK"
    Then I should see "bye"-Message
