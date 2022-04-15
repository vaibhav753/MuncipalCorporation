package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "roles")
@Data
public class Role extends BaseEntity{
	@Enumerated(EnumType.STRING)
	@Column(length = 20,name="name")
	private UserRoles userRole;
	
}
