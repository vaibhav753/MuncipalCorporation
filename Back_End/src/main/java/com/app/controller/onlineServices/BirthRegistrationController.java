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

import com.app.dto.onlineServices.BirthRegDto;
import com.app.service.onlineServices.IBirthRegService;
//import com.app.service.IComplaintService;

@RestController
@RequestMapping("/birthRegistration")
@CrossOrigin(origins = "http://localhost:3000")
public class BirthRegistrationController {
	
	@Autowired
	private IBirthRegService birthRegService;
	
	@PostMapping
	public ResponseEntity<?> saveRegistration(@RequestBody BirthRegDto request)
	{
		System.out.println(request);
		return new ResponseEntity<>(birthRegService.addBirthReg(request), HttpStatus.CREATED) ;
	}
	
	@GetMapping("/uvlist")
	public ResponseEntity<?> getUnverifedBirthRegistrationDetails(){
		return new ResponseEntity<>(birthRegService.getAllBirthDetails(),HttpStatus.OK);
	}
	@GetMapping("/birthDetails/{id}")
	public ResponseEntity<?> getBirthDetails(@PathVariable("id")int id){
		System.out.println("id"+id);
		return new ResponseEntity<>(birthRegService.getSingleDetails(id),HttpStatus.OK);
	}
	@PutMapping("/uvlist/{id}/{status}")
	public ResponseEntity<?> updateStatus(@PathVariable("id")int id,@PathVariable("status") String status){
		return new ResponseEntity<>(birthRegService.setStatus(id,status),HttpStatus.OK);
	}
	@GetMapping("/vlist")
	public ResponseEntity<?> getApprovedBirthRegistrationDetails(){
		return new ResponseEntity<>(birthRegService.getApprovedBirthDetails(),HttpStatus.OK);
	}
	@GetMapping("/rejectedlist")
	public ResponseEntity<?> getRejectedBirthRegistrationDetails(){
		return new ResponseEntity<>(birthRegService.getRejectedBirthDetails(),HttpStatus.OK);
	}
}
