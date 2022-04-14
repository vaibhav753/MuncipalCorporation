package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import org.hibernate.validator.constraints.Range;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "water_tax")
public class WaterTax extends BaseEntity{

	@Column(name="consumer_number")
	@Range(min = 1, message = "Please enter a non zero positive number!")
	private int consumerNo;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private LocalDate date;
	
	@Range(min = 0, message = "Please enter a positive number!")
	private int unit;
	
	@Range(min = 0, message = "Please enter a positive amount!")
	private int amount;
	
	@Enumerated(EnumType.STRING)
	private PaymentStatus status;
	
}
