package com.gb.calculator.business.dto;

public class CalculationValidorInput {

	private String valueAddedTax;
	private String vatRate;
	private String priceWoVat;
	private String priceInclVat;
	
	public String getValueAddedTax() {
		return valueAddedTax;
	}
	public void setValueAddedTax(String valueAddedTax) {
		this.valueAddedTax = valueAddedTax;
	}
	public String getVatRate() {
		return vatRate;
	}
	public CalculationValidorInput(){
		
	}
	
	public CalculationValidorInput(String valueAddedTax, String vatRate, String priceWoVat, String priceInclVat) {
		super();
		this.valueAddedTax = valueAddedTax;
		this.vatRate = vatRate;
		this.priceWoVat = priceWoVat;
		this.priceInclVat = priceInclVat;
	}
	
	public void setVatRate(String vatRate) {
		this.vatRate = vatRate;
	}
	public String getPriceWoVat() {
		return priceWoVat;
	}
	public void setPriceWoVat(String priceWoVat) {
		this.priceWoVat = priceWoVat;
	}
	public String getPriceInclVat() {
		return priceInclVat;
	}
	public void setPriceInclVat(String priceInclVat) {
		this.priceInclVat = priceInclVat;
	}
	
}
