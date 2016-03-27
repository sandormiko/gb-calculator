package com.gb.calculator.ws;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

import com.gb.calculator.business.dto.Calculation;
import com.gb.calculator.business.dto.ValidatableCalculation;
import com.gb.calculator.business.exception.CalculatorBusinessException;
import com.gb.calculator.business.service.facade.CalculatorBusinessFacade;

@Endpoint
public class CalculatorWsEndPoint {

	private CalculatorBusinessFacade facade;
	
	@Autowired
	public CalculatorWsEndPoint(CalculatorBusinessFacade aFacade){
		this.facade =  aFacade;
	}
	
	@PayloadRoot(localPart="CalculationRequest", namespace="http://ws.calculator.gb.com/")
	public @ResponsePayload CalculationResponse  getCalculation(@RequestPayload CalculationRequest cRequest) throws CalculatorFault_Exception{
		CalculationResponse resp = null;
		try{
			com.gb.calculator.ws.Calculation request = cRequest.getCalculation();
			ValidatableCalculation toValidate = new ValidatableCalculation(request.getValueAddedTax(), request.getVatRate(), request.getPriceWOVat(), request.getPriceWithVat());
			Calculation result = facade.validateAndProcess(toValidate);
			resp = prerareResponse(result);
			
			}catch(CalculatorBusinessException ex){
				handleBusinessException(ex);
			}
		return resp;
		}

	private void handleBusinessException(CalculatorBusinessException ex) throws CalculatorFault_Exception {
		CalculatorFault f = new CalculatorFault();
		f.setFaultCode("INVALID_INPUT");
		f.setFaultMessage(ex.getMessage());
		throw new CalculatorFault_Exception(ex.getMessage(),f);
	}
		
	
	private CalculationResponse prerareResponse(Calculation result) {
		CalculationResponse resp = new CalculationResponse();
		com.gb.calculator.ws.Calculation calculation = new com.gb.calculator.ws.Calculation();
		calculation.setPriceWithVat(String.valueOf(result.getPriceInclVat()));
		calculation.setPriceWOVat(String.valueOf(result.getPriceWoVat()));
		calculation.setValueAddedTax(String.valueOf(result.getValueAddedTax()));
		calculation.setVatRate(String.valueOf(result.getVatRate()));
		resp.setCalculation(calculation);
		return resp;
	}
}
