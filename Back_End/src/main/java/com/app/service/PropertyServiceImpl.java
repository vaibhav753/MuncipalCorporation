package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.PropertyPaymentRepository;
import com.app.pojos.PaymentStatus;
import com.app.pojos.PropertyTax;

@Service
@Transactional
public class PropertyServiceImpl implements IPropertyService {
	
	@Autowired
	private PropertyPaymentRepository propertyRepo;

	@Override
	public List<PropertyTax> updatePropertyTaxStatus(int consumerNo) {
		List<PropertyTax> propertyTax = propertyRepo.findPropertyTaxByConsumerNumber(consumerNo);
		propertyTax.stream()
		.forEach((p) -> p.setStatus(PaymentStatus.PAID));
		return propertyRepo.saveAll(propertyTax);
	}

	@Override
	public List<PropertyTax> getPropertyPaymentDetails(int consumerNumber) {
		return propertyRepo.findPropertyTaxByConsumerNumber(consumerNumber);
	}

	@Override
	public List<PropertyTax> getCurrentPropertyPaymentDetails(String email) {
		return propertyRepo.findPropertyTaxByEmail(email);
	}


}
