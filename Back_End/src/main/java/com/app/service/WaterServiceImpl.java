package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.WaterPaymentRepository;
import com.app.pojos.PaymentStatus;
import com.app.pojos.WaterTax;

@Service
@Transactional
public class WaterServiceImpl implements IWaterService {
	
	@Autowired
	private WaterPaymentRepository waterRepo;

	@Override
	public List<WaterTax> updateWaterTaxStatus(int consumerNumber) {
		System.out.println("hi");
		List<WaterTax> waterTax = waterRepo.findWaterTaxByConsumerNumber(consumerNumber);
		waterTax.stream()
		.forEach((w) -> w.setStatus(PaymentStatus.PAID));
		return waterRepo.saveAll(waterTax);
	}

	@Override
	public List<WaterTax> getWaterPaymentDetails(int consumerNumber) {
		return waterRepo.findWaterTaxByConsumerNumber(consumerNumber);
	}

	@Override
	public List<WaterTax> getCurrentWaterPaymentDetails(String email) {
		return waterRepo.findWaterTaxByEmail(email);
	}

}
