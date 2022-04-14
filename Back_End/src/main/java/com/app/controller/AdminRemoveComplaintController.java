package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddComplaintdto;
import com.app.pojos.ComplaintType;
import com.app.service.IAdminComplaintService;

@RestController
@RequestMapping("/removeComplaint")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})
public class AdminRemoveComplaintController {

	@Autowired
	IAdminComplaintService adminComplaintService;
	
	@GetMapping
	public ResponseEntity<?> getAllComplaints(){
		adminComplaintService.getAllComplaint().forEach((c)->System.out.println(c));
		return ResponseEntity.ok(adminComplaintService.getAllComplaint());
	}
	
	@DeleteMapping("/{id}")
	public ComplaintType deleteSubComplaint(@PathVariable("id") int id){
		try {
			return adminComplaintService.deleteComplaintById(id);
		} catch (RuntimeException e) {
			throw e;
		}
	}
	
	@GetMapping("/main")
	public ResponseEntity<?> getMainComplaintTypes(){
		adminComplaintService.getMainComplaint().forEach((c)->System.out.println(c));
		return ResponseEntity.ok(adminComplaintService.getMainComplaint());
	}
	
	@DeleteMapping("/main/{mainType}")
	public void deleteMainComplaint(@PathVariable("mainType") String mType){
		adminComplaintService.removeMainComplaintType(mType);
	}
	

	
}
