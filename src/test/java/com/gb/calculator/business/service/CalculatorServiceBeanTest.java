package com.gb.calculator.business.service;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import com.gb.calculator.business.dto.CalculationData;
import static org.hamcrest.core.IsEqual.equalTo;


public class CalculatorServiceBeanTest {

	private CalculatorServiceBean calcBean;
		
	@Before
	public void init(){
		calcBean = new CalculatorServiceBean();
	}
	
	@Test
	public void shouldCalculateBasedOnValueAddedTax(){
		CalculationData input = new CalculationData();
		input.setValueAddedTax(new Double(10));
		input.setVatRate(new Double(20));
		CalculationData result = calcBean.calculate(input);
		Assert.assertThat(result.getPriceInclVat(), equalTo(new Double(60)));
		Assert.assertThat(result.getPriceWoVat(),equalTo(new Double(50)));
	}
	
	@Test
	public void shouldCalculateBasedOnPriceWoTax(){
		CalculationData input = new CalculationData();
		input.setPriceWoVat(new Double(50));
		input.setVatRate(new Double(20));
		CalculationData result = calcBean.calculate(input);
		Assert.assertThat(result.getPriceInclVat(),equalTo(new Double(60)));
		Assert.assertThat(result.getValueAddedTax(),equalTo(new Double(10)));
	}
	
	@Test
	public void shouldCalculateBasedOnPriceInclVat(){
		CalculationData input = new CalculationData();
		input.setPriceInclVat(new Double(60));
		input.setVatRate(new Double(20));
		CalculationData result = calcBean.calculate(input);
		Assert.assertThat(result.getPriceWoVat(),equalTo(new Double(50)));
		Assert.assertThat(result.getValueAddedTax(),equalTo(new Double(10)));
	}
	
	@Test
	public void shouldCalculateBasedOnPriceInclVatWith2Fractions(){
		CalculationData input = new CalculationData();
		input.setPriceInclVat(new Double(60));
		input.setVatRate(new Double(12));
		CalculationData result = calcBean.calculate(input);
		Assert.assertThat(result.getPriceWoVat(),equalTo(new Double(53.57)));
		Assert.assertThat(result.getValueAddedTax(),equalTo(new Double(6.43)));
	}
	
	
}
