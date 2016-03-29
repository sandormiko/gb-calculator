package com.gb.calculator.rs.dto;

public class BadRequest {

	private String url;
	private String message;
	
	public BadRequest(String url, String message) {
		super();
		this.url = url;
		this.message = message;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	
}
