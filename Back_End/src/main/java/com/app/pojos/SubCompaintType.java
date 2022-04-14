package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "Sub_Complaints")
public class SubCompaintType extends BaseEntity{
	private String subComplaintName;
	
	@ManyToOne
	@JoinColumn(name="Main_ComplaintId",nullable = false)
	private MainCompaintType mainComplaint;

	public SubCompaintType(String subComplaintName) {
		super();
		this.subComplaintName = subComplaintName;
	}

	@Override
	public String toString() {
		return "SubCompaintType [subComplaintName=" + subComplaintName + "]";
	}
	
	 
	
	
}
