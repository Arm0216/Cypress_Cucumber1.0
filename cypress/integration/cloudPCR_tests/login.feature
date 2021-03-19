Feature: Login

  @e2e-test @Scenario1
  Scenario: Should test login functionality with empty browser caches
    Given I am in CloudPCR login page
    And I fill in login field
    And I fill in password field
    When I click on Login button
    Then Assert that CloudPCR page is opened

#  @e2e-test @Scenario2
#  Scenario: Should test login load time
#    And I login and check load time
