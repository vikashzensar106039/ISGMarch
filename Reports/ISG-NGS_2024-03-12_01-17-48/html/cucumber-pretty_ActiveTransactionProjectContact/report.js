$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/com/zensar/features/ActiveTransactionProjectContact.feature");
formatter.feature({
  "name": "ActiveTransactionProjectContact",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify user able add Client to Project contact list #\u003cDataSetName\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.step({
  "name": "Verify for Active Transaction",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on first Active Transaction",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on go to Project contact list",
  "keyword": "And "
});
formatter.step({
  "name": "Add the new client contact",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Client First Name",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Client Last Name",
  "keyword": "And "
});
formatter.step({
  "name": "Select Pronouns",
  "keyword": "Then "
});
formatter.step({
  "name": "Select job Tittle",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Project Role",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Project Responsibilties",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Email Address for the Member",
  "keyword": "Then "
});
formatter.step({
  "name": "Add mobile and Click on save Contact",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "DataSetName"
      ]
    },
    {
      "cells": [
        "AddContact"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to ISG Landing Page and Login",
  "keyword": "Given "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_navigates_to_Isg_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify user able add Client to Project contact list #AddContact",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_clicks_on_submit_another_item()"
});
formatter.embedding("image/png", "embedded0.png");
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify for Active Transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.verify_for_Active_Notifications()"
});
formatter.embedding("image/png", "embedded2.png");
formatter.write("[INFO]\t[Assertion Pass]\tNumber of Active Transaction \u003d  Active transactions (2)");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on first Active Transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.User_clicks_first_Active_Transaction()"
});
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on go to Project contact list",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.navigate_Project_Overview_section_add_project_overview()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add the new client contact",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.clicks_on_Next_Add_Client_Lead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Client First Name",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.select_Anticipated_award_Date()"
});
formatter.result({
  "error_message": "java.lang.IllegalArgumentException: Keys to send should be a not null CharSequence\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:97)\r\n\tat sun.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.lambda$new$0(EventFiringWebDriver.java:404)\r\n\tat com.sun.proxy.$Proxy29.sendKeys(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.sendKeys(EventFiringWebDriver.java:429)\r\n\tat sun.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy28.sendKeys(Unknown Source)\r\n\tat com.zensar.scriptutils.GlobalFunction.clearAndEnterText(GlobalFunction.java:727)\r\n\tat com.zensar.pageobjects.ProjectContact.ClientFirstName(ProjectContact.java:145)\r\n\tat com.zensar.stepDefinations.ActiveTransactionProjectContactStepDefinitions.select_Anticipated_award_Date(ActiveTransactionProjectContactStepDefinitions.java:43)\r\n\tat ✽.Add Client First Name(src/main/java/com/zensar/features/ActiveTransactionProjectContact.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Add Client Last Name",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.select_Competitive_Project()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select Pronouns",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.select_Primary_objevtives_of_sourcing()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select job Tittle",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.enter_Client_First_Name_Last_Name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select Project Role",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.add_Client_Lead_Email_Address_click_on_next()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select Project Responsibilties",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.user_Select_Project_Responsibilties()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Add Email Address for the Member",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.user_Add_Email_Address_for_the_Member()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Add mobile and Click on save Contact",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.user_Add_mobile_and_Click_on_save_Contact()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user able add Client to Project contact list after adding only Required field #\u003cDataSetName\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.step({
  "name": "Verify for Active Transaction",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on first Active Transaction",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on go to Project contact list",
  "keyword": "And "
});
formatter.step({
  "name": "Add the new client contact",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Client First Name",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Client Last Name",
  "keyword": "And "
});
formatter.step({
  "name": "Select Project Role",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Email Address for the Member and Click on save Contact",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "DataSetName"
      ]
    },
    {
      "cells": [
        "AddContact"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to ISG Landing Page and Login",
  "keyword": "Given "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_navigates_to_Isg_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify user able add Client to Project contact list after adding only Required field #AddContact",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_clicks_on_submit_another_item()"
});
formatter.embedding("image/png", "embedded4.png");
formatter.embedding("image/png", "embedded5.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify for Active Transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.verify_for_Active_Notifications()"
});
formatter.embedding("image/png", "embedded6.png");
formatter.write("[INFO]\t[Assertion Pass]\tNumber of Active Transaction \u003d  Active transactions (2)");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on first Active Transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.User_clicks_first_Active_Transaction()"
});
formatter.embedding("image/png", "embedded7.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on go to Project contact list",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.navigate_Project_Overview_section_add_project_overview()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add the new client contact",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.clicks_on_Next_Add_Client_Lead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Client First Name",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.select_Anticipated_award_Date()"
});
formatter.result({
  "error_message": "java.lang.IllegalArgumentException: Keys to send should be a not null CharSequence\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:97)\r\n\tat sun.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.lambda$new$0(EventFiringWebDriver.java:404)\r\n\tat com.sun.proxy.$Proxy29.sendKeys(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.sendKeys(EventFiringWebDriver.java:429)\r\n\tat sun.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy28.sendKeys(Unknown Source)\r\n\tat com.zensar.scriptutils.GlobalFunction.clearAndEnterText(GlobalFunction.java:727)\r\n\tat com.zensar.pageobjects.ProjectContact.ClientFirstName(ProjectContact.java:145)\r\n\tat com.zensar.stepDefinations.ActiveTransactionProjectContactStepDefinitions.select_Anticipated_award_Date(ActiveTransactionProjectContactStepDefinitions.java:43)\r\n\tat ✽.Add Client First Name(src/main/java/com/zensar/features/ActiveTransactionProjectContact.feature:31)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Add Client Last Name",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.select_Competitive_Project()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select Project Role",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.add_Client_Lead_Email_Address_click_on_next()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Add Email Address for the Member and Click on save Contact",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.add_Email_Address_for_the_Member_and_Click_on_save_Contact()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user able add Lead Attorney to Project contact list #\u003cDataSetName\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.step({
  "name": "Verify for Active Transaction",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on first Active Transaction",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on go to Project contact list",
  "keyword": "And "
});
formatter.step({
  "name": "Add the new Lead Attorney",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Lead Attorney First Name",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Lead Attorney Last Name",
  "keyword": "And "
});
formatter.step({
  "name": "Select Lead Attorney Pronouns",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Lead Attorney Legal firm",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Job tittle of lead Attorney",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Email Address for the Lead Attorney",
  "keyword": "Then "
});
formatter.step({
  "name": "Add mobile for Lead Attorney and Click on save Contact",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "DataSetName"
      ]
    },
    {
      "cells": [
        "AddContact"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to ISG Landing Page and Login",
  "keyword": "Given "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_navigates_to_Isg_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify user able add Lead Attorney to Project contact list #AddContact",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_clicks_on_submit_another_item()"
});
formatter.embedding("image/png", "embedded8.png");
formatter.embedding("image/png", "embedded9.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify for Active Transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.verify_for_Active_Notifications()"
});
formatter.embedding("image/png", "embedded10.png");
formatter.write("[INFO]\t[Assertion Pass]\tNumber of Active Transaction \u003d  Active transactions (2)");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on first Active Transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.User_clicks_first_Active_Transaction()"
});
formatter.embedding("image/png", "embedded11.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on go to Project contact list",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.navigate_Project_Overview_section_add_project_overview()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add the new Lead Attorney",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.add_the_new_Lead_Attorney()"
});
formatter.embedding("image/png", "embedded12.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Lead Attorney First Name",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.add_Lead_Attorney_First_Name()"
});
formatter.embedding("image/png", "embedded13.png");
formatter.result({
  "error_message": "java.lang.IllegalArgumentException: Keys to send should be a not null CharSequence\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:97)\r\n\tat sun.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.lambda$new$0(EventFiringWebDriver.java:404)\r\n\tat com.sun.proxy.$Proxy29.sendKeys(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.sendKeys(EventFiringWebDriver.java:429)\r\n\tat sun.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy28.sendKeys(Unknown Source)\r\n\tat com.zensar.scriptutils.GlobalFunction.clearAndEnterText(GlobalFunction.java:727)\r\n\tat com.zensar.pageobjects.ProjectContact.AddAttorneyFirstName(ProjectContact.java:232)\r\n\tat com.zensar.stepDefinations.ActiveTransactionProjectContactStepDefinitions.add_Lead_Attorney_First_Name(ActiveTransactionProjectContactStepDefinitions.java:90)\r\n\tat ✽.Add Lead Attorney First Name(src/main/java/com/zensar/features/ActiveTransactionProjectContact.feature:46)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Add Lead Attorney Last Name",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.Add_Lead_Attorney_Last_Name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select Lead Attorney Pronouns",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.select_Lead_Attorney_Pronouns()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select Lead Attorney Legal firm",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.select_Lead_Attorney_Legal_firm()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select Job tittle of lead Attorney",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.select_Job_tittle_of_lead_Attorney()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Add Email Address for the Lead Attorney",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.add_Email_Address_for_the_Lead_Attorney()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Add mobile for Lead Attorney and Click on save Contact",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.add_mobile_for_Lead_Attorney_and_Click_on_save_Contact()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user able add Lead Attorney to Project contact list After adding only required field #\u003cDataSetName\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.step({
  "name": "Verify for Active Transaction",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on first Active Transaction",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on go to Project contact list",
  "keyword": "And "
});
formatter.step({
  "name": "Add the new Lead Attorney",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Lead Attorney First Name",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Lead Attorney Last Name",
  "keyword": "And "
});
formatter.step({
  "name": "Select Lead Attorney Legal firm",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Email Address for the Lead Attorney and click on save contact",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "DataSetName"
      ]
    },
    {
      "cells": [
        "AddContact"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to ISG Landing Page and Login",
  "keyword": "Given "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_navigates_to_Isg_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify user able add Lead Attorney to Project contact list After adding only required field #AddContact",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_clicks_on_submit_another_item()"
});
formatter.embedding("image/png", "embedded14.png");
formatter.embedding("image/png", "embedded15.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify for Active Transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.verify_for_Active_Notifications()"
});
formatter.embedding("image/png", "embedded16.png");
formatter.write("[INFO]\t[Assertion Pass]\tNumber of Active Transaction \u003d  Active transactions (2)");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on first Active Transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.User_clicks_first_Active_Transaction()"
});
formatter.embedding("image/png", "embedded17.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on go to Project contact list",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.navigate_Project_Overview_section_add_project_overview()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add the new Lead Attorney",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.add_the_new_Lead_Attorney()"
});
formatter.embedding("image/png", "embedded18.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Lead Attorney First Name",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.add_Lead_Attorney_First_Name()"
});
formatter.embedding("image/png", "embedded19.png");
formatter.result({
  "error_message": "java.lang.IllegalArgumentException: Keys to send should be a not null CharSequence\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:97)\r\n\tat sun.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.lambda$new$0(EventFiringWebDriver.java:404)\r\n\tat com.sun.proxy.$Proxy29.sendKeys(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.sendKeys(EventFiringWebDriver.java:429)\r\n\tat sun.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy28.sendKeys(Unknown Source)\r\n\tat com.zensar.scriptutils.GlobalFunction.clearAndEnterText(GlobalFunction.java:727)\r\n\tat com.zensar.pageobjects.ProjectContact.AddAttorneyFirstName(ProjectContact.java:232)\r\n\tat com.zensar.stepDefinations.ActiveTransactionProjectContactStepDefinitions.add_Lead_Attorney_First_Name(ActiveTransactionProjectContactStepDefinitions.java:90)\r\n\tat ✽.Add Lead Attorney First Name(src/main/java/com/zensar/features/ActiveTransactionProjectContact.feature:64)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Add Lead Attorney Last Name",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.Add_Lead_Attorney_Last_Name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select Lead Attorney Legal firm",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.select_Lead_Attorney_Legal_firm()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Add Email Address for the Lead Attorney and click on save contact",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProjectContactStepDefinitions.Add_Email_Address_for_the_Lead_Attorney_and_click_on_save_contact()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});