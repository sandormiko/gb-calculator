package com.gb.calculator.rs.resource;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gb.calculator.business.dto.CalculationResult;
import com.gb.calculator.business.dto.CalculationValidorInput;
import com.gb.calculator.business.exception.CalculatorBusinessException;
import com.gb.calculator.business.service.facade.CalculatorBusinessFacade;
import com.gb.calculator.rs.dto.BadRequest;
import com.gb.calculator.rs.exception.CalculatorRsException;

@RestController
public class CalculatorRestController {

private CalculatorBusinessFacade facade;
	
	@Autowired
	public CalculatorRestController(CalculatorBusinessFacade aFacade){
		this.facade =  aFacade;
	}
	@RequestMapping(value = "/calculations/", method = RequestMethod.GET,produces="application/json")
    public ResponseEntity<CalculationResult> calculate(CalculationValidorInput input) {
		CalculationResult result = null;
		try{
			result = facade.validateAndProcess(input);
		
		}catch(CalculatorBusinessException ex){
			throw new CalculatorRsException(ex.getMessage());
		}
		return new ResponseEntity<CalculationResult>(result, HttpStatus.OK);
    }
	
	@ExceptionHandler(CalculatorRsException.class)
    @ResponseBody
    public ResponseEntity<BadRequest> handleTypeMismatchException(HttpServletRequest request, CalculatorRsException ex) {
       StringBuilder uri = new StringBuilder(request.getRequestURL().toString());
       uri.append(request.getQueryString());
       BadRequest bRequest = new BadRequest(uri.toString(), ex.getMessage()); 
       return new ResponseEntity<BadRequest>(bRequest, HttpStatus.BAD_REQUEST);
    }
}
