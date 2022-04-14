package com.app.dao.onlineServices;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Status;
import com.app.pojos.onlineServices.MarriageRegistration;

public interface IMarriageRegRepository  extends JpaRepository<MarriageRegistration, Integer>{
	@Query( "select m from MarriageRegistration m where m.status=?1")
	List<MarriageRegistration> getByStatus(Status status);

}
