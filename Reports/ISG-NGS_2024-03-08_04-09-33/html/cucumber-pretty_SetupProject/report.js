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
formatter.write("[INFO]\t[Assertion Pass]\tInvalid Email Field Error Validation\nActual:Not a valid email address.\nExpectedNot a valid email address.");
formatter.write("[INFO]\t[Assertion Pass]\tCase 2 - Email field is Blank");
formatter.embedding("image/png", "embedded13.png");
formatter.write("[INFO]\t[Assertion Pass]\tBlank Email Field Error Validation\nActual:Email is required.\nExpectedEmail is required.");
formatter.write("[INFO]\t[Assertion Pass]\tCase 3 - Email field cross character limit");
formatter.embedding("image/png", "embedded14.png");
formatter.write("[INFO]\t[Assertion Pass]\tmaximum character limit Error Validation\nActual:Maximum 255 characters are allowed.\nExpectedMaximum 255 characters are allowed.");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});