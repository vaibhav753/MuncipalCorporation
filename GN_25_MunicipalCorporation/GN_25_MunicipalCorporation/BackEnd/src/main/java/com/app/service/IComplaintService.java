package com.app.service;

import java.util.List;



import com.app.dto.RegisterComplaint;
import com.app.dto.TableComplaint;
import com.app.pojos.Complaint;
import com.app.pojos.ComplaintDetails;

public interface IComplaintService {
		public Complaint addComplaint(RegisterComplaint request);

		public List<String> getMainComplaints();

		public List<String> getSubTypes(String mainComplaintId);
		
		public List<Object> getComplaints(); 
		
		public Complaint getComplaintsDetails(int id);
		
		public Complaint rejectUserComplaint(int id);
		
		public List<Object> getRejectedComplaints();

		public Complaint updateApprovedStatus(int id);

		public List<Object> getAllApproveComplaints();
		
		public Complaint revertRejectedComplaint(int id);
		
		public Complaint deleteUserComplaint(int id);
		
		public List<Object> getUserComplaints(); 
	
}
