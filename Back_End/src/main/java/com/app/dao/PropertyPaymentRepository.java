package com.app.dao;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.PropertyTax;

public interface PropertyPaymentRepository extends JpaRepository<PropertyTax, Integer>{

	@Query("select p from PropertyTax p where p.consumerNo=:consumerNumber order by p.year desc")
	List<PropertyTax> findPropertyTaxByConsumerNumber(@Param("consumerNumber") int consumerNum);

//	SELECT d FROM Employee e, Department d WHERE e.department = d
//	SELECT p.firstName, p.lastName, n.phoneNumber FROM Person p JOIN PhoneBookEntry n ON p.firstName = n.firstName AND p.lastName = n.lastName
	@Query("select p from PropertyTax p join User u on p.consumerNo=u.id where u.email=:email")
	List<PropertyTax> findPropertyTaxByEmail(@Param("email") String email);
	
}
