package com.app.dao.onlineServices;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Status;
import com.app.pojos.onlineServices.DeathRegistration;

public interface IDeathRegRepository extends JpaRepository<DeathRegistration, Integer>{

	@Query( "select d from DeathRegistration d where d.status=?1")
	List<DeathRegistration> getByStatus(Status status);
	

}
