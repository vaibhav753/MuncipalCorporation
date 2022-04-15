package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "complaints")
public class Complaint{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer tokenId;
	@NotBlank(message = "First Name Must be supplied")
	private String firstName;
	@NotBlank(message = "Last Name Must be supplied")
	private String lastName;
	@NotBlank(message = "Address Must be supplied")
	private String address;
	
//	@Column(length = 10)
	@NotNull
//	@Range(min = 10,max=10,message = "Contact No should be 10 digits")
//	@Size(min = 10,max = 10,message = "Contact No should be 10 digits")
//	@Min(10)
//	@Max(10)
	private Long contactNo;
	
	@NotBlank(message = "Email Must be supplied")
	@Email
	private String email;
	
	@NotBlank(message = "Complaint Description Must be supplied")
	private String complaintDesc;
	
	@NotBlank(message = "Complaint Location Must be supplied")
	private String complaintLoc;
	
	@NotBlank(message = "Main Type Must be supplied")
	private String mainType;
	
	@NotBlank(message = "Sub Type Must be supplied")
	private String subType;
	
	@Enumerated(EnumType.STRING)
	private Status status;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private LocalDate regDate;

	public Complaint(@NotBlank(message = "First Name Must be supplied") String firstName,
			@NotBlank(message = "Last Name Must be supplied") String lastName,
			@NotBlank(message = "Address Must be supplied") String address,
			@NotNull  Long contactNo,
			@NotBlank(message = "Email Must be supplied") @Email String email,
			@NotBlank(message = "Complaint Description Must be supplied") String complaintDesc,
			@NotBlank(message = "Complaint Location Must be supplied") String complaintLoc,
			@NotBlank(message = "Main Type Must be supplied") String mainType,
			@NotBlank(message = "Sub Type Must be supplied") String subType, Status status, LocalDate regDate) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.contactNo = contactNo;
		this.email = email;
		this.complaintDesc = complaintDesc;
		this.complaintLoc = complaintLoc;
		this.mainType = mainType;
		this.subType = subType;
		this.status = status;
		this.regDate = regDate;
	}


	
	
	
	
}
