package com.gb.calculator.business.service;

import org.junit.Before;
import org.junit.Test;

import com.gb.calculator.business.dto.Calculation;

import org.junit.Assert;

public class CalculatorServiceBeanTest {

	private CalculatorServiceBean calcBean;
		
	@Before
	public void init(){
		calcBean = new CalculatorServiceBean();
	}
	
	@Test
	public void shouldCalculateBasedOnValueAddedTax(){
		Calculation input = new Calculation();
		input.setValueAddedTax(new Double(10));
		input.setVatRate(new Double(20));
		Calculation result = calcBean.calculate(input);
		Assert.assertEquals(new Double(60),result.getPriceInclVat());
		Assert.assertEquals(new Double(50),result.getPriceWoVat());
	}
	
	@Test
	public void shouldCalculateBasedOnPriceWoTax(){
		Calculation input = new Calculation();
		input.setPriceWoVat(new Double(50));
		input.setVatRate(new Double(20));
		Calculation result = calcBean.calculate(input);
		Assert.assertEquals(new Double(60),result.getPriceInclVat());
		Assert.assertEquals(new Double(10),result.getValueAddedTax());
	}
	
	@Test
	public void shouldCalculateBasedOnPriceInclVat(){
		Calculation input = new Calculation();
		input.setPriceInclVat(new Double(60));
		input.setVatRate(new Double(20));
		Calculation result = calcBean.calculate(input);
		Assert.assertEquals(new Double(50),result.getPriceWoVat());
		Assert.assertEquals(new Double(10),result.getValueAddedTax());
	}
	
	@Test
	public void shouldCalculateBasedOnPriceInclVatWith2Fractions(){
		Calculation input = new Calculation();
		input.setPriceInclVat(new Double(60));
		input.setVatRate(new Double(12));
		Calculation result = calcBean.calculate(input);
		Assert.assertEquals(new Double(53.57),result.getPriceWoVat());
		Assert.assertEquals(new Double(6.43),result.getValueAddedTax());
	}
	
	
}
