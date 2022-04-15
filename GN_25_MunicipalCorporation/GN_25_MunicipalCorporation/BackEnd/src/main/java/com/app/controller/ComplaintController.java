package com.app.controller;


import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.RegisterComplaint;
import com.app.pojos.Complaint;
import com.app.service.IComplaintService;


@RestController
@RequestMapping("/complaints")
@CrossOrigin(origins = "http://localhost:3000")
public class ComplaintController {
	
	@Autowired
	private JavaMailSender mailSender;
	
	@Autowired
	private IComplaintService complaintService;
	
	public static int noOfQuickServiceThreads = 20;	
	private ScheduledExecutorService quickService = Executors.newScheduledThreadPool(noOfQuickServiceThreads); 
	
	
	@PostMapping
	public ResponseEntity<?> saveComplaint(@RequestBody @Valid  RegisterComplaint request)
	{
		
		System.out.println(request);
		Complaint comp=complaintService.addComplaint(request);
		SimpleMailMessage mail=new SimpleMailMessage();
		mail.setTo(comp.getEmail());
		mail.setSubject("Your Complaint is registered");
		mail.setText("Your Complaint of "+comp.getMainType()+" with "+comp.getSubType()+" is registered with token Id : "+comp.getTokenId());
		
//		mailSender.send(mail);
		quickService.submit(new Runnable() {
			@Override
			public void run() {
				try{
					mailSender.send(mail);
				}catch(Exception e){
					System.out.println(e.getMessage());
//					logger.error("Exception occur while send a mail : ",e);
				}
			}
		});
		
		return new ResponseEntity<>(comp, HttpStatus.CREATED) ;
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
