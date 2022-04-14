package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.ComplaintType;

public interface ComplaintTypeRepository extends JpaRepository<ComplaintType, Integer> {
	
	@Query("select distinct c.mainType from ComplaintType c ")
	List<String> findAllMainType();
	
	
	@Query("select c.subType from ComplaintType c where c.mainType=:mainComplaint")
	List<String> findAllSubType(@Param ("mainComplaint")String mainComplaint);
}
