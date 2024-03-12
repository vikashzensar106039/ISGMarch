Feature: CloseTransaction

  Background: 
    Given User navigates to ISG Landing Page and Login

  Scenario Outline: Verify user able Check close Transaction #<DataSetName>
    When user logs in to ISG
    Then Verify for Close Transaction
    Then User clicks on View all Close Transaction
    Then User Clicks on First close Transaction
    Then Able to verify close transaction message
    Then Able to verify Project overview in read only mode
    Then User able on go to Project contact Details
    Then Able to verify Add contact & view button

    Examples: 
      | DataSetName |
      | CloseTransaction  |