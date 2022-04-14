package com.app.service;

import java.util.List;

import com.app.pojos.PropertyTax;

public interface IPropertyService {
	
	List<PropertyTax> updatePropertyTaxStatus(int consumerId);
	List<PropertyTax> getPropertyPaymentDetails(int consumerNumber);
	List<PropertyTax> getCurrentPropertyPaymentDetails(String email);

}
