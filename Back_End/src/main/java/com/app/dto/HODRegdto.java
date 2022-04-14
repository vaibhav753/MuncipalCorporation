package com.app.dto;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;

import com.app.pojos.Gender;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class HODRegdto {

//	private HODREgistration HODReg;
	
	private String email;

	private String firstName;
	
	private String lastName;
	
	
	private String gender;
	
	private long contactNo;
	
	private String address;
	
	
	private String password;
	
	private String role;

}
