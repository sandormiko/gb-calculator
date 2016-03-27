package com.gb.calculator.ws.fault;

import javax.xml.ws.WebFault;

@SuppressWarnings("serial")
@WebFault(name="CalculatorFault")
public class InvalidRequesParamsException extends RuntimeException {

	private String faultCode;
	private String faultMessge;
	
	public InvalidRequesParamsException(String message) {
        super(message);
    }

}
