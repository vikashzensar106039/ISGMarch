$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/com/zensar/features/SetupProject.feature");
formatter.feature({
  "name": "SetupProject",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify user able to Setup new Project with email validation #\u003cDataSetName\u003e",
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
  "name": "Select Competitive Project",
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
  "name": "Add Client Lead Email Address \u0026 click on next after validation",
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
  "name": "Verify user able to Setup new Project with email validation #ValidLogin",
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
  "name": "Select Competitive Project",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.select_Competitive_Project()"
});
formatter.embedding("image/png", "embedded8.png");
formatter.write("[INFO]\t[Assertion Pass]\tCompetitive Project is selected");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Primary objevtives of sourcing",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.select_Primary_objevtives_of_sourcing()"
});
formatter.embedding("image/png", "embedded9.png");
formatter.write("[INFO]\t[Assertion Pass]\tPrimary Objective value is selected");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on Next \u0026 Add Client Lead",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.clicks_on_Next_Add_Client_Lead()"
});
formatter.embedding("image/png", "embedded10.png");
formatter.write("[INFO]\t[Assertion Pass]\tredirected to add client lead page");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Client First Name \u0026 Last Name",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.enter_Client_First_Name_Last_Name()"
});
formatter.write("[INFO]\t[Assertion Pass]\tUser entered first Name");
formatter.embedding("image/png", "embedded11.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser entered last Name");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Client Lead Email Address \u0026 click on next after validation",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.Add_Client_Lead_Email_Address_click_on_next_after_validation()"
});
formatter.write("[INFO]\t[Assertion Pass]\tCase 2 - Invalid Email address ");
formatter.embedding("image/png", "embedded12.png");
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027ng-star-inserted\u0027]\"}\n  (Session info: chrome\u003d122.0.6261.96)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EUROW42SLPC5721\u0027, ip: \u0027192.168.29.116\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.96, chrome: {chromedriverVersion: 122.0.6261.111 (9d4c1072da6..., userDataDir: C:\\Users\\vs106039\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:52152}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 774b611f95f5375bde6cc20b9e0eb2c1\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027ng-star-inserted\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor81.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat sun.reflect.GeneratedMethodAccessor6.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.lambda$new$1(EventFiringWebDriver.java:105)\r\n\tat com.sun.proxy.$Proxy25.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:194)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy28.isDisplayed(Unknown Source)\r\n\tat com.zensar.scriptutils.GlobalFunction.waitForElement(GlobalFunction.java:1677)\r\n\tat com.zensar.pageobjects.IsgLandingPage.emailValidation(IsgLandingPage.java:519)\r\n\tat com.zensar.stepDefinations.SetupProjectStepDefinitions.Add_Client_Lead_Email_Address_click_on_next_after_validation(SetupProjectStepDefinitions.java:108)\r\n\tat ✽.Add Client Lead Email Address \u0026 click on next after validation(src/main/java/com/zensar/features/SetupProject.feature:89)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});