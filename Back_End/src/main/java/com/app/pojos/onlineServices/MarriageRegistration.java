package com.app.pojos.onlineServices;

import java.time.LocalDate;

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
import com.app.pojos.Status;
import com.app.pojos.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Proxy(lazy = false)
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "marriage_registrations")
public class MarriageRegistration extends BaseEntity {

	@Column(length = 30, name = "husband_name")
	@NotBlank(message = "Husband's Name is required!")
	private String husbandName;

	@Column(length = 20, name = "husband_religion")
	private String husbandReligion;

	// @NotBlank(message = "Husband's Date of Birth is required!")
	@Column(name = "husband_dob")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate husbandDob;

	@Column(name = "husband_status")
	private MaritalStatus husbandStatus;

	@Column(name = "husband_address")
	private String husbandAddress;

	@Column(name = "husband_id_proof", length = 10)
	@NotNull(message = "Husband's Id is required!")
	@Enumerated(EnumType.STRING)
	private IDProof husbandIdProof;

	@Column(name = "husband_attach_proof")
	@Lob
	private byte[] husbandAttachProof;

	@Column(name = "husband_Image")
	@Lob
	private byte[] husbandImage;

	@Column(length = 30, name = "wife_name")
	@NotBlank(message = "Wife's Name is required!")
	private String wifeName;

	@Column(length = 20, name = "wife_religion")
	private String wifeReligion;

	// @NotBlank(message = "Wife's Date of Birth is required!")
	@Column(name = "wife_dob")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate wifeDob;

	@Column(name = "wife_status")
	private MaritalStatus wifeStatus;

	@Column(length = 30, name = "wife_address")
	private String wifeAddress;

	@NotNull(message = "Wife's Id is required!")
	@Column(name = "wife_id_proof", length = 10)
	@Enumerated(EnumType.STRING)
	private IDProof wifeIdProof;

	@Column(name = "wife_attach_proof")
	@Lob
	private byte[] wifeAttachProof;

	@Column(name = "wife_image")
	@Lob
	private byte[] wifeImage;

	@Column(length = 30, name = "witness1_name")
	@NotBlank(message = "Witness 1's Name is required!")
	private String witness1Name;

	@Column(length = 30, name = "witness1_address")
	private String witness1address;

	@Column(name = "witness1_id_proof", length = 10)
	@NotNull(message = "Witness 1's Id is required!")
	@Enumerated(EnumType.STRING)
	private IDProof witness1IdProof;

	@Column(name = "witness1_attach_proof")
	@Lob
	private byte[] witness1AttachProof;

	@Column(length = 30, name = "witness2_name")
	@NotBlank(message = "Witness 2's Name is required!")
	private String witness2Name;

	@Column(length = 30, name = "witness2_address")
	private String witness2address;

	@Column(name = "witness2_id_proof", length = 10)
	@NotNull(message = "Witness 2's Id is required!")
	@Enumerated(EnumType.STRING)
	private IDProof witness2IdProof;

	@Column(name = "witness2_attach_proof")
	@Lob
	private byte[] witness2AttachProof;

	@Column(name = "marriage_date")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate marriageDate;

	@Column(length = 10)
	@Enumerated(EnumType.STRING)
	private Status status;

	@Lob
	@Column(name = "marriage_certificate")
	private byte[] mCertificate;

	@Column(name = "registration_date")
	private LocalDate registrationDate;

	@Column(name = "date_of_issue")
	private LocalDate dateOfIssue;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	public MarriageRegistration(String husbandName, String husbandReligion, LocalDate husbandDob,
			MaritalStatus husbandStatus, String husbandAddress, IDProof husbandIdProof, byte[] husbandAttachProof,
			byte[] husbandImage, String wifeName, String wifeReligion, LocalDate wifeDob, MaritalStatus wifeStatus,
			String wifeAddress, IDProof wifeIdProof, byte[] wifeAttachProof, byte[] wifeImage, String witness1Name,
			String witness1address, IDProof witness1IdProof, byte[] witness1AttachProof, String witness2Name,
			String witness2address, IDProof witness2IdProof, byte[] witness2AttachProof, LocalDate marriageDate,
			Status status, LocalDate registrationDate, User user) {
		super();
		this.husbandName = husbandName;
		this.husbandReligion = husbandReligion;
		this.husbandDob = husbandDob;
		this.husbandStatus = husbandStatus;
		this.husbandAddress = husbandAddress;
		this.husbandIdProof = husbandIdProof;
		this.husbandAttachProof = husbandAttachProof;
		this.husbandImage = husbandImage;
		this.wifeName = wifeName;
		this.wifeReligion = wifeReligion;
		this.wifeDob = wifeDob;
		this.wifeStatus = wifeStatus;
		this.wifeAddress = wifeAddress;
		this.wifeIdProof = wifeIdProof;
		this.wifeAttachProof = wifeAttachProof;
		this.wifeImage = wifeImage;
		this.witness1Name = witness1Name;
		this.witness1address = witness1address;
		this.witness1IdProof = witness1IdProof;
		this.witness1AttachProof = witness1AttachProof;
		this.witness2Name = witness2Name;
		this.witness2address = witness2address;
		this.witness2IdProof = witness2IdProof;
		this.witness2AttachProof = witness2AttachProof;
		this.marriageDate = marriageDate;
		this.status = status;
		this.registrationDate = registrationDate;
		this.user = user;
	}

}
