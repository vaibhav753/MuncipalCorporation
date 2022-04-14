package com.app.pojos.onlineServices;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "birth_log_data")
@AllArgsConstructor
@NoArgsConstructor
public class BirthLogData {

	@Id
	private int id;
	@Lob
	private byte[] certificate;
}
