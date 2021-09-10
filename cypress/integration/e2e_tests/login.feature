Feature: Login

  Scenario: Login
    Given I open home page
    And I enter username "**@gmail.com"
    And I enter password "*****"
    When I click "Log in" button
    Then I see my profile Name "Arman Poghosyan"



