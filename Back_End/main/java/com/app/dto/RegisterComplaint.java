package com.app.dto;

import javax.persistence.Column;

import com.app.pojos.Complaint;
import com.app.pojos.ComplaintType;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterComplaint {
	
	private Complaint complaint;
	
}
