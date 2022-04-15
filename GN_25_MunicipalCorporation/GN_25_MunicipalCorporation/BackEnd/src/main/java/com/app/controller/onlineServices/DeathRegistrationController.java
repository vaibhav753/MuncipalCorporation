package com.app.controller.onlineServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.onlineServices.DeathRegDto;
import com.app.service.onlineServices.IDeathRegService;

@RestController
@RequestMapping("/deathRegistration")
@CrossOrigin(origins = "http://localhost:3000")
public class DeathRegistrationController {

	@Autowired
	private IDeathRegService deathRegService;

	@PostMapping//("/deathRegistration")
	public ResponseEntity<?> saveRegistration(@RequestBody DeathRegDto request) {
		System.out.println(request);
		return new ResponseEntity<>(deathRegService.addDeathReg(request), HttpStatus.CREATED);
	}
	@GetMapping("/uvlist")
	public ResponseEntity<?> getUnverifedDeathRegistrationDetails(){
		return new ResponseEntity<>(deathRegService.getAllDeathDetails(),HttpStatus.OK);
	}
	@GetMapping("/deathDetails/{id}")
	public ResponseEntity<?> getDeathDetails(@PathVariable("id")int id){
		System.out.println("id"+id);
		return new ResponseEntity<>(deathRegService.getSingleDetails(id),HttpStatus.OK);
	}
	@PutMapping("/uvlist/{id}/{status}")
	public ResponseEntity<?> updateStatus(@PathVariable("id")int id,@PathVariable("status") String status){
		return new ResponseEntity<>(deathRegService.setStatus(id,status),HttpStatus.OK);
	}
	@GetMapping("/vlist")
	public ResponseEntity<?> getApprovedDeathRegistrationDetails(){
		return new ResponseEntity<>(deathRegService.getApprovedDeathDetails(),HttpStatus.OK);
	}
	@GetMapping("/rejectedlist")
	public ResponseEntity<?> getRejectedDeathRegistrationDetails(){
		return new ResponseEntity<>(deathRegService.getRejectedDeathDetails(),HttpStatus.OK);
	}

}
