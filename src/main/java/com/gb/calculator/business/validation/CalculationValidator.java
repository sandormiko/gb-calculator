package com.gb.calculator.business.validation;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.springframework.stereotype.Component;

import com.gb.calculator.business.dto.CalculationValidorInput;
import com.gb.calculator.business.resources.CalculatorMessageResources;

@Component
public class CalculationValidator {

	public CalculationValidationResult validate(CalculationValidorInput calculation){
		CalculationValidationResult result = new CalculationValidationResult();
		
		String feedbackMsg = validateVatRate(calculation);
		if(!StringUtils.isEmpty(feedbackMsg)){
			result.getFeedbackMessages().add(feedbackMsg);
		}
		feedbackMsg = validateAmounts(calculation);
		if(!StringUtils.isEmpty(feedbackMsg)){
			result.getFeedbackMessages().add(feedbackMsg);
		}
		return result;
	}
	
	private String validateVatRate(CalculationValidorInput calculation){
		String vatRate = calculation.getVatRate();
		String feedBackMessage = null;
		if(!StringUtils.isNumeric(vatRate)){
			feedBackMessage = CalculatorMessageResources.VAT_RATE_NOT_NUMERIC;
			
		}else if(Integer.valueOf(vatRate)<=0){
			feedBackMessage = CalculatorMessageResources.VAT_RATE_ZERO;
		}
		
		return feedBackMessage;
		
	}
	
	private String validateAmounts(CalculationValidorInput calculation){
		String feedBackMessage = null;
		String priceIncVat = calculation.getPriceInclVat();
		String priceWoVat = calculation.getPriceWoVat();
		String valueAddedTax = calculation.getValueAddedTax();
		feedBackMessage = checkOnlyOneAmountIsGiven(calculation);
		if(StringUtils.isNotEmpty(feedBackMessage)){
			return feedBackMessage;
		}
		if(StringUtils.isNotEmpty(priceIncVat) && !NumberUtils.isNumber(priceIncVat)){
			feedBackMessage = CalculatorMessageResources.PRINCE_INC_VAT_NOT_NUMERIC;
		}else if(StringUtils.isNotEmpty(priceWoVat) && !NumberUtils.isNumber(priceWoVat)){
			feedBackMessage = CalculatorMessageResources.PRINCE_WO_VAT_NOT_NUMERIC;
		}else if(StringUtils.isNotEmpty(valueAddedTax) && !NumberUtils.isNumber(valueAddedTax)){
			feedBackMessage = CalculatorMessageResources.VALUE_ADDED_TAX_NOT_NUMERIC;
		}
		else if(StringUtils.isNotEmpty(priceIncVat) && Double.valueOf(priceIncVat)<=0){
			feedBackMessage = CalculatorMessageResources.PRICE_INCL_VAT_ZERO;
		}else if(StringUtils.isNotEmpty(priceWoVat) && Double.valueOf(priceWoVat)<=0){
			feedBackMessage = CalculatorMessageResources.PRICE_WO_VAT_ZERO;
		}
		else if(StringUtils.isNotEmpty(valueAddedTax) && Double.valueOf(valueAddedTax)<=0){
			feedBackMessage = CalculatorMessageResources.VALUE_ADDED_TAX_ZERO;
		}
		
		return feedBackMessage;
		
	}
	
	private String checkOnlyOneAmountIsGiven(CalculationValidorInput calculation){
		String feedBackMessage = null;
		String priceIncVat = calculation.getPriceInclVat();
		String priceWoVat = calculation.getPriceWoVat();
		String valueAddedTax = calculation.getValueAddedTax();
		int count = 0;
		if(StringUtils.isNotEmpty(priceIncVat)){
			count++;
		}
		if(StringUtils.isNotEmpty(priceWoVat)){
			count++;
		}
		if(StringUtils.isNotEmpty(valueAddedTax)){
			count++;
		}
		if(count == 0){
			feedBackMessage = CalculatorMessageResources.NO_AMOUNT;
		}
		else if(count > 1){
			feedBackMessage = CalculatorMessageResources.TOO_MANY_AMOUNTS;
		}
		return feedBackMessage;
	}
	
	
}
