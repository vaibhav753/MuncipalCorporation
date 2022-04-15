package com.app.dao.onlineServices;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.onlineServices.MarriageLogData;

public interface IMarriageLogRepository extends JpaRepository<MarriageLogData, Integer>{

}
