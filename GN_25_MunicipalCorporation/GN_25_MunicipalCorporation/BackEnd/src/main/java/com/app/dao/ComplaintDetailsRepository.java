package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Complaint;
import com.app.pojos.ComplaintDetails;

public interface ComplaintDetailsRepository extends JpaRepository<Complaint, Integer>{

}
