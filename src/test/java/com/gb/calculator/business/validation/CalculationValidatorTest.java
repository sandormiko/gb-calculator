package com.gb.calculator.business.validation;


import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.not;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import com.gb.calculator.business.dto.CalculationValidorInput;


public class CalculationValidatorTest {

	private CalculationValidator validator = null;
	
	
	@Before
	public void init(){ 
		validator = new CalculationValidator();
	}
	
	@Test
	public void shouldPassForValidInputs(){
		CalculationValidorInput calculation = new CalculationValidorInput();
		calculation.setVatRate("10");
		calculation.setPriceWoVat("100");
		CalculationValidationResult res = validator.validate(calculation);
		Assert.assertThat(res.isValid(),is(true));
	}
	
	@Test
	public void shouldFailForNotNumericAmount(){
		CalculationValidorInput calculation = new CalculationValidorInput();
		calculation.setVatRate("10");
		calculation.setPriceWoVat("A");
		CalculationValidationResult res = validator.validate(calculation);
		Assert.assertThat(res.isValid(),is(not(true)));
	}
	
	@Test
	public void shouldFailForZeroAmount(){
		CalculationValidorInput calculation = new CalculationValidorInput();
		calculation.setVatRate("10");
		calculation.setPriceWoVat("0");
		CalculationValidationResult res = validator.validate(calculation);
		Assert.assertThat(res.isValid(),is(not(true)));
	}
	
	@Test
	public void shouldFailForBothAmountsGiven(){
		CalculationValidorInput calculation = new CalculationValidorInput();
		calculation.setVatRate("10");
		calculation.setPriceWoVat("10");
		calculation.setPriceInclVat("10");
		CalculationValidationResult res = validator.validate(calculation);
		Assert.assertThat(res.isValid(),is(not(true)));
	}
	
	
}
