package com.app.dao;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.WaterTax;

public interface WaterPaymentRepository extends JpaRepository<WaterTax, Integer>{
	
	@Query("select w from WaterTax w where w.consumerNo=:consumerNumber order by w.date desc")
	List<WaterTax> findWaterTaxByConsumerNumber(@Param("consumerNumber") int consumerNum);

	@Query("select w from WaterTax w JOIN User u ON u.id = w.consumerNo where u.email=:email")
	List<WaterTax> findWaterTaxByEmail(@Param("email") String email);
	
}
