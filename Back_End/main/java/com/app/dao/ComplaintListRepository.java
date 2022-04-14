package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.dto.TableComplaint;
import com.app.pojos.Complaint;

public interface ComplaintListRepository extends JpaRepository<Complaint, Integer> {

	
	@Query(value = "select c.tokenId,c.mainType,c.subType from Complaint c")
	List<Object> getAllComplaints();
}
