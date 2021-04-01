package com.step;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Login {
 static WebDriver driver;

@Given("User in to the FB login page")
public void user_in_to_the_FB_login_page() {
   System.setProperty("webdriver.chrome.driver", "C:\\Users\\vignesh\\Desktop\\Cucumber\\CucucmberBase\\driver\\chromedriver.exe");
   driver=new ChromeDriver();
   driver.get("https://www.facebook.com/");
}

@When("User enters the valid {string} and valid {string}")
public void user_enters_the_valid_and_valid(String string, String string2) {
   WebElement userName = driver.findElement(By.id("email"));
   userName.sendKeys(string);
   WebElement password = driver.findElement(By.id("pass"));
   password.sendKeys(string2);  
}

@When("User clicks the login button")
public void user_clicks_the_login_button() {
	WebElement button = driver.findElement(By.name("login"));
    button.click();
}

@Then("validate the profile name")
public void validate_the_profile_name() {
  Assert.assertTrue(false);
  
}

@When("User enters the invalid {string} and invalid {string}")
public void user_enters_the_invalid_and_invalid(String string, String string2) {
	 WebElement userName = driver.findElement(By.id("email"));
	   userName.sendKeys(string);
	   WebElement password = driver.findElement(By.id("pass"));
	   password.sendKeys(string2);   
}

@Then("validate the error message")
public void validate_the_error_message() {
	 Assert.assertTrue(true);
}

	
	
	
	
	
}
