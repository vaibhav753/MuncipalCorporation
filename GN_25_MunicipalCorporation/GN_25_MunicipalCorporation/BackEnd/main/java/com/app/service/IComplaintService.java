package com.app.service;

import java.util.List;



import com.app.dto.RegisterComplaint;
import com.app.dto.TableComplaint;
import com.app.pojos.Complaint;
import com.app.pojos.ComplaintDetails;

public interface IComplaintService {
		public Complaint addComplaint(RegisterComplaint request);

		public List<String> getMainComplaints();

		public List<String> getSubTypes(String mainComplaint);
		
		public List<Object> getComplaints(); 
		
		public Complaint getComplaintsDetails(int id);
}
