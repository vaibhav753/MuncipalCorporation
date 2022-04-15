package com.app.service.onlineServices;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import javax.sql.rowset.serial.SerialException;

import com.app.dto.onlineServices.MarriageRegDto;
import com.app.pojos.onlineServices.MarriageRegistration;

public interface IMarriageRegService {

	public String addMarriageReg(MarriageRegDto m)
			throws SerialException, SQLException, IOException;

	public List<MarriageRegistration> getAllMarriageDetails();

	public MarriageRegistration getSingleDetails(int id);

	public MarriageRegistration setStatus(int id,String status);

	public List<MarriageRegistration> getApprovedMarriageDetails();

	public List<MarriageRegistration> getRejectedMarriageDetails();
}
