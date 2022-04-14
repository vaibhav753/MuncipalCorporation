package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.IComplaintService;

@RestController
@RequestMapping("/usercomplaintslist")
@CrossOrigin(origins = "http://localhost:3000")
public class UserComplaintController {
	
	@Autowired
	private IComplaintService complaintService;
	
	@GetMapping
	public ResponseEntity<?> getUserComplaints(){
		return ResponseEntity.ok(complaintService.getUserComplaints());
	}

}
