package com.app.dto.onlineServices;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class DeathRegDto {
	private int id;
	private String name;
	private String gender;
	private String dob;
	private String dod;
	private String day;
	private String time;
	private String place;
	private String fatherName;
	private String permanentAddress;
	private String status;
	private String email;

}