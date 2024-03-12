$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/com/zensar/features/SetupProject.feature");
formatter.feature({
  "name": "SetupProject",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify user is able to check number of notifications on Home page#\u003cDataSetName\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in to ISG",
  "keyword": "When "
});
formatter.step({
  "name": "Verify and check for number of Notifications",
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
  "name": "Verify user is able to check number of notifications on Home page#ValidLogin",
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
  "name": "Verify and check for number of Notifications",
  "keyword": "Then "
});
formatter.match({
  "location": "SetupProjectStepDefinitions.Verify_and_check_for_number_of_Notifications()"
});
formatter.embedding("image/png", "embedded2.png");
formatter.write("[INFO]\t[Assertion Faliure]\u003c/b\u003e\tSole Source Project is not selected");
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat com.zensar.scriptutils.GlobalFunction.zAssertTrue(GlobalFunction.java:1148)\r\n\tat com.zensar.pageobjects.IsgLandingPage.noOfNotifications(IsgLandingPage.java:615)\r\n\tat com.zensar.stepDefinations.SetupProjectStepDefinitions.Verify_and_check_for_number_of_Notifications(SetupProjectStepDefinitions.java:118)\r\n\tat ✽.Verify and check for number of Notifications(src/main/java/com/zensar/features/SetupProject.feature:117)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});