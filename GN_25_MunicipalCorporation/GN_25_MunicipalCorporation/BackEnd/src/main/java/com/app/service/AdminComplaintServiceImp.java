package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ComplaintTypeRepository;
import com.app.dto.AddComplaintdto;
import com.app.pojos.ComplaintType;


@Service
@Transactional
public class AdminComplaintServiceImp implements IAdminComplaintService {

	@Autowired
	private ComplaintTypeRepository complaintRepo;
	
//	@Autowired
//	private IComplaintRegRepository complaintRegRepo;
	
	@Override
	public ComplaintType complaintReg(AddComplaintdto request) {
		ComplaintType complaint=new ComplaintType(request.getMainType(), request.getSubType());
		complaintRepo.save(complaint);
		return complaint;
	}

	@Override
	public List<ComplaintType> getAllComplaint() {
		return complaintRepo.findAll();
//		return complaintListRepo.getAllComplaints();
	}

	@Override
	public ComplaintType deleteComplaintById(int id) {
		ComplaintType ct = complaintRepo.findById(id).orElseThrow(()->new RuntimeException("Invalid Complaint Id"));
		complaintRepo.deleteById(id);
		return ct;
	}

	@Override
	public List<String> getMainComplaint() {
		return complaintRepo.findAllMainType();
	}

	@Override
	public void removeMainComplaintType(String mType) {
		complaintRepo.removeMainComplaintType(mType);
	}
	
	

}
