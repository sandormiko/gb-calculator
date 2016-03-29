package com.gb.calculator.business.dto;

public class CalculationResult {

	private Double valueAddedTax;
	private Double vatRate;
	private Double priceWoVat;
	private Double priceInclVat;
	public Double getValueAddedTax() {
		return valueAddedTax;
	}
	public void setValueAddedTax(Double valueAddedTax) {
		this.valueAddedTax = valueAddedTax;
	}
	public Double getVatRate() {
		return vatRate;
	}
	public void setVatRate(Double vatRate) {
		this.vatRate = vatRate;
	}
	public Double getPriceWoVat() {
		return priceWoVat;
	}
	public void setPriceWoVat(Double priceWoVat) {
		this.priceWoVat = priceWoVat;
	}
	public Double getPriceInclVat() {
		return priceInclVat;
	}
	public void setPriceInclVat(Double priceInclVat) {
		this.priceInclVat = priceInclVat;
	}
	
}
