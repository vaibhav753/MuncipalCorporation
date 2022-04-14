package com.app.dao.onlineServices;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.onlineServices.DeathLogData;

public interface IDeathLogRepository extends JpaRepository<DeathLogData, Integer>{

}
