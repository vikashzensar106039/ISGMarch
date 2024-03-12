Feature: ActiveTransactionProviderList

  Background: 
    Given User navigates to ISG Landing Page and Login

  Scenario Outline: Verify user able view In Process provider and Removed providers #<DataSetName>
    When user logs in to ISG
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    Then User will able to click view provider list
    And Able to see In Process provider & Removed Provider

    Examples: 
      | DataSetName |
      | ProviderList  |

  Scenario Outline: Verify user able to add In Process provider#<DataSetName>
    When user logs in to ISG
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    Then User will able to click view provider list
    And Able to see In Process provider & add provider

    Examples: 
      | DataSetName |
      | ProviderList  |

  Scenario Outline: Verify user able to Delete In Process provider#<DataSetName>
    When user logs in to ISG
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    Then User will able to click view provider list
    And Able to see In Process provider & delete provider

    Examples: 
      | DataSetName |
      | ProviderList  |

  Scenario Outline: Verify user able to reinstate provider from Removed providers#<DataSetName>
    When user logs in to ISG
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    Then User will able to click view provider list
    And Able to see In Removed provider & reinstate provider

    Examples: 
      | DataSetName |
      | ProviderList  |

  Scenario Outline: Verify user able Export provider list#<DataSetName>
    When user logs in to ISG
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    Then User will able to click view provider list
    And Able to click on export provider list

    Examples: 
      | DataSetName |
      | ProviderList  |

  Scenario Outline: Verify user able Edit filter #<DataSetName>
    When user logs in to ISG
    Then Verify for Active Transaction
    Then User clicks on first Active Transaction
    Then User will able to click view provider list
    And Able to click on Edit & change values for In scope geographies ,In Scope industry & TCV

    Examples: 
      | DataSetName |
      | ProviderList  |
