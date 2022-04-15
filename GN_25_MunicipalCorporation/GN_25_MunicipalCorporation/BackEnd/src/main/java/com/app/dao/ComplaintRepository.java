package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Complaint;

public interface ComplaintRepository extends JpaRepository<Complaint, Integer>{
		
	@Query("update Complaint c set c.status = com.app.pojos.Status.Rejected where c.tokenId = ?1")
    Complaint updateComplaintStatus(int id);

	@Query(value = "select c.tokenId,c.mainType,c.subType,c.status from Complaint c")
	List<Object> getUserComplaints();
}
