package com.app.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.UserRepository;
import com.app.dto.UserLogin;
import com.app.pojos.User;

@Service
@Transactional
public class UserLoginServiceImpl implements IUserLogin{
	
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public User getUser(UserLogin request) {
		
		return userRepo.findByEmailAndPassword(request.getEmail(),request.getPassword()).orElseThrow(() -> new RuntimeException("Invalid Credentials!!!!!"));
	}

}
