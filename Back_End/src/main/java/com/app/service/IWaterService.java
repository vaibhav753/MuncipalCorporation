package com.app.service;

import java.util.List;

import com.app.pojos.WaterTax;

public interface IWaterService {
	
	List<WaterTax> updateWaterTaxStatus(int consumerId);
	List<WaterTax> getWaterPaymentDetails(int consumerNumber);
	List<WaterTax> getCurrentWaterPaymentDetails(String email);

}
