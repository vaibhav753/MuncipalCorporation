package com.app.controller;

import java.util.Collection;
import java.util.List;

import javax.servlet.http.HttpSession;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.JwtResponse;
import com.app.dto.UserLogin;
import com.app.jwt_utils.JwtUtil;
//import com.app.jwt_utils.JwtUtils;
import com.app.pojos.User;
import com.app.service.CustomUserDetailsService;
import com.app.service.IComplaintService;
import com.app.service.IUserLogin;

@RestController
@RequestMapping("/userlogin")
@CrossOrigin(origins = "http://localhost:3000")
public class UserLoginController {
		
	@Autowired IUserLogin userLogin;
	
	@Autowired
	private CustomUserDetailsService customUserDetailsService;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@GetMapping
	public ResponseEntity<?> getUserComplaints(HttpSession session){
		return ResponseEntity.ok(session.getAttribute("user"));
	}
	
	@PostMapping
	public ResponseEntity<?> getUser(@RequestBody UserLogin request, HttpSession session) throws Exception
	{
//		User user=userLogin.getUser(request);
//		session.setAttribute("userDetails", user);
		System.out.println(request);
		
		try {
			
			this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
			
			
		} catch (UsernameNotFoundException e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new Exception("Bad Credentials");
		}catch (BadCredentialsException e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new Exception("Bad Credentials");
		}
		
		UserDetails userDetails = this.customUserDetailsService.loadUserByUsername(request.getEmail());
		
		String role = userDetails.getAuthorities().toString();
	
		System.out.println("------------  " +role);
		
		String token = this.jwtUtil.generateToken(userDetails);
		
		System.out.println("JWT " +token );
		
		return new ResponseEntity<>(new JwtResponse(token,role), HttpStatus.OK);
	}
}
