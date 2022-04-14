package com.app.service;

import java.util.List;

import com.app.dto.HODRegdto;

import com.app.pojos.User;

public interface IHODService {
	
	public User regHOD(HODRegdto request);

	public List<Object> getAllHOD();
	public User deleteHODById(int id);
	
	


}
