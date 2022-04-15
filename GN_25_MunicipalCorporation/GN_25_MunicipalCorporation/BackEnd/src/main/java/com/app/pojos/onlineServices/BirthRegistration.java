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
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.pojos.BaseEntity;
import com.app.pojos.User;
import com.app.pojos.Gender;
import com.app.pojos.Status;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "birth_registrations", uniqueConstraints = { @UniqueConstraint(columnNames = { "user_id", "name" }) })

public class BirthRegistration extends BaseEntity {

	@Column(length = 30)
	@NotBlank(message = "Name must be supplied!")
	private String name;

	@Enumerated(EnumType.STRING)
	private Gender gender;

	@NotNull(message = "Date of Birth must be supplied!")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dob;

	@Enumerated(EnumType.STRING)
	private DayOfWeek day;

	@Column(name = "birth_time")
	@DateTimeFormat(pattern = "HH:mm")
	private LocalTime birthTime;

	@Column(length = 20, name = "father_name")
	private String fatherName;

	@Column(length = 20, name = "mother_name")
	private String motherName;

	@Column(length = 50)
	@NotBlank(message = "Address of Birth must be supplied!")
	private String address;

	@Column(length = 10)
	@Enumerated(EnumType.STRING)
	private Status status;

	@Lob
	@Column(name = "birth_certificate")
	private byte[] bCertificate;

	@Column(name = "registration_date")
	private LocalDate registrationDate;

	@Column(name = "date_of_issue")
	private LocalDate dateOfIssue;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	public BirthRegistration(String name, Gender gender, LocalDate dob, DayOfWeek day, LocalTime birthTime,
			String fatherName, String motherName, String address, Status status, LocalDate registrationDate,
			User user) {
		super();
		this.name = name;
		this.gender = gender;
		this.dob = dob;
		this.day = day;
		this.birthTime = birthTime;
		this.fatherName = fatherName;
		this.motherName = motherName;
		this.address = address;
		this.status = status;
		this.registrationDate = registrationDate;
		this.user = user;
	}

}
