package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UserRegistration;
import com.app.pojos.User;
import com.app.service.IUserRegistrationService;

@RestController
@RequestMapping("/registration")
@CrossOrigin(origins = "http://localhost:3000")
public class UserRegistrationController {
	@Autowired IUserRegistrationService userService;
	
	@PostMapping
	public ResponseEntity<?> addUser(@RequestBody @Valid UserRegistration request)
	{
		User user=userService.addUser(request);
		return new ResponseEntity<>(user, HttpStatus.CREATED);
		
	}
}
