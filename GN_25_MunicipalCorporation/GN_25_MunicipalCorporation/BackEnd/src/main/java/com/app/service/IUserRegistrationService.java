package com.app.service;

import javax.validation.Valid;

import com.app.dto.UserRegistration;
import com.app.pojos.User;

public interface IUserRegistrationService {

	User addUser(UserRegistration request);
	
}
