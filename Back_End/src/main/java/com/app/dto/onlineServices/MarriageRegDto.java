package com.app.dto.onlineServices;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@AllArgsConstructor
public class MarriageRegDto {
	private int id;

	private String husbandName;
	
	private String husbandReligion;
	
	private String husbandDob;
	
	private String husbandStatus;
	
	private String husbandAddress;
	
	private String husbandIdProof;
	
	private MultipartFile husbandAttachProof;
	
	private MultipartFile husbandImage;
	
	private String wifeName;
	
	private String wifeReligion;
	
	private String wifeDob;
	
	private String wifeStatus;
	
	private String wifeAddress;
	
	private String wifeIdProof;
	
	private MultipartFile wifeAttachProof;
	
	private MultipartFile wifeImage;

	private String witness1Name;
	
	private String witness1address;
	
	private String witness1IdProof;
	
	private MultipartFile witness1AttachProof;
	
	private String witness2Name;
	
	private String witness2address;
	
	private String witness2IdProof;
	
	private MultipartFile witness2AttachProof;	
	
	private String marriageDate;
	
	private String status;
	
	private String email;

	public MarriageRegDto(String husbandName, String husbandReligion, String husbandDob, String husbandStatus,
			String husbandAddress, String husbandIdProof, MultipartFile husbandAttachProof, MultipartFile husbandImage,
			String wifeName, String wifeReligion, String wifeDob, String wifeStatus, String wifeAddress,
			String wifeIdProof, MultipartFile wifeAttachProof, MultipartFile wifeImage, String witness1Name,
			String witness1address, String witness1IdProof, MultipartFile witness1AttachProof, String witness2Name,
			String witness2address, String witness2IdProof, MultipartFile witness2AttachProof, String marriageDate,
			String status,String email) {
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
		this.email=email;
	}
	
	
	
}