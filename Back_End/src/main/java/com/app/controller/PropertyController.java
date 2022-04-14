package com.app.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.IPropertyService;


@RestController
@RequestMapping("/property")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})
public class PropertyController {

	@Autowired
	private IPropertyService propertyService;
	
	@GetMapping("/{consumer_id}")
	public ResponseEntity<?> findPropertyStatus(@PathVariable("consumer_id") int consumerId) {
		System.out.println("hello");
		return ResponseEntity.ok(propertyService.getPropertyPaymentDetails(consumerId));
	}
	
	@GetMapping("/current/{email}")
	public ResponseEntity<?> findPropertyStatus(@PathVariable("email") String email) {
//		System.out.println(propertyService.getCurrentPropertyPaymentDetails(email));
		propertyService.getCurrentPropertyPaymentDetails(email).forEach(s -> System.out.println(s.getId()));
		return ResponseEntity.ok(propertyService.getCurrentPropertyPaymentDetails(email));
	}
	
	@PutMapping("/{consumer_id}")
	public ResponseEntity<?> updatePropertyStatus(@PathVariable("consumer_id") int consumerId) {
		return ResponseEntity.ok(propertyService.updatePropertyTaxStatus(consumerId));
	}
	
}
