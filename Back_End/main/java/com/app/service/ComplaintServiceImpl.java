package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ComplaintDetailsRepository;
import com.app.dao.ComplaintListRepository;
import com.app.dao.ComplaintRepository;
import com.app.dao.ComplaintTypeRepository;
import com.app.dto.RegisterComplaint;
import com.app.dto.TableComplaint;
import com.app.pojos.Complaint;
import com.app.pojos.ComplaintDetails;
import com.app.pojos.ComplaintType;
import com.app.pojos.Status;

@Transactional
@Service
public class ComplaintServiceImpl implements IComplaintService {
	@Autowired
	private ComplaintRepository compalintRepo;
	
	@Autowired
	private ComplaintTypeRepository comTypeRepo;
	
	@Autowired
	private ComplaintListRepository comListRepo;

	
	@Override
	public Complaint addComplaint(RegisterComplaint request) {
		Complaint comp = request.getComplaint();
		comp.setStatus(Status.InProcess);
		compalintRepo.save(comp);
		return comp;
	}

	@Override
	public List<String> getMainComplaints() {
	
		return comTypeRepo.findAllMainType() ;
	}



	@Override
	public List<String> getSubTypes(String mainComplaint) {
		
		return comTypeRepo.findAllSubType(mainComplaint);
	}

	@Override
	public List<Object> getComplaints() {
		List<Object> lst = new ArrayList<Object>();
		
		lst = comListRepo.getAllComplaints();
		
		return lst;
	}

	@Override
	public Complaint getComplaintsDetails(int id) {
		
		return compalintRepo.findById(id).orElseThrow(()->new RuntimeException("Invalid Complaint Id"));
	}

}
