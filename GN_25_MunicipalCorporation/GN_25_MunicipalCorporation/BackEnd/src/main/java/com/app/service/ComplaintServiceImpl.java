package com.app.service;

import java.time.LocalDate;
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
		Complaint comp = new Complaint(request.getFirstName(), request.getLastName(), request.getAddress(), request.getContactNo(), request.getEmail(), request.getComplaintDesc(), request.getComplaintLoc(), request.getMainType(), request.getSubType(), Status.InProcess,LocalDate.parse(request.getRegDate()));
//		Complaint comp = request.getComplaint();
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

	@Override
	public Complaint rejectUserComplaint(int id) {
		
		Complaint comp = compalintRepo.findById(id).orElseThrow(()->new RuntimeException("Invalid Complaint Id"));
		comp.setStatus(Status.Rejected);
		compalintRepo.save(comp);
		return comp;
	}

	@Override
	public List<Object> getRejectedComplaints() {
	List<Object> lst = new ArrayList<Object>();
		
		lst = comListRepo.getAllRejectedComplaints();
		
		return lst;
	}

		@Override
	public Complaint updateApprovedStatus(int id) {
		Complaint comp=compalintRepo.findById(id).orElseThrow(()->new RuntimeException("Invalid Complaint Id"));
		comp.setStatus(Status.Completed);
		compalintRepo.save(comp);
		return comp;
	}

	@Override
	public List<Object> getAllApproveComplaints() {
		List<Object> lst = new ArrayList<Object>();
		
		lst = comListRepo.getAllApproveComplaints();
		
		return lst;
	}

	@Override
	public Complaint revertRejectedComplaint(int id) {
		Complaint comp=compalintRepo.findById(id).orElseThrow(()->new RuntimeException("Invalid Complaint Id"));
		comp.setStatus(Status.InProcess);
		compalintRepo.save(comp);
		return comp;
	}

	@Override
	public Complaint deleteUserComplaint(int id) {
		Complaint comp = compalintRepo.findById(id).orElseThrow(()->new RuntimeException("Invalid Complaint Id"));
		compalintRepo.deleteById(id);
		return comp;
	}

	@Override
	public List<Object> getUserComplaints() {
		
		return compalintRepo.getUserComplaints();
	}

}
