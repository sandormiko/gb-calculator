package com.gb.calculator.ws.fault;

import javax.xml.namespace.QName;

import org.springframework.ws.soap.SoapFault;
import org.springframework.ws.soap.SoapFaultDetail;
import org.springframework.ws.soap.server.endpoint.SoapFaultMappingExceptionResolver;

public class CalculatorSoapFaultMappingExceptionResolver extends SoapFaultMappingExceptionResolver{
	private static final QName CODE = new QName("faultCode");  
	private static final QName SUB_CODE = new QName("faultMessage");  
	
	@Override  
	protected void customizeFault(Object endpoint, Exception ex, SoapFault fault) {  
	   
	    if (ex instanceof InvalidRequesParamsException) {  
	        SoapFaultDetail detail = fault.addFaultDetail();  
	        detail.addFaultDetailElement(CODE).addText("1");  
	        detail.addFaultDetailElement(SUB_CODE).addText(ex.getMessage());  
	    }  
	}
}
