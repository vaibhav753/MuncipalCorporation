package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import org.hibernate.validator.constraints.Range;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "property_tax")
public class PropertyTax extends BaseEntity{

	@Column(name="consumer_number")
	@Range(min = 1, message = "Please enter a non zero positive number!")
	private int consumerNo;
	
	@Range(min = 1950, max = 2022, message = "Please enter year between 1950 and 2022!")
	private int year;
	
	@Range(min = 0, message = "Please enter a positive amount!")
	private int amount;
	
	@Enumerated(EnumType.STRING)
	private PaymentStatus status;
	
}
