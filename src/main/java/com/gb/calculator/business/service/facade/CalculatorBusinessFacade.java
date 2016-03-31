package com.gb.calculator.business.service.facade;

import java.util.Set;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gb.calculator.business.dto.CalculationData;
import com.gb.calculator.business.dto.CalculationValidorInput;
import com.gb.calculator.business.exception.CalculatorBusinessException;
import com.gb.calculator.business.service.CalculatorServiceBean;
import com.gb.calculator.business.validation.CalculationValidationResult;
import com.gb.calculator.business.validation.CalculationValidator;

@Service
public class CalculatorBusinessFacade {

	private final CalculatorServiceBean serviceBean;
	private final CalculationValidator validator;
	
	
	@Autowired
	public CalculatorBusinessFacade(CalculatorServiceBean aServiceBean,CalculationValidator aValidator){
		this.serviceBean = aServiceBean;
		this.validator = aValidator;
	}
	
	public CalculationData validateAndProcess(CalculationValidorInput calc) throws CalculatorBusinessException{
		
		CalculationValidationResult valRes = validator.validate(calc);
		if(!valRes.isValid()){
			Set<String> feedbackMessages = valRes.getFeedbackMessages();
			String message = StringUtils.join(feedbackMessages, "\n");
			throw new CalculatorBusinessException(message);
		}
		CalculationData calculationInp = convert(calc);
		CalculationData calculationResult = serviceBean.calculate(calculationInp);
		return calculationResult;
	}
	
	private CalculationData convert(CalculationValidorInput calc){
		
		CalculationData result = new CalculationData();
		if(!StringUtils.isEmpty(calc.getPriceInclVat())){
			result.setPriceInclVat(Double.valueOf(calc.getPriceInclVat()));
		}
		if(!StringUtils.isEmpty(calc.getPriceWoVat())){
			result.setPriceWoVat(Double.valueOf(calc.getPriceWoVat()));
		}
		
		if(!StringUtils.isEmpty(calc.getValueAddedTax())){
			result.setValueAddedTax(Double.valueOf(calc.getValueAddedTax()));
		}
		
		result.setVatRate(Double.valueOf(calc.getVatRate()));
		return result;
	}
}
