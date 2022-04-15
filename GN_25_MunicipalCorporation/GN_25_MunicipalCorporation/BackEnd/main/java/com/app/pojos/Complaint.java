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
	private String firstName;
	private String lastName;
	private String address;
	@Column(length=10)
	private Long contactNo;
	private String email;
	private String complaintDesc;
	private String complaintLoc;
	private String mainType;
	private String subType;
	@Enumerated(EnumType.STRING)
	private Status status;
	
//	@DateTimeFormat(pattern="yyyy-MM-dd")
//	private LocalDate regDate;
	
//	@OneToOne
//	private ComplaintType complainttype;
	
//	@OneToOne
//	private MainCompaintType mainComplaint;
//	@OneToOne
//	private SubCompaintType subComplaint;
	
	
	
	
	
}
