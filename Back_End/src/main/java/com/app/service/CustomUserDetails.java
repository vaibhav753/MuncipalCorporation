package com.app.service;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.app.pojos.User;

public class CustomUserDetails implements UserDetails {
	private User user;

	public CustomUserDetails() {
		// TODO Auto-generated constructor stub
	}

	// populating UserDetails object(spring sec object) from loaded user details
	// from DB
	public CustomUserDetails(User user) {
		super();
		this.user = user;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		System.out.println("get authorities "+user.getRoles());
		return user.getRoles().stream().map(r -> new SimpleGrantedAuthority(r.getUserRole().name()))
				.collect(Collectors.toList());
	}

	@Override
	public String getPassword() {
		System.out.println("get pwd");
		return user.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return user.getEmail();
		

	}
	
	

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return user.isActive();
	}

	
	

}
