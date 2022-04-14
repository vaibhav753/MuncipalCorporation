package com.app.dao.onlineServices;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.onlineServices.BirthLogData;

public interface IBirthLogRepository extends JpaRepository<BirthLogData, Integer>{

}
