Feature: Navigation menu

  Background:
    Given I am logged in CloudPCR page

  @e2e-test @Scenario1
  Scenario: Should test QA menu items
    Given CloudPCR page is opened
    And Assert that "QA" and "Administration" submenus are shown
    And I click on "QA" menu item
    And Assert that all the tabs of "QA" submenu are shown

  @e2e-test @Scenario2
  Scenario: Should test Administration menu items
    Given CloudPCR page is opened
    And Assert that "QA" and "Administration" submenus are shown
    And I click on "Administration" menu item
    And Assert that all the tabs of "Administration" submenu are shown
