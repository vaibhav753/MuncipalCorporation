package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.IComplaintService;

@RestController
@RequestMapping("/complaintdetails")
@CrossOrigin(origins = "http://localhost:3000")
public class ComplaintDetails {

	@Autowired
	private IComplaintService complaintService;
	
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getComplaintsDetails(@PathVariable("id") int id){
		return ResponseEntity.ok(complaintService.getComplaintsDetails(id));
	}
}
