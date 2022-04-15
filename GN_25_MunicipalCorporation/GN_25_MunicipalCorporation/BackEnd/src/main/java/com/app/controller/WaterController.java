package com.app.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.IWaterService;


@RestController
@RequestMapping("/water")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})
public class WaterController {

	@Autowired
	private IWaterService waterService;
	
	@GetMapping("/{consumer_id}")
	public ResponseEntity<?> findWaterStatus(@PathVariable("consumer_id") int consumerId) {
		return ResponseEntity.ok(waterService.getWaterPaymentDetails(consumerId));
	}
	
	@GetMapping("/current/{email}")
	public ResponseEntity<?> findWaterStatus(@PathVariable("email") String email) {
		return ResponseEntity.ok(waterService.getCurrentWaterPaymentDetails(email));
	}
	
	@PutMapping("/{consumer_id}")
	public ResponseEntity<?> updateWaterStatus(@PathVariable("consumer_id") int consumerId) {
		return ResponseEntity.ok(waterService.updateWaterTaxStatus(consumerId));
	}
	
}
