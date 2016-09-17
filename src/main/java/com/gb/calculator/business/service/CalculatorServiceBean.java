package com.gb.calculator.business.service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.stereotype.Service;

import com.gb.calculator.business.dto.CalculationData;

@Service
public class CalculatorServiceBean {

	private ConcurrentHashMap<Long, CalculationData> cache = new ConcurrentHashMap<>();
	
	public CalculationData calculate(CalculationData calculation) {

		CalculationData result = new CalculationData();
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
		result.setId(Long.valueOf(cache.size()+1));
		cache.put(result.getId(), result);
		return result;

	}

	private double to2FractionDigits(Double value) {
		BigDecimal bd = new BigDecimal(value);
		bd = bd.setScale(2, RoundingMode.HALF_UP);
		return bd.doubleValue();
	}
	
	public CalculationData find(Long id){
		return cache.get(id);
	}
}
