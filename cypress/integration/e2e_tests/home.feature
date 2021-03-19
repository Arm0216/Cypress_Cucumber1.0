Feature: homePage
  Background:
    Given I login with correct username "arman.poghosyan.2002@mail.ru" & password "arman200216"

  Scenario: Open profile page from home page
    Given I click profile username
    Then I check profile page
