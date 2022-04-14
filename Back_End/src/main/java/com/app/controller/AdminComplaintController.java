package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.ComplaintTypeRepository;
import com.app.dto.AddComplaintdto;
import com.app.service.IAdminComplaintService;

@RestController
@RequestMapping("/addComplaint")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})
public class AdminComplaintController {

	@Autowired
	IAdminComplaintService adminComplaintService;
	
	@Autowired
	private ComplaintTypeRepository complaintRepo;
	
//	@GetMapping
//	public ResponseEntity<?> getAllComplaints(){
//		adminComplaintService.getAllComplaint().forEach((c)->System.out.println(c));
//		return ResponseEntity.ok(adminComplaintService.getAllComplaint());
//	}
	
	@PostMapping
	public ResponseEntity<?> saveComplaint(@RequestBody AddComplaintdto request){
		System.out.println(request.toString());
		return new ResponseEntity<>(adminComplaintService.complaintReg(request), HttpStatus.CREATED);
	}
	
	@GetMapping
	public List<String> getMainComplaint() {
		return complaintRepo.findAllMainType();
	}
	
}
