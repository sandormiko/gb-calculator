package com.gb.calculator.business.service;

import java.math.BigDecimal;
import java.math.RoundingMode;

import org.springframework.stereotype.Service;

import com.gb.calculator.business.dto.CalculationResult;

@Service
public class CalculatorServiceBean {

	public CalculationResult calculate(CalculationResult calculation) {

		CalculationResult result = new CalculationResult();
		Double vatRate = calculation.getVatRate();
		Double priceInclVat = calculation.getPriceInclVat();
		Double priceWoVat = calculation.getPriceWoVat();
		Double valueAddedTax = calculation.getValueAddedTax();
		result.setVatRate(to2FractionDigits(vatRate));
		if (priceInclVat != null) {
			priceWoVat = (priceInclVat * 100) / (vatRate + 100);
			valueAddedTax = priceInclVat - priceWoVat;
			result.setPriceInclVat(to2FractionDigits(priceInclVat));
			result.setValueAddedTax(to2FractionDigits(valueAddedTax));
			result.setPriceWoVat(to2FractionDigits(priceWoVat));
		} else if (priceWoVat != null) {

			Double valueTax = priceWoVat * vatRate / 100;
			priceInclVat = priceWoVat + valueTax;
			result.setPriceInclVat(to2FractionDigits(priceInclVat));
			result.setValueAddedTax(to2FractionDigits(valueTax));
			result.setPriceWoVat(to2FractionDigits(priceWoVat));
			result.setValueAddedTax(to2FractionDigits(valueTax));
		} else if (valueAddedTax != null) {
			priceWoVat = valueAddedTax * 100 / vatRate;
			priceInclVat = priceWoVat + valueAddedTax;
			result.setPriceInclVat(to2FractionDigits(priceInclVat));
			result.setValueAddedTax(to2FractionDigits(valueAddedTax));
			result.setPriceWoVat(to2FractionDigits(priceWoVat));

		}
		return result;

	}

	private double to2FractionDigits(Double value) {
		BigDecimal bd = new BigDecimal(value);
		bd = bd.setScale(2, RoundingMode.HALF_UP);
		return bd.doubleValue();
	}
}
