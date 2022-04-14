package com.app.service.onlineServices;

import java.util.List;

import com.app.dto.onlineServices.DeathRegDto;

public interface IDeathRegService {
	public String  addDeathReg(DeathRegDto request);

	public List<DeathRegDto> getAllDeathDetails();

	public DeathRegDto getSingleDetails(int id);

	public DeathRegDto setStatus(int id, String status);

	public List<DeathRegDto> getApprovedDeathDetails();

	public List<DeathRegDto> getRejectedDeathDetails();
	
	
}
