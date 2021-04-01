package com.step;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;


public class JvmReport {

	
	
	public static void generateJvmReport(String json) {
		File f= new File("C:\\Users\\vignesh\\Desktop\\Cucumber\\CucucmberBase\\target\\reports");
	Configuration c= new Configuration(f, "facebook");
	c.addClassifications("sprintNumber", "10");
	c.addClassifications("browsername", "chrome");
	c.addClassifications("OS", "windows");
	
	List<String> l= new ArrayList<String>();
	l.add(json);
		ReportBuilder r= new ReportBuilder(l, c);
		r.generateReports();	
	}
}
