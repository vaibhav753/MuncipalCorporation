package com.app.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/navigatetocomplaints")
@CrossOrigin(origins = "http://localhost:3000")
public class NavigationController {

	
	@GetMapping
	public  ResponseEntity<?> getAllMainComplaint(){
		
		return ResponseEntity.ok(true);
		
	}
}
