$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/com/zensar/features/ActiveTransactionProviderList.feature");
formatter.feature({
  "name": "ActiveTransactionProviderList",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify user able view In Process provider and Removed providers #\u003cDataSetName\u003e",
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
  "name": "User will able to click view provider list",
  "keyword": "Then "
});
formatter.step({
  "name": "Able to see In Process provider \u0026 Removed Provider",
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
        "ProviderList"
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
  "name": "Verify user able view In Process provider and Removed providers #ProviderList",
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
  "name": "User will able to click view provider list",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProviderListStepDefinitions.user_will_able_to_click_view_provider_list()"
});
formatter.embedding("image/png", "embedded4.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser will be redirected to provider list \u003d  Provider list");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Able to see In Process provider \u0026 Removed Provider",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProviderListStepDefinitions.able_to_see_In_Process_provider_Removed_Provider()"
});
formatter.embedding("image/png", "embedded5.png");
formatter.write("[INFO]\t[Assertion Pass]\tNumber of in Process provider \u003d  In-process providers (20)");
formatter.embedding("image/png", "embedded6.png");
formatter.write("[INFO]\t[Assertion Pass]\tNumber of removed providers are \u003d  Removed providers (4)");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user able to add In Process provider#\u003cDataSetName\u003e",
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
  "name": "User will able to click view provider list",
  "keyword": "Then "
});
formatter.step({
  "name": "Able to see In Process provider \u0026 add provider",
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
        "ProviderList"
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
  "name": "Verify user able to add In Process provider#ProviderList",
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
formatter.embedding("image/png", "embedded7.png");
formatter.embedding("image/png", "embedded8.png");
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
formatter.embedding("image/png", "embedded9.png");
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
formatter.embedding("image/png", "embedded10.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will able to click view provider list",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProviderListStepDefinitions.user_will_able_to_click_view_provider_list()"
});
formatter.embedding("image/png", "embedded11.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser will be redirected to provider list \u003d  Provider list");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Able to see In Process provider \u0026 add provider",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProviderListStepDefinitions.able_to_see_In_Process_provider_add_provider()"
});
formatter.write("[Error]\tElement Not found exception ");
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027k-input-inner\u0027]\"}\n  (Session info: chrome\u003d122.0.6261.112)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EUROW42SLPC5721\u0027, ip: \u0027192.168.29.116\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.112, chrome: {chromedriverVersion: 122.0.6261.111 (9d4c1072da6..., userDataDir: C:\\Users\\vs106039\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:53641}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 9af9113a6ba22c64575931710c0dfd08\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027k-input-inner\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor91.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat sun.reflect.GeneratedMethodAccessor8.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.lambda$new$1(EventFiringWebDriver.java:105)\r\n\tat com.sun.proxy.$Proxy25.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:194)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy28.clear(Unknown Source)\r\n\tat com.zensar.scriptutils.GlobalFunction.clearAndEnterText(GlobalFunction.java:726)\r\n\tat com.zensar.pageobjects.ProjectDetails.addProvider(ProjectDetails.java:202)\r\n\tat com.zensar.stepDefinations.ActiveTransactionProviderListStepDefinitions.able_to_see_In_Process_provider_add_provider(ActiveTransactionProviderListStepDefinitions.java:31)\r\n\tat ✽.Able to see In Process provider \u0026 add provider(src/main/java/com/zensar/features/ActiveTransactionProviderList.feature:22)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user able to Delete In Process provider#\u003cDataSetName\u003e",
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
  "name": "User will able to click view provider list",
  "keyword": "Then "
});
formatter.step({
  "name": "Able to see In Process provider \u0026 delete provider",
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
        "ProviderList"
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
  "name": "Verify user able to Delete In Process provider#ProviderList",
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
formatter.embedding("image/png", "embedded12.png");
formatter.embedding("image/png", "embedded13.png");
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
formatter.embedding("image/png", "embedded14.png");
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
formatter.embedding("image/png", "embedded15.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will able to click view provider list",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProviderListStepDefinitions.user_will_able_to_click_view_provider_list()"
});
formatter.embedding("image/png", "embedded16.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser will be redirected to provider list \u003d  Provider list");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Able to see In Process provider \u0026 delete provider",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProviderListStepDefinitions.able_to_see_In_Process_provider_delete_provider()"
});
formatter.result({
  "error_message": "org.openqa.selenium.support.ui.UnexpectedTagNameException: Element should have been \"select\" but was \"span\"\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EUROW42SLPC5721\u0027, ip: \u0027192.168.29.116\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:48)\r\n\tat com.zensar.scriptutils.GlobalFunction.selectBoxByVisibleTextContains(GlobalFunction.java:919)\r\n\tat com.zensar.pageobjects.ProjectDetails.deleteProvider(ProjectDetails.java:211)\r\n\tat com.zensar.stepDefinations.ActiveTransactionProviderListStepDefinitions.able_to_see_In_Process_provider_delete_provider(ActiveTransactionProviderListStepDefinitions.java:35)\r\n\tat ✽.Able to see In Process provider \u0026 delete provider(src/main/java/com/zensar/features/ActiveTransactionProviderList.feature:33)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user able to reinstate provider from Removed providers#\u003cDataSetName\u003e",
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
  "name": "User will able to click view provider list",
  "keyword": "Then "
});
formatter.step({
  "name": "Able to see In Removed provider \u0026 reinstate provider",
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
        "ProviderList"
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
  "name": "Verify user able to reinstate provider from Removed providers#ProviderList",
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
formatter.embedding("image/png", "embedded17.png");
formatter.embedding("image/png", "embedded18.png");
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
formatter.embedding("image/png", "embedded19.png");
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
formatter.embedding("image/png", "embedded20.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will able to click view provider list",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProviderListStepDefinitions.user_will_able_to_click_view_provider_list()"
});
formatter.embedding("image/png", "embedded21.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser will be redirected to provider list \u003d  Provider list");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Able to see In Removed provider \u0026 reinstate provider",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProviderListStepDefinitions.Able_to_see_In_Removed_provider_reinstate_provider()"
});
formatter.result({
  "error_message": "org.openqa.selenium.support.ui.UnexpectedTagNameException: Element should have been \"select\" but was \"span\"\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EUROW42SLPC5721\u0027, ip: \u0027192.168.29.116\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:48)\r\n\tat com.zensar.scriptutils.GlobalFunction.selectBoxByVisibleTextContains(GlobalFunction.java:919)\r\n\tat com.zensar.pageobjects.ProjectDetails.reinstateProvider(ProjectDetails.java:218)\r\n\tat com.zensar.stepDefinations.ActiveTransactionProviderListStepDefinitions.Able_to_see_In_Removed_provider_reinstate_provider(ActiveTransactionProviderListStepDefinitions.java:39)\r\n\tat ✽.Able to see In Removed provider \u0026 reinstate provider(src/main/java/com/zensar/features/ActiveTransactionProviderList.feature:44)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user able Export provider list#\u003cDataSetName\u003e",
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
  "name": "User will able to click view provider list",
  "keyword": "Then "
});
formatter.step({
  "name": "Able to click on export provider list",
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
        "ProviderList"
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
  "name": "Verify user able Export provider list#ProviderList",
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
formatter.embedding("image/png", "embedded22.png");
formatter.embedding("image/png", "embedded23.png");
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
formatter.embedding("image/png", "embedded24.png");
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
formatter.embedding("image/png", "embedded25.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will able to click view provider list",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProviderListStepDefinitions.user_will_able_to_click_view_provider_list()"
});
formatter.embedding("image/png", "embedded26.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser will be redirected to provider list \u003d  Provider list");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Able to click on export provider list",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProviderListStepDefinitions.able_to_click_on_export_provider_list()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user able Edit filter #\u003cDataSetName\u003e",
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
  "name": "User will able to click view provider list",
  "keyword": "Then "
});
formatter.step({
  "name": "Able to click on Edit \u0026 change values for In scope geographies ,In Scope industry \u0026 TCV",
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
        "ProviderList"
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
  "name": "Verify user able Edit filter #ProviderList",
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
formatter.embedding("image/png", "embedded27.png");
formatter.embedding("image/png", "embedded28.png");
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
formatter.embedding("image/png", "embedded29.png");
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
formatter.embedding("image/png", "embedded30.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will able to click view provider list",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveTransactionProviderListStepDefinitions.user_will_able_to_click_view_provider_list()"
});
formatter.embedding("image/png", "embedded31.png");
formatter.write("[INFO]\t[Assertion Pass]\tUser will be redirected to provider list \u003d  Provider list");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Able to click on Edit \u0026 change values for In scope geographies ,In Scope industry \u0026 TCV",
  "keyword": "And "
});
formatter.match({
  "location": "ActiveTransactionProviderListStepDefinitions.able_to_click_on_Edit_change_values()"
});
formatter.embedding("image/png", "embedded32.png");
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@class\u003d\u0027btn primary-btn-large save-provider-list\u0027]\"}\n  (Session info: chrome\u003d122.0.6261.112)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EUROW42SLPC5721\u0027, ip: \u0027192.168.29.116\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.112, chrome: {chromedriverVersion: 122.0.6261.111 (9d4c1072da6..., userDataDir: C:\\Users\\vs106039\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:55081}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 904804093e814039d69c5746e00f7b01\n*** Element info: {Using\u003dxpath, value\u003d//button[@class\u003d\u0027btn primary-btn-large save-provider-list\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor91.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat sun.reflect.GeneratedMethodAccessor8.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.lambda$new$1(EventFiringWebDriver.java:105)\r\n\tat com.sun.proxy.$Proxy25.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:194)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy28.isDisplayed(Unknown Source)\r\n\tat com.zensar.scriptutils.GlobalFunction.waitForElement(GlobalFunction.java:1677)\r\n\tat com.zensar.pageobjects.ProjectDetails.editProvider(ProjectDetails.java:229)\r\n\tat com.zensar.stepDefinations.ActiveTransactionProviderListStepDefinitions.able_to_click_on_Edit_change_values(ActiveTransactionProviderListStepDefinitions.java:47)\r\n\tat ✽.Able to click on Edit \u0026 change values for In scope geographies ,In Scope industry \u0026 TCV(src/main/java/com/zensar/features/ActiveTransactionProviderList.feature:66)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});