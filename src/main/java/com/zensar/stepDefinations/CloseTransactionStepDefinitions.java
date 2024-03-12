package com.zensar.stepDefinations;

import com.zensar.pageobjects.CloseTransaction;
import com.zensar.scriptutils.ScenarioState;
import com.zensar.scriptutils.StepBase;
import cucumber.api.java.en.Then;

public class CloseTransactionStepDefinitions extends StepBase {

	
	
	CloseTransaction closetransaction;
	

	public CloseTransactionStepDefinitions(ScenarioState scenarioState) {
		super(scenarioState);
		
		
		 closetransaction = new  CloseTransaction(getState());
		
		
	}
	
	@Then("^Verify for Close Transaction$")
	public void Verify_for_Close_Transaction() throws Throwable {
		closetransaction.closeTrans();
	}
	
	
    @Then("^User clicks on View all Close Transaction$")
	public void user_clicks_on_set_up_Project_icon() throws Throwable {
    	closetransaction.viewAllClose();
		
	}
    @Then("^User Clicks on First close Transaction$")
	public void user_verifies_project_details_click_next() throws Throwable {
    	closetransaction.firstClose();
	}
    @Then("^Able to verify close transaction message$")
	public void navigate_Project_Overview_section_add_project_overview() throws Throwable {
    	closetransaction.verifyClose();
	}
    
    @Then("^Able to verify Project overview in read only mode$")
	public void clicks_on_Next_Add_Client_Lead() throws Throwable {
    	closetransaction.projectOverviewRead();
	}
    @Then("^User able on go to Project contact Details$")
	public void select_Anticipated_award_Date() throws Throwable {
    	closetransaction.projectDetails();
	}
    @Then("^Able to verify Add contact & view button$")
	public void select_Competitive_Project() throws Throwable {
    	closetransaction.addContactView();
	}
    
   
	}
