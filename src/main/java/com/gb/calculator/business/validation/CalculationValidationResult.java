package com.gb.calculator.business.validation;

import java.util.HashSet;
import java.util.Set;

public class CalculationValidationResult {

	private Set<String>  feedbackMessages =  new HashSet<>();

	public Set<String> getFeedbackMessages() {
		return feedbackMessages;
	} 
	
	public boolean isValid(){
		return feedbackMessages.size() == 0;
	}
}
