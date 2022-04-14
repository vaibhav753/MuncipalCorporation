package com.app.controller.onlineServices;


import java.io.IOException;
import java.sql.SQLException;

import javax.sql.rowset.serial.SerialException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.onlineServices.MarriageRegDto;
import com.app.pojos.Status;
import com.app.service.onlineServices.IMarriageRegService;


@RestController
@RequestMapping("/marriageRegistration")
@CrossOrigin(origins = "http://localhost:3000")
public class MarriageRegistrationController {
	
	@Autowired
	private IMarriageRegService marriageRegService;
	
	@PostMapping
	public ResponseEntity<?> saveRegistration(@RequestParam String hName,@RequestParam String hReligion,@RequestParam String hDOB,
			@RequestParam String hStatus,@RequestParam String hAddress,@RequestParam String hIdProof,
			@RequestParam/*("husbondImages")*/ MultipartFile hImage,
			@RequestParam/*("hProofFile")*/ MultipartFile hProofFile,
			@RequestParam String wName,@RequestParam String wReligion,@RequestParam String wDOB,
			@RequestParam String wStatus,@RequestParam String wAddress,@RequestParam String wIdProof,
			@RequestParam/*("wifeImages")*/ MultipartFile wImage,
			@RequestParam/*("wProofFile")*/ MultipartFile wProofFile,
			@RequestParam String w1Name,@RequestParam String w1Address,
			@RequestParam String w1IdProof,
			@RequestParam/*("w1ProofFile")*/ MultipartFile w1ProofFile,
			@RequestParam String w2Name,@RequestParam String w2Address,
			@RequestParam String w2IdProof,
			@RequestParam/*("w2ProofFile")*/ MultipartFile w2ProofFile,
			@RequestParam String dom,@RequestParam String email
		
			) throws SerialException, SQLException, IOException
	{
		
		//System.out.println(husbondImages.getOriginalFilename());
		MarriageRegDto m=new MarriageRegDto(hName,hReligion,hDOB,hStatus,hAddress,hIdProof,hProofFile,hImage,
				wName,wReligion,wDOB,wStatus,wAddress,wIdProof,wProofFile,wImage,
				w1Name,w1Address,w1IdProof,w1ProofFile,
				w2Name,w2Address,w2IdProof,w2ProofFile,dom,Status.InProcess.toString(),email);
		return new ResponseEntity<>(marriageRegService.addMarriageReg(m), HttpStatus.CREATED) ;
	}
	
	@GetMapping("/uvlist")
	public ResponseEntity<?> getUnverifedMarriageRegistrationDetails(){
		return new ResponseEntity<>(marriageRegService.getAllMarriageDetails(),HttpStatus.OK);
	}
	@GetMapping("/marriageDetails/{id}")
	public ResponseEntity<?> getMarriageDetails(@PathVariable("id")int id){
		System.out.println("id"+id);
		return new ResponseEntity<>(marriageRegService.getSingleDetails(id),HttpStatus.OK);
	}
	@PutMapping("/uvlist/{id}/{status}")
	public ResponseEntity<?> updateStatus(@PathVariable("id")int id,@PathVariable("status") String status){
		return new ResponseEntity<>(marriageRegService.setStatus(id,status),HttpStatus.OK);
	}
	@GetMapping("/vlist")
	public ResponseEntity<?> getApprovedMarriageRegistrationDetails(){
		return new ResponseEntity<>(marriageRegService.getApprovedMarriageDetails(),HttpStatus.OK);
	}
	@GetMapping("/rejectedlist")
	public ResponseEntity<?> getRejectedMarriageRegistrationDetails(){
		return new ResponseEntity<>(marriageRegService.getRejectedMarriageDetails(),HttpStatus.OK);
	}
	
	
}
