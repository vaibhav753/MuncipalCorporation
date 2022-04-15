package com.app.service.onlineServices;

import static com.app.utils.BirthCertificate.generateCertificate;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.UserRepository;
import com.app.dao.onlineServices.IBirthLogRepository;
import com.app.dao.onlineServices.IBirthRegRepository;
import com.app.dto.onlineServices.BirthRegDto;
import com.app.pojos.Gender;
import com.app.pojos.Status;
import com.app.pojos.User;
import com.app.pojos.onlineServices.BirthLogData;
import com.app.pojos.onlineServices.BirthRegistration;
import com.app.utils.MailTesting;

@Transactional
@Service
public class BirthRegServiceImpl implements IBirthRegService {

	@Autowired
	private IBirthRegRepository birthRegRepo;

	@Autowired
	private IBirthLogRepository birthLogRepo;

	@Autowired
	private UserRepository userRepo;

	MailTesting mail = new MailTesting();

	@Override
	public String addBirthReg(BirthRegDto request) {
		User user = userRepo.findByEmail(request.getEmail())
				.orElseThrow(() -> new RuntimeException("No user with this email id Exists"));
		BirthRegistration birth = new BirthRegistration(request.getName(),
				Gender.valueOf(request.getGender().toUpperCase()), LocalDate.parse(request.getDob()),
				DayOfWeek.valueOf(request.getDay().toUpperCase()), LocalTime.parse(request.getBirthTime()),
				request.getFatherName(), request.getMotherName(), request.getAddress(), Status.valueOf("InProcess"),
				LocalDate.now(), user);

		// birth.setUser(user);
		BirthRegistration birthReg = birthRegRepo.save(birth);

		System.out.println(birthReg);
		return "Birth registration with Id:" + birth.getId() + " created successfully";
	}

	@Override
	public List<BirthRegDto> getAllBirthDetails() {
		List<BirthRegistration> bList = birthRegRepo.getByStatus(Status.valueOf("InProcess"));
		List<BirthRegDto> bDtoList = new ArrayList<BirthRegDto>();
		for (BirthRegistration b : bList) {
			bDtoList.add(new BirthRegDto(b.getId(), b.getName(), b.getGender().toString(), b.getDob().toString(),
					b.getDay().toString(), b.getBirthTime().toString(), b.getFatherName(), b.getMotherName(),
					b.getAddress(), b.getStatus().toString(), b.getUser().getEmail()));
		}
		return bDtoList;
	}

	@Override
	public List<BirthRegDto> getApprovedBirthDetails() {
		List<BirthRegistration> bList = birthRegRepo.getByStatus(Status.valueOf("Completed"));
		List<BirthRegDto> bDtoList = new ArrayList<BirthRegDto>();
		for (BirthRegistration b : bList) {
			bDtoList.add(new BirthRegDto(b.getId(), b.getName(), b.getGender().toString(), b.getDob().toString(),
					b.getDay().toString(), b.getBirthTime().toString(), b.getFatherName(), b.getMotherName(),
					b.getAddress(), b.getStatus().toString(), b.getUser().getEmail()));
		}
		return bDtoList;
	}

	@Override
	public List<BirthRegDto> getRejectedBirthDetails() {
		List<BirthRegistration> bList = birthRegRepo.getByStatus(Status.valueOf("Rejected"));
		List<BirthRegDto> bDtoList = new ArrayList<BirthRegDto>();
		for (BirthRegistration b : bList) {
			bDtoList.add(new BirthRegDto(b.getId(), b.getName(), b.getGender().toString(), b.getDob().toString(),
					b.getDay().toString(), b.getBirthTime().toString(), b.getFatherName(), b.getMotherName(),
					b.getAddress(), b.getStatus().toString(), b.getUser().getEmail()));
		}
		return bDtoList;
	}

	@Override
	public BirthRegDto getSingleDetails(int id) {
		BirthRegistration b = birthRegRepo.getById(id);

		return new BirthRegDto(b.getId(), b.getName(), b.getGender().toString(), b.getDob().toString(),
				b.getDay().toString(), b.getBirthTime().toString(), b.getFatherName(), b.getMotherName(),
				b.getAddress(), b.getStatus().toString(), b.getUser().getEmail());
	}

	@Override
	public BirthRegDto setStatus(int id, String status) {
		BirthRegistration b = birthRegRepo.getById(id);

		b.setStatus(Status.valueOf(status));
		if (b.getStatus() == Status.Completed) {
			b.setBCertificate(generateCertificate(b));
			b.setDateOfIssue(LocalDate.now());
			BirthLogData birthLog = new BirthLogData(b.getId(), b.getBCertificate());
			birthLogRepo.save(birthLog);
			
			mail.sendMail(b);

		} else if (b.getStatus() == Status.Rejected) {
			mail.sendRejectedMail(b);
		}
		birthRegRepo.save(b);

		return new BirthRegDto(b.getId(), b.getName(), b.getGender().toString(), b.getDob().toString(),
				b.getDay().toString(), b.getBirthTime().toString(), b.getFatherName(), b.getMotherName(),
				b.getAddress(), b.getStatus().toString(), b.getUser().getEmail());
	}

}
