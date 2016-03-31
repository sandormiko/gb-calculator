Prerequisites
	The project was tested in the following environment
	1.JDK Version 1.7.0_85
	2.Tomcat version 7.0.68
	
	
Build:
	~/gb-calculator/mvn clean install
	
	
Distribution
	The war file is available as gb-calculator/target/GBCalculator.war


1.Soap interface:

	1.1 The Soap service is exposed to the following url:
		http://<host>:<port>/GBCalculator/calculator-ws/calculator

	1.2. The WSDL and xsd file is published at the following location:
		http://<host>:<port>/GBCalculator/calculator-ws/calculator.wsdl
		http://<host>:<port>/GBCalculator/calculator-ws/Types.xsd

	1.3 Valid Vat rate and one valid amount need to be provided otherwise the service returns with a Soap fault


2.Rest interface:
	The rest interface was built on the top of Spring MVC's RestController approach

	2.1 The rest interface is available at the following uri:
	
	http://<host>:<port>/GBCalculator/calculator-rs/calculations/

	It is implemented by using HTTP GET method and input params must be provided as query parameters:

	http://<host>:<port>/GBCalculator/calculator-rs/calculations/?vatRate=10&valueAddedTax=100

	2.2 When valid input is received the service resturns resources in JSON respresentation with HTTP OK status code
	
	{ taxRate : 10.0,valueAddedTax:100.0,priceWoTax:1000.0,priceInclVat:1100.0}

	2.3 When invalid input is received the service returns a JSON error response with HTTP Bad Request status code

	{ url: http://<host>:<port>/GBCalculator/calculator-rs/calculations/?vatRate=a&valueAddedTax=100
	message:"Tax rate is not numeric"}

	2.4. Note: According the Rest principles this service should have been implemented by using HTTP Post, because we request for  
		a new calculation, but as it is not needed to persist the calculation I decided to use GET. 



	
