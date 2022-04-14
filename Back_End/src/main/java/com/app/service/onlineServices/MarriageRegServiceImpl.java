package com.app.service.onlineServices;

import static com.app.utils.MarriageCertificate.generateCertificate;

import java.io.IOException;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.List;

import javax.sql.rowset.serial.SerialException;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.UserRepository;
import com.app.dao.onlineServices.IMarriageLogRepository;
import com.app.dao.onlineServices.IMarriageRegRepository;
import com.app.dto.onlineServices.MarriageRegDto;
import com.app.pojos.Status;
import com.app.pojos.User;
import com.app.pojos.onlineServices.IDProof;
import com.app.pojos.onlineServices.MaritalStatus;
import com.app.pojos.onlineServices.MarriageLogData;
import com.app.pojos.onlineServices.MarriageRegistration;
import com.app.utils.MailTesting;
@Transactional
@Service
public class MarriageRegServiceImpl implements IMarriageRegService {

	@Autowired
	private IMarriageRegRepository marriageRegRepo;
	
	@Autowired
	private IMarriageLogRepository marriageLogRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	MailTesting mail= new MailTesting();
	
	@Override
	public String addMarriageReg(MarriageRegDto m) throws SerialException, SQLException, IOException {
		User user= userRepo.findByEmail(m.getEmail()).orElseThrow(()->new RuntimeException("No user with this id exists"));
		MarriageRegistration marriage = new MarriageRegistration(m.getHusbandName(), m.getHusbandReligion(),
				LocalDate.parse(m.getHusbandDob()), MaritalStatus.valueOf(m.getHusbandStatus().toUpperCase()),
				m.getHusbandAddress(), IDProof.valueOf(m.getHusbandIdProof().toUpperCase()),
				m.getHusbandAttachProof().getBytes(), m.getHusbandImage().getBytes(), m.getWifeName(),
				m.getWifeReligion(), LocalDate.parse(m.getWifeDob()),
				MaritalStatus.valueOf(m.getWifeStatus().toUpperCase()), m.getWifeAddress(),
				IDProof.valueOf(m.getWifeIdProof().toUpperCase()), m.getWifeAttachProof().getBytes(),
				m.getWifeImage().getBytes(), m.getWitness1Name(), m.getWitness1address(),
				IDProof.valueOf(m.getWitness1IdProof().toUpperCase()), m.getWitness1AttachProof().getBytes(),
				m.getWitness2Name(), m.getWitness2address(), IDProof.valueOf(m.getWitness2IdProof().toUpperCase()),
				m.getWitness2AttachProof().getBytes(), LocalDate.parse(m.getMarriageDate()), Status.InProcess,
				LocalDate.now(),user);

		MarriageRegistration m1 = marriageRegRepo.save(marriage);

		return "Marriage registration with Id:" + m1.getId() + " created successfully";
	}

	@Override
	public List<MarriageRegistration> getAllMarriageDetails() {
		List<MarriageRegistration> mList = marriageRegRepo.getByStatus(Status.valueOf("InProcess"));

		return mList;
	}

	@Override
	public List<MarriageRegistration> getApprovedMarriageDetails() {
		List<MarriageRegistration> mList = marriageRegRepo.getByStatus(Status.valueOf("Completed"));
		return mList;
	}

	@Override
	public List<MarriageRegistration> getRejectedMarriageDetails() {
		List<MarriageRegistration> mList = marriageRegRepo.getByStatus(Status.valueOf("Rejected"));
		return mList;
	}

	@Override
	public MarriageRegistration getSingleDetails(int id) {
		MarriageRegistration m = marriageRegRepo.getById(id);

		return m;
	}

	@Override
	public MarriageRegistration setStatus(int id, String status) {
		MarriageRegistration m = marriageRegRepo.getById(id);
		m.setStatus(Status.valueOf(status));
		if(m.getStatus()==Status.Completed) {
			m.setDateOfIssue(LocalDate.now());
			m.setMCertificate(generateCertificate(m));
			MarriageLogData marriageLog= new MarriageLogData(m.getId(),m.getMCertificate());
			marriageLogRepo.save(marriageLog);
			
			mail.sendMail(m);
		}
		else if(m.getStatus()== Status.Rejected) {
			mail.sendRejectedMail(m);
		}
		MarriageRegistration m1 = marriageRegRepo.save(m);
		return m1;
	}

}
