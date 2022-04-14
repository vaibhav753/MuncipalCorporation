package com.app.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.app.dao.UserRepository;
import com.app.dto.HODRegdto;
import com.app.pojos.Gender;
import com.app.pojos.Role;
import com.app.pojos.User;
//import com.app.custom_exceptions.*;
import com.app.pojos.UserRoles;

@Service
@Transactional
public class HODServiceImp implements IHODService {

//	@Autowired
//	private U  HODlistRepo;
	
	@Autowired
	private PasswordEncoder encoder;
	
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public User regHOD(HODRegdto request) {
		

		Set<Role> roles = new HashSet<>();
		System.out.println(request.toString());
		Role rl = new Role();

		if(request.getRole().equals("ROLE_HODCOMPLAINTS"))
			rl.setUserRole(UserRoles.ROLE_HODCOMPLAINTS);
		else
			rl.setUserRole(UserRoles.ROLE_HODSERVICES);
//		rl.setUserRole(UserRoles.valueOf(request.getRole().toUpperCase()));
		
		roles.add(rl);
		
		User  user=new User(request.getEmail(), request.getFirstName(), request.getLastName(),encoder.encode(request.getPassword()), Gender.valueOf(request.getGender().toUpperCase()), request.getContactNo(), request.getAddress(),true,roles);
		
		return userRepo.save(user);
	}

	@Override
	public List<Object> getAllHOD() {
		return userRepo.getAllHOD();
	}


	@Override
	public User deleteHODById(int id) {
		User hod = userRepo.findById(id).orElseThrow(()->new RuntimeException("Invalid Complaint Id"));
		userRepo.deleteById(id);
		return hod;
	}

	
}
