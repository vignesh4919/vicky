package com.step;

import cucumber.api.java.After;

public class Hooks  {
@After
public void quitBrowser() {
	Login.driver.quit();
}
}
