package com.app.dto;

import javax.persistence.Column;

import com.app.pojos.Complaint;
import com.app.pojos.ComplaintType;
import com.app.pojos.Status;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterComplaint {
	
//	private Complaint complaint;
	private String firstName;
	private String lastName;
	private String address;
	private Long contactNo;
	private String email;
	private String complaintDesc;
	private String complaintLoc;
	private String mainType;
	private String subType;
	private Status status;
	private String  regDate;
	
}
