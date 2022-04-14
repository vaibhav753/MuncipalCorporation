package com.app.service;

import java.util.List;

import com.app.dto.AddComplaintdto;
import com.app.pojos.ComplaintType;

public interface IAdminComplaintService {
	
	public ComplaintType complaintReg(AddComplaintdto request);
	public List<ComplaintType> getAllComplaint();
	public ComplaintType deleteComplaintById(int id);
	
	public List<String> getMainComplaint();
	public void removeMainComplaintType(String mType);
	
}
