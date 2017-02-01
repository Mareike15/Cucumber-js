Feature: Delete Skills
As an IBM Employee
I want to delete my DevOps Skills
So that my skills are deleted from database

Scenario: Deleting of skills
Given I am logged into the DevOps Backbone Initiative-Website
When I click the "Delete"-Button
Then I should see the Confirmation
