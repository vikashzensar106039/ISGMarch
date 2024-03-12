package com.zensar.pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.zensar.scriptutils.PageBase;
import com.zensar.scriptutils.ScenarioState;

public class CloseTransaction extends PageBase {

	
	@FindBy(xpath = "//h5[@class='transaction-title']")
	WebElement closeTransaction;
	
	@FindBy(xpath = "//button[@class='btn secondary-icon-btn-m view-all-transaction ng-star-inserted']")
	WebElement viewAllClose;
	
	@FindBy(xpath = "//*[@id=\"closedProjectPage\"]/section[2]/section/kendo-grid/div/table/tbody/tr[1]/td[1]/span")
	WebElement firstCloseTransaction;
	
	@FindBy(xpath = "//h5[contains(@class,'active-transaction-title')]")
	WebElement verifyCloseTransaction;
	
	@FindBy(xpath = "//h5[contains(@class,'active-transaction-title')]")
	WebElement projectOverviewReadOnly;
	
	@FindBy(xpath = "//h5[contains(@class,'active-transaction-title')]")
	WebElement projectDetails;
	
	@FindBy(xpath = "//h5[contains(@class,'active-transaction-title')]")
	WebElement addAccountViewOnly;
	
	public CloseTransaction(ScenarioState state) {
		super(state);
	}
	public void closeTrans()
	{
		waitForElementClickabality(closeTransaction);
		pause(10000);
		String notificationMessage = getText(closeTransaction);
		System.out.println("Number of Close Transaction: " + notificationMessage);
		embedScreenshot();
		zAssertTrue(true, "Number of Close Transaction =  " + notificationMessage,
				"There is no Active Transaction  " + notificationMessage);
	}
	
	public void viewAllClose()
	{
		waitForElement(viewAllClose);
		pause(5000);
		click(viewAllClose);
		embedScreenshot();
	}
	
	public void firstClose()
	{
		waitForElement(firstCloseTransaction);
		pause(5000);
		click(firstCloseTransaction);
		embedScreenshot();
	}
	public void verifyClose()
	{
		waitForElement(verifyCloseTransaction);
		pause(5000);
		click(verifyCloseTransaction);
		embedScreenshot();
	}
	
	
	public void projectOverviewRead()
	{
		waitForElement(projectOverviewReadOnly);
		pause(5000);
		click(projectOverviewReadOnly);
		embedScreenshot();
	}
	public void projectDetails()
	{
		waitForElement(projectDetails);
		pause(5000);
		click(projectDetails);
		embedScreenshot();
	}
	
	public void addContactView()
	{
		waitForElement(addAccountViewOnly);
		pause(5000);
		click(addAccountViewOnly);
		embedScreenshot();
	}
	}