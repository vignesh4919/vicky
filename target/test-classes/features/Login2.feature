Feature: the login functionality

Scenario: TC_001 To check the login with valid username and valid passowrd

Given User in to the FB login page
When User enters the valid "vigneshravi" and valid "vicky4919"
And User clicks the login button
Then validate the profile name

Scenario Outline: TC_002 To check the login with invalid username and invalid password

Given User in to the FB login page
When User enters the invalid "<username>" and invalid "<password>"
And User clicks the login button
Then validate the error message

Examples:
|username|password|
|vignesh4919|vicky4919|
|raneshveer|ramesh1995|
|praveen|praveen1995|
