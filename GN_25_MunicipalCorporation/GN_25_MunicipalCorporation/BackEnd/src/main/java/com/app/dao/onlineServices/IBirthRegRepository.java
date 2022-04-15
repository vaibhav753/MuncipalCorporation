package com.app.dao.onlineServices;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Status;
import com.app.pojos.onlineServices.BirthRegistration;

public interface IBirthRegRepository extends JpaRepository<BirthRegistration, Integer>{

	@Query( "select b from BirthRegistration b where b.status=?1")
	List<BirthRegistration> getByStatus(Status status);

}
