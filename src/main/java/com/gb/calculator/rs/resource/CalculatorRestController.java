package com.gb.calculator.rs.resource;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gb.calculator.business.dto.CalculationData;
import com.gb.calculator.business.dto.CalculationValidorInput;
import com.gb.calculator.business.exception.CalculatorBusinessException;
import com.gb.calculator.business.service.facade.CalculatorBusinessFacade;
import com.gb.calculator.rs.dto.BadRequest;
import com.gb.calculator.rs.exception.CalculatorRsException;

@RestController
public class CalculatorRestController {

	private CalculatorBusinessFacade facade;

	@Autowired
	public CalculatorRestController(CalculatorBusinessFacade aFacade) {
		this.facade = aFacade;
	}

	@ExceptionHandler(CalculatorRsException.class)
	public ResponseEntity<BadRequest> handleCalculatorRsException(HttpServletRequest request,
			CalculatorRsException ex) {
		StringBuilder uri = new StringBuilder(request.getRequestURL().toString());
		uri.append(request.getQueryString());
		BadRequest bRequest = new BadRequest(uri.toString(), ex.getMessage());
		return new ResponseEntity<BadRequest>(bRequest, HttpStatus.BAD_REQUEST);
	}
	
	@RequestMapping(value = "/calculations/", method = RequestMethod.POST, produces = "application/json")
	public ResponseEntity<CalculationData> calculate(@RequestBody CalculationValidorInput input) {
		CalculationData result = null;
		try {
			result = facade.validateAndProcess(input);

		} catch (CalculatorBusinessException ex) {
			throw new CalculatorRsException(ex.getMessage());
		}
		return new ResponseEntity<CalculationData>(result, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/calculations/{id}", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<CalculationData> find(@PathVariable("id") Long calculationId) {
		CalculationData result = null;
		System.err.println("Calculation id "+calculationId);
			result = facade.find(calculationId);
			if(result == null){
				return new ResponseEntity<CalculationData>(HttpStatus.NOT_FOUND);
			}
		
		return new ResponseEntity<CalculationData>(result, HttpStatus.OK);
	}
}
