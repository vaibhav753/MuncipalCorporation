package com.app.dto;

import com.app.pojos.Gender;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserRegistration {
	
	private String email;
	private String firstName;
	private String lastName;
	private String password;
	private String gender;
	private long contactNo;
	private String address;

}
