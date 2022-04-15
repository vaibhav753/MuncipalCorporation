package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojos.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

	Optional<User> findByEmailAndPassword(String email, String password);
	
	Optional<User> findByEmail(String email);
	
//	@Query("select h.id, h.email, h.firstName, h.lastName from User h where h.roles =com.app.pojos.UserRoles.ROLE_HODCOMPLAINTS,com.app.pojos.UserRoles.ROLE_HODSERVICES")
	@Query("select u.id, u.email, u.firstName, u.lastName from User u join Role r on u.id=r.id where r.userRole in (com.app.pojos.UserRoles.ROLE_HODCOMPLAINTS, com.app.pojos.UserRoles.ROLE_HODSERVICES)")
	List<Object> getAllHOD();

}
