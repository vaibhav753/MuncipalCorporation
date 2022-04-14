package com.app.controller;

import java.util.concurrent.Executor;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.HODRegdto;
import com.app.pojos.User;
import com.app.service.IHODService;

@RestController
@RequestMapping("/HODlist")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})
public class HODListController {
	
	@Autowired
	private JavaMailSender mailSender;
	
	@Autowired
	IHODService HODService;
	
	public static int noOfQuickServiceThreads=20;
	private ScheduledExecutorService quickService= Executors.newScheduledThreadPool(noOfQuickServiceThreads);
	
	@GetMapping
	public ResponseEntity<?> getAllHODs(){
		System.out.println("hi");
		HODService.getAllHOD().forEach((h)->System.out.println(h));
		return ResponseEntity.ok(HODService.getAllHOD());
	}
	
	@PostMapping
	public ResponseEntity<?> saveHOD(@RequestBody HODRegdto request){
		System.out.println(request.toString());
		User hod=HODService.regHOD(request);
		
		SimpleMailMessage mail=new SimpleMailMessage();
		mail.setTo(hod.getEmail());
		mail.setSubject("you are regester on munciplecorporation.com successfully");
		mail.setText("hello  "+ hod.getFirstName()+ "  "+hod.getLastName()+"  you resister successfully with id  "+hod.getId());
		
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
		return new ResponseEntity<>(hod,HttpStatus.CREATED);
		
	}
	
	@DeleteMapping("/{id}")
	public User deleteHOD(@PathVariable("id") int id){
		try {
			return HODService.deleteHODById(id);
		} catch (RuntimeException e) {
			throw e;
		}
	}
	
}
