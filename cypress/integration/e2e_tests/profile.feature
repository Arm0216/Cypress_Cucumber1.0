Feature: profile
  Background:
    Given I login with correct username "arman.poghosyan.2002@mail.ru" & password "arman200216"
    And I navigate to profile page

  Scenario: Add background photo
    Given I click "upload image" button from background picture
    When I upload picture
    Then I click "Apply" button from background photo window

  Scenario: Add background photo
    Given I click "upload image" button from background picture
    And I change "zoom" range
    When I change "straighten" rang
    Then I click "Apply" button from background photo window

