package com.app.pojos.onlineServices;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "death_log_data")
@AllArgsConstructor
@NoArgsConstructor
public class DeathLogData {

	@Id
	private int id;
	@Lob
	private byte[] certificate;
}
