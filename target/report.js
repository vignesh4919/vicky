$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Login.feature");
formatter.feature({
  "name": "verify the login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "TC_001 To check the login with valid username and valid passowrd",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User in to the FB login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_in_to_the_FB_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the valid \"vigneshravi\" and valid \"vicky4919\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enters_the_valid_and_valid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_clicks_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the profile name",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.validate_the_profile_name()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat com.step.Login.validate_the_profile_name(Login.java:39)\r\n\tat ✽.validate the profile name(src/test/resources/features/Login.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_002 To check the login with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User in to the FB login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters the invalid \"\u003cusername\u003e\" and invalid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks the login button",
  "keyword": "And "
});
formatter.step({
  "name": "validate the error message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "vignesh4919",
        "vicky4919"
      ]
    },
    {
      "cells": [
        "raneshveer",
        "ramesh1995"
      ]
    },
    {
      "cells": [
        "praveen",
        "praveen1995"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC_002 To check the login with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User in to the FB login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_in_to_the_FB_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the invalid \"vignesh4919\" and invalid \"vicky4919\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enters_the_invalid_and_invalid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_clicks_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.validate_the_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_002 To check the login with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User in to the FB login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_in_to_the_FB_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the invalid \"raneshveer\" and invalid \"ramesh1995\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enters_the_invalid_and_invalid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_clicks_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.validate_the_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_002 To check the login with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User in to the FB login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_in_to_the_FB_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the invalid \"praveen\" and invalid \"praveen1995\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enters_the_invalid_and_invalid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_clicks_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.validate_the_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/Login2.feature");
formatter.feature({
  "name": "the login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "TC_001 To check the login with valid username and valid passowrd",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User in to the FB login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_in_to_the_FB_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the valid \"vigneshravi\" and valid \"vicky4919\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enters_the_valid_and_valid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_clicks_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the profile name",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.validate_the_profile_name()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat com.step.Login.validate_the_profile_name(Login.java:39)\r\n\tat ✽.validate the profile name(src/test/resources/features/Login2.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_002 To check the login with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User in to the FB login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters the invalid \"\u003cusername\u003e\" and invalid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks the login button",
  "keyword": "And "
});
formatter.step({
  "name": "validate the error message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "vignesh4919",
        "vicky4919"
      ]
    },
    {
      "cells": [
        "raneshveer",
        "ramesh1995"
      ]
    },
    {
      "cells": [
        "praveen",
        "praveen1995"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC_002 To check the login with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User in to the FB login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_in_to_the_FB_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the invalid \"vignesh4919\" and invalid \"vicky4919\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enters_the_invalid_and_invalid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_clicks_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.validate_the_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_002 To check the login with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User in to the FB login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_in_to_the_FB_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the invalid \"raneshveer\" and invalid \"ramesh1995\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enters_the_invalid_and_invalid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_clicks_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.validate_the_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_002 To check the login with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User in to the FB login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_in_to_the_FB_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the invalid \"praveen\" and invalid \"praveen1995\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enters_the_invalid_and_invalid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_clicks_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.validate_the_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});