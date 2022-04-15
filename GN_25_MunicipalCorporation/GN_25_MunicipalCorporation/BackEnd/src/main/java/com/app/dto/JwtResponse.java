package com.app.dto;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;

public class JwtResponse {
	String token;
	String Role;


	public JwtResponse() {
		
	}
	
	public JwtResponse(String token, String role) {
		
		this.token = token;
		this.Role = role;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getRole() {
		return Role;
	}

	public void setRole(String role) {
		Role = role;
	}
	
	
	
	
	
}
