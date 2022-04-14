package com.app.service.onlineServices;

import java.util.List;

import com.app.dto.onlineServices.BirthRegDto;

public interface IBirthRegService {
	public String  addBirthReg(BirthRegDto birth);

	public List<BirthRegDto> getAllBirthDetails();

	public BirthRegDto getSingleDetails(int id);

	public BirthRegDto setStatus(int id,String status);

	public List<BirthRegDto> getApprovedBirthDetails();

	public List<BirthRegDto> getRejectedBirthDetails();
}
