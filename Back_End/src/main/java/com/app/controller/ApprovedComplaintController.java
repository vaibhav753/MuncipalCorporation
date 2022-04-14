package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.IComplaintService;

@RestController
@RequestMapping("/approveComplaints")
@CrossOrigin(origins = "http://localhost:3000")
public class ApprovedComplaintController {
	
	@Autowired
	private IComplaintService complaintService;
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateStatus(@PathVariable("id") int id ){
		
		return ResponseEntity.ok(complaintService.updateApprovedStatus(id));
	}
	
	@GetMapping()
	public ResponseEntity<?> getAllApproveComplaints(){
		
		return ResponseEntity.ok(complaintService.getAllApproveComplaints());
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteUserComplaint(@PathVariable("id") int id ){
		
		return ResponseEntity.ok(complaintService.deleteUserComplaint(id));
	}
}
