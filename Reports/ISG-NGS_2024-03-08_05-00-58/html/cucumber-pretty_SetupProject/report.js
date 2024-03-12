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
formatter.write("[Error]\tElement Not found exception when entering text in the element");
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@type\u003d\u0027text\u0027 and @autocomplete\u003d\u0027username\u0027]\"}\n  (Session info: chrome\u003d122.0.6261.96)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EUROW42SLPC5721\u0027, ip: \u0027192.168.29.116\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.96, chrome: {chromedriverVersion: 122.0.6261.111 (9d4c1072da6..., userDataDir: C:\\Users\\vs106039\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:53206}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: f80df88fee1bfa33755c01c239e6ac6f\n*** Element info: {Using\u003dxpath, value\u003d//input[@type\u003d\u0027text\u0027 and @autocomplete\u003d\u0027username\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.lambda$new$1(EventFiringWebDriver.java:105)\r\n\tat com.sun.proxy.$Proxy25.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:194)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy28.sendKeys(Unknown Source)\r\n\tat com.zensar.scriptutils.GlobalFunction.enterText(GlobalFunction.java:524)\r\n\tat com.zensar.pageobjects.IsgLandingPage.loginToISG(IsgLandingPage.java:174)\r\n\tat com.zensar.pageobjects.IsgLandingPage.loginToISG(IsgLandingPage.java:166)\r\n\tat com.zensar.stepDefinations.SetupProjectStepDefinitions.user_clicks_on_submit_another_item(SetupProjectStepDefinitions.java:32)\r\n\tat ✽.user logs in to ISG(src/main/java/com/zensar/features/SetupProject.feature:97)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Verify for Notifications",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.verify_for_Notifications()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on set up Project icon",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_clicks_on_set_up_Project_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies project details \u0026 click on next",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.user_verifies_project_details_click_next()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Navigate to Project Overview section \u0026 add project overview",
  "keyword": "And "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.navigate_Project_Overview_section_add_project_overview()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select Anticipated award Date",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.select_Anticipated_award_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select sole source Project \u0026 reason",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.Select_sole_source_Project_and_reason()"
});
formatter.result({
  "status": "skipped"
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