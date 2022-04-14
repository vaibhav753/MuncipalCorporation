package com.app.pojos;

import java.util.HashSet;
import javax.persistence.CascadeType;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "users")
public class User extends BaseEntity{

	@Email
	@NotBlank(message = "Email Must be supplied")
	@Column(unique = true)
	private String email;
	@NotBlank(message = "First Name Must be supplied")
	private String firstName;
	@NotBlank(message = "Last Name Must be supplied")
	private String lastName;
	@NotBlank(message = "Password Must be supplied")
	private String password;
	
	@Enumerated(EnumType.STRING)
	private Gender gender;
	@NotNull
	@Column(unique = true)
	private long contactNo;
	@NotBlank(message = "Address Must be supplied")
	private String address;
	private boolean active;
	@ManyToMany(cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinTable(name = "user_roles", 
	joinColumns = @JoinColumn(name = "user_id"), 
	inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<>();
	
	
	@Override
	public String toString() {
		return "User [email=" + email + ", firstName=" + firstName + ", lastName=" + lastName + ", gender=" + gender
				+ ", contactNo=" + contactNo + ", address=" + address + "]";
	}
	
	
}
