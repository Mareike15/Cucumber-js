Feature: Login on „DevOps Backbone Initiative“-Website
  As an IBM Employee
  I want to log in on “DevOps Backbone Initiative”-Website
  So that I can edit my DevOps skills

    Background:
      Given As a IBM Employee I am on the Website "DevOps Backbone Initiative"
      When I fill in my User ID

    Scenario: Successful Login on “DevOps Backbone Initiative”-Website
      When I fill in my password
      When I click on “Sign In”
      Then I should see my Profile on "DevOps Backbone Initiative"

    Scenario: Fail Login on “DevOps Backbone Initiative”-Website
      When I fill in a wrong password
      When I click on “Sign In”
      Then I should see an Error Message
