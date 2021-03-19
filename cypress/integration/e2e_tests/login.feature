Feature: Login

  Scenario: Login
    Given I open home page
    And I enter username "arman.poghosyan.2002@mail.ru"
    And I enter password "arman200216"
    When I click "Log in" button
    Then I see my profile Name "Arman Poghosyan"



