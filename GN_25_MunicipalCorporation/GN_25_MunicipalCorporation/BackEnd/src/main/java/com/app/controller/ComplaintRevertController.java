package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.IComplaintService;

@RestController
@RequestMapping("/complaintreverted")
@CrossOrigin(origins = "http://localhost:3000")
public class ComplaintRevertController {
	
	@Autowired
	private IComplaintService complaintService;
	
	@PutMapping("/{id}")
	public ResponseEntity<?> revertRejectedComplaint(@PathVariable("id") int id){
		return ResponseEntity.ok(complaintService.revertRejectedComplaint(id));
	}
	

}
