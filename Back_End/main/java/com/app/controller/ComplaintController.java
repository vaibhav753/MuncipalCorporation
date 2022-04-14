package com.app.controller;


import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.RegisterComplaint;
import com.app.service.IComplaintService;


@RestController
@RequestMapping("/complaints")
@CrossOrigin(origins = "http://localhost:3000")
public class ComplaintController {
	
	@Autowired
	private IComplaintService complaintService;
	
	@PostMapping
	public ResponseEntity<?> saveComplaint(@RequestBody RegisterComplaint request)
	{
		System.out.println(request.getComplaint());
		return new ResponseEntity<>(complaintService.addComplaint(request), HttpStatus.CREATED) ;
	}
	
	@GetMapping
	public ResponseEntity<?> getAllMainComplaint(){
		complaintService.getMainComplaints().forEach((s)->System.out.println(s));
//		return new ResponseEntity<>(complaintService.getMainComplaints(), HttpStatus.OK) ;
		return ResponseEntity.ok(complaintService.getMainComplaints());
	}
	
	@GetMapping("/{mainComplaint}")
	public ResponseEntity<?> getAllSubComplaints(@PathVariable ("mainComplaint")String mainComplaint)
	{
		return new ResponseEntity<>(complaintService.getSubTypes(mainComplaint), HttpStatus.OK);
	}
	
	
}
