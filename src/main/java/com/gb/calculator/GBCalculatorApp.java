package com.gb.calculator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.DispatcherServletAutoConfiguration;
import org.springframework.boot.context.embedded.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.DispatcherServlet;


@SpringBootApplication(exclude=DispatcherServletAutoConfiguration.class,scanBasePackages="com.gb.calculator")
public class GBCalculatorApp {
	
		public static void main(String[] args) {
			SpringApplication.run(GBCalculatorApp.class,args); 

		}
		
		@Bean
	    public ServletRegistrationBean dispatcherServlet() {
	        return new ServletRegistrationBean(new DispatcherServlet(), "/calculator-rs/*");
	    }

	}
	
