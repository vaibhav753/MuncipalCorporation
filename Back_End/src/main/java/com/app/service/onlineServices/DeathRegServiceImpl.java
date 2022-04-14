package com.app.service.onlineServices;

import static com.app.utils.DeathCertificate.generateCertificate;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.UserRepository;
import com.app.dao.onlineServices.IDeathLogRepository;
import com.app.dao.onlineServices.IDeathRegRepository;
import com.app.dto.onlineServices.DeathRegDto;
import com.app.pojos.Gender;
import com.app.pojos.Status;
import com.app.pojos.User;
import com.app.pojos.onlineServices.DeathLogData;
import com.app.pojos.onlineServices.DeathRegistration;
import com.app.utils.MailTesting;
@Transactional
@Service
public class DeathRegServiceImpl implements IDeathRegService {
	@Autowired
	private IDeathRegRepository deathRegRepo;
	@Autowired
	private IDeathLogRepository deathLogRepo;

	@Autowired
	private UserRepository userRepo;
	MailTesting mail= new MailTesting();
	@Override
	public String addDeathReg(DeathRegDto request) {
		User user= userRepo.findByEmail(request.getEmail()).orElseThrow(()->new RuntimeException("No user with this id exists"));
		DeathRegistration death = new DeathRegistration(request.getName(),
				Gender.valueOf(request.getGender().toUpperCase()), LocalDate.parse(request.getDob()),
				LocalDate.parse(request.getDod()), DayOfWeek.valueOf(request.getDay().toUpperCase()),
				LocalTime.parse(request.getTime()), request.getPlace(), request.getFatherName(),
				request.getPermanentAddress(), Status.valueOf("InProcess"),LocalDate.now(),user);
		DeathRegistration death1 = deathRegRepo.save(death);
		return "Death registration with Id:" + death1.getId() + " created successfully";
	}

	@Override
	public List<DeathRegDto> getAllDeathDetails() {
		List<DeathRegistration> dList = deathRegRepo.getByStatus(Status.valueOf("InProcess"));
		List<DeathRegDto> dDtoList = new ArrayList<DeathRegDto>();
		for (DeathRegistration d : dList) {
			dDtoList.add(new DeathRegDto(d.getId(), d.getName(), d.getGender().toString(), d.getDob().toString(),
					d.getDod().toString(), d.getDay().toString(), d.getTime().toString(), d.getPlace(),
					d.getFatherName(), d.getPermanentAddress(), d.getStatus().toString(),d.getUser().getEmail()));
		}
		return dDtoList;
	}

	@Override
	public DeathRegDto getSingleDetails(int id) {
		DeathRegistration d = deathRegRepo.getById(id);
		return new DeathRegDto(d.getId(), d.getName(), d.getGender().toString(), d.getDob().toString(),
				d.getDod().toString(), d.getDay().toString(), d.getTime().toString(), d.getPlace(), d.getFatherName(),
				d.getPermanentAddress(), d.getStatus().toString(),d.getUser().getEmail());
	}

	@Override
	public DeathRegDto setStatus(int id, String status) {
		DeathRegistration d = deathRegRepo.getById(id);
		d.setStatus(Status.valueOf(status));
		if(d.getStatus()==Status.Completed) {
			d.setDateOfIssue(LocalDate.now());
			d.setDCertificate(generateCertificate(d));
			DeathLogData deathLog= new DeathLogData(d.getId(),d.getDCertificate());
			deathLogRepo.save(deathLog);
			mail.sendMail(d);
		}
		else if(d.getStatus()== Status.Rejected) {
			mail.sendRejectedMail(d);
		}
		deathRegRepo.save(d);
		return new DeathRegDto(d.getId(), d.getName(), d.getGender().toString(), d.getDob().toString(),
				d.getDod().toString(), d.getDay().toString(), d.getTime().toString(), d.getPlace(), d.getFatherName(),
				d.getPermanentAddress(), d.getStatus().toString(),d.getUser().getEmail());
	}

	@Override
	public List<DeathRegDto> getApprovedDeathDetails() {
		List<DeathRegistration> dList = deathRegRepo.getByStatus(Status.valueOf("Completed"));
		List<DeathRegDto> dDtoList = new ArrayList<DeathRegDto>();
		for (DeathRegistration d : dList) {
			dDtoList.add(new DeathRegDto(d.getId(), d.getName(), d.getGender().toString(), d.getDob().toString(),
					d.getDod().toString(), d.getDay().toString(), d.getTime().toString(), d.getPlace(), d.getFatherName(),
					d.getPermanentAddress(), d.getStatus().toString(),d.getUser().getEmail()));
		}
		return dDtoList;
	}

	@Override
	public List<DeathRegDto> getRejectedDeathDetails() {
		List<DeathRegistration> dList = deathRegRepo.getByStatus(Status.valueOf("Rejected"));
		List<DeathRegDto> dDtoList = new ArrayList<DeathRegDto>();
		for (DeathRegistration d : dList) {
			dDtoList.add(new DeathRegDto(d.getId(), d.getName(), d.getGender().toString(), d.getDob().toString(),
					d.getDod().toString(), d.getDay().toString(), d.getTime().toString(), d.getPlace(), d.getFatherName(),
					d.getPermanentAddress(), d.getStatus().toString(),d.getUser().getEmail()));
		}
		return dDtoList;
	}

}
