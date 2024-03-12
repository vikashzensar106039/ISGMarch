$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/com/zensar/features/SetupProject.feature");
formatter.feature({
  "name": "SetupProject",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify user able to Setup new Project with sole source #\u003cDataSetName\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.step({
  "name": "Verify for Notifications",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on set up Project icon",
  "keyword": "Then "
});
formatter.step({
  "name": "User verifies project details \u0026 click on next",
  "keyword": "Then "
});
formatter.step({
  "name": "Navigate to Project Overview section \u0026 add project overview",
  "keyword": "And "
});
formatter.step({
  "name": "Select Anticipated award Date",
  "keyword": "Then "
});
formatter.step({
  "name": "Select sole source Project \u0026 reason",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Primary objevtives of sourcing",
  "keyword": "Then "
});
formatter.step({
  "name": "Clicks on Next \u0026 Add Client Lead",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter Client First Name \u0026 Last Name",
  "keyword": "Then "
});
formatter.step({
  "name": "Add Client Lead Email Address \u0026 click on next",
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
        "ValidLogin"
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
  "name": "Verify user able to Setup new Project with sole source #ValidLogin",
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
  "name": "Verify for Notifications",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.verify_for_Notifications()"
});
formatter.embedding("image/png", "embedded2.png");
formatter.write("[INFO]\t[Assertion Pass]\tNumber of Set up Project notification \u003d  3");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on set up Project icon",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_clicks_on_set_up_Project_icon()"
});
formatter.embedding("image/png", "embedded3.png");
formatter.embedding("image/png", "embedded4.png");
formatter.write("[INFO]\t[Assertion Pass]\tredirected to Project setup page");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies project details \u0026 click on next",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_verifies_project_details_click_next()"
});
formatter.write("[INFO]\t[Assertion Pass]\tProject Number for the Project \u003d  8018122");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  ACME Ventures");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  ACME NGS Train 98");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  Kathy Rudy");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  Sourcing 3 Next Gen");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  01 Mar 2024");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  11 Jun 2024");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  USA");
formatter.embedding("image/png", "embedded5.png");
formatter.write("[INFO]\t[Assertion Pass]\tClient Name for the Project \u003d  Consumer Services");
formatter.embedding("image/png", "embedded6.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Project Overview section \u0026 add project overview",
  "keyword": "And "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.navigate_Project_Overview_section_add_project_overview()"
});
formatter.embedding("image/png", "embedded7.png");
formatter.write("[INFO]\t[Assertion Pass]\tredirected to project overview page");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Anticipated award Date",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.select_Anticipated_award_Date()"
});
formatter.write("[INFO]\t[Assertion Pass]\tAnticipated date is selected");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select sole source Project \u0026 reason",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.Select_sole_source_Project_and_reason()"
});
formatter.embedding("image/png", "embedded8.png");
formatter.write("[INFO]\t[Assertion Pass]\tSole Source Project is selected");
formatter.write("[Error]\tElement Not found exception when selecting option by value");
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//select[@class\u003d\u0027dropdown-content ng-pristine ng-valid ng-star-inserted ng-touched\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EUROW42SLPC5721\u0027, ip: \u0027192.168.29.116\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: EventFiringWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat sun.reflect.GeneratedMethodAccessor6.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.lambda$new$1(EventFiringWebDriver.java:105)\r\n\tat com.sun.proxy.$Proxy25.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:194)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy28.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat com.zensar.scriptutils.GlobalFunction.selectBoxByIndex(GlobalFunction.java:960)\r\n\tat com.zensar.pageobjects.IsgLandingPage.soleSource(IsgLandingPage.java:586)\r\n\tat com.zensar.stepDefinations.SetupProjectStepDefinitions.Select_sole_source_Project_and_reason(SetupProjectStepDefinitions.java:113)\r\n\tat ✽.Select sole source Project \u0026 reason(src/main/java/com/zensar/features/SetupProject.feature:103)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Select Primary objevtives of sourcing",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.select_Primary_objevtives_of_sourcing()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Clicks on Next \u0026 Add Client Lead",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.clicks_on_Next_Add_Client_Lead()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter Client First Name \u0026 Last Name",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.enter_Client_First_Name_Last_Name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Add Client Lead Email Address \u0026 click on next",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.add_Client_Lead_Email_Address_click_on_next()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});