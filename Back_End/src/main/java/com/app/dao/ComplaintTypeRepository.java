package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.ComplaintType;

public interface ComplaintTypeRepository extends JpaRepository<ComplaintType, Integer> {
	
	@Query("select distinct c.mainType from ComplaintType c ")
	List<String> findAllMainType();
	
//	@Query("select DISTINCT(c.mainType) from ComplaintType c")
	
	
	@Query("select c.subType from ComplaintType c where c.mainType=:mainComplaint")
	List<String> findAllSubType(@Param ("mainComplaint")String mainComplaint);
	
	@Modifying
	@Query("delete from ComplaintType c where c.mainType=:mainType")
	void removeMainComplaintType(@Param("mainType") String mType);

//	List<String> getMainComplaints();
}
