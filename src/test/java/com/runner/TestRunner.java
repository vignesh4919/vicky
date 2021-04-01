package com.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.step.JvmReport;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(monochrome=true,
                 dryRun=false,
                 features= {"src\\test\\resources"},
                 glue= {"com.step"},
                 plugin= {"pretty","html:C:\\Users\\vignesh\\Desktop\\Cucumber\\CucucmberBase\\target","junit:C:\\Users\\vignesh\\Desktop\\Cucumber\\CucucmberBase\\target\\cucumber.xml","json:C:\\Users\\vignesh\\Desktop\\Cucumber\\CucucmberBase\\target\\cucumber.json","com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"})
public class TestRunner {
@AfterClass
public static void jvmReport() {
	JvmReport.generateJvmReport("C:\\Users\\vignesh\\Desktop\\Cucumber\\CucucmberBase\\target\\cucumber.json");
}
}
