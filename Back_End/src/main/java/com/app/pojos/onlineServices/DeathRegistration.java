package com.app.pojos.onlineServices;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.Proxy;
import org.springframework.format.annotation.DateTimeFormat;

import com.app.pojos.BaseEntity;
import com.app.pojos.Gender;
import com.app.pojos.Status;
import com.app.pojos.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Proxy(lazy = false)
@Table(name = "death_registrations")
public class DeathRegistration extends BaseEntity {

	@Column(length = 30)
	@NotBlank(message = "Name must be supplied!")
	private String name;

	@Enumerated(EnumType.STRING)
	@Column(length = 10)
	private Gender gender;

	@NotNull(message = "Date of Birth must be supplied!")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dob;

	@NotNull(message = "Date of Death must be supplied!")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dod;

	@Enumerated(EnumType.STRING)
	@Column(length = 10)
	private DayOfWeek day;

	@DateTimeFormat(pattern = "HH:mm:ss")
	private LocalTime time;

	@Column(length = 20)
	@NotBlank(message = "Place of Death must be supplied!")
	private String place;

	@Column(length = 20, name = "father_name")
	private String fatherName;

	@Column(length = 50, name = "permanent_address")
	private String permanentAddress;

	@Column(length = 10)
	@Enumerated(EnumType.STRING)
	private Status status;

	@Lob
	@Column(name="death_certificate")
	private byte[] dCertificate;

	@Column(name="registration_date")
	private LocalDate registrationDate;
	
	@Column(name="date_of_issue")
	private LocalDate dateOfIssue;

	@ManyToOne 
	@JoinColumn(name="user_id")
	private User user;
	public DeathRegistration(@NotBlank(message = "Name must be supplied!") String name, Gender gender,
			@NotNull(message = "Date of Birth must be supplied!") LocalDate dob,
			@NotNull(message = "Date of Death must be supplied!") LocalDate dod, DayOfWeek day, LocalTime time,
			@NotBlank(message = "Place of Death must be supplied!") String place, String fatherName,
			String permanentAddress, Status status, LocalDate registrationDate,User user) {
		super();
		this.name = name;
		this.gender = gender;
		this.dob = dob;
		this.dod = dod;
		this.day = day;
		this.time = time;
		this.place = place;
		this.fatherName = fatherName;
		this.permanentAddress = permanentAddress;
		this.status = status;
		this.registrationDate = registrationDate;
		this.user=user;
	}

	

}
