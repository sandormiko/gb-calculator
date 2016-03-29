package com.gb.calculator.business.service;

import org.junit.Before;
import org.junit.Test;

import com.gb.calculator.business.dto.CalculationResult;

import org.junit.Assert;

public class CalculatorServiceBeanTest {

	private CalculatorServiceBean calcBean;
		
	@Before
	public void init(){
		calcBean = new CalculatorServiceBean();
	}
	
	@Test
	public void shouldCalculateBasedOnValueAddedTax(){
		CalculationResult input = new CalculationResult();
		input.setValueAddedTax(new Double(10));
		input.setVatRate(new Double(20));
		CalculationResult result = calcBean.calculate(input);
		Assert.assertEquals(new Double(60),result.getPriceInclVat());
		Assert.assertEquals(new Double(50),result.getPriceWoVat());
	}
	
	@Test
	public void shouldCalculateBasedOnPriceWoTax(){
		CalculationResult input = new CalculationResult();
		input.setPriceWoVat(new Double(50));
		input.setVatRate(new Double(20));
		CalculationResult result = calcBean.calculate(input);
		Assert.assertEquals(new Double(60),result.getPriceInclVat());
		Assert.assertEquals(new Double(10),result.getValueAddedTax());
	}
	
	@Test
	public void shouldCalculateBasedOnPriceInclVat(){
		CalculationResult input = new CalculationResult();
		input.setPriceInclVat(new Double(60));
		input.setVatRate(new Double(20));
		CalculationResult result = calcBean.calculate(input);
		Assert.assertEquals(new Double(50),result.getPriceWoVat());
		Assert.assertEquals(new Double(10),result.getValueAddedTax());
	}
	
	@Test
	public void shouldCalculateBasedOnPriceInclVatWith2Fractions(){
		CalculationResult input = new CalculationResult();
		input.setPriceInclVat(new Double(60));
		input.setVatRate(new Double(12));
		CalculationResult result = calcBean.calculate(input);
		Assert.assertEquals(new Double(53.57),result.getPriceWoVat());
		Assert.assertEquals(new Double(6.43),result.getValueAddedTax());
	}
	
	
}
