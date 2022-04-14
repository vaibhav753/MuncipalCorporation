package com.app.service;

import java.util.HashSet;
import java.util.Set;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.dao.UserRepository;
import com.app.dto.UserRegistration;
import com.app.pojos.Gender;
import com.app.pojos.Role;
import com.app.pojos.User;
import com.app.pojos.UserRoles;

@Service
@Transactional
public class UserRegistrationImpl implements IUserRegistrationService {
	
	@Autowired
	private PasswordEncoder encoder;
	
	@Autowired
	private UserRepository userRepo;

	@Override
	public User addUser(UserRegistration request) {
		
		Set<Role> roles = new HashSet<>();
		
		Role rl = new Role();
		rl.setUserRole(UserRoles.ROLE_ADMIN);
		
		roles.add(rl);
		
		User  user=new User(request.getEmail(), request.getFirstName(), request.getLastName(),encoder.encode(request.getPassword()), Gender.valueOf(request.getGender()), request.getContactNo(), request.getAddress(),true,roles);
		
		return userRepo.save(user);
	}

}
