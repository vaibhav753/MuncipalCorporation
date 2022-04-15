package com.app.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.app.filters.JwtRequestFilter;
import com.app.service.CustomUserDetailsService;

@Configuration
@EnableWebSecurity // Tells SC that this class contains web security config.
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private CustomUserDetailsService userDetailsService;

	@Autowired
	private JwtRequestFilter jwtFilter;

	// for configuring authentication , override below method
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		System.out.println(1);
		auth.userDetailsService(userDetailsService);
	}


	@Override
	protected void configure(HttpSecurity http) throws Exception {
		System.out.println(3);

		http.cors().and().csrf().disable().

				authorizeRequests()// authorize all requests

			
				// NOTE : argument of hasRole should NOT start with "ROLE_" as this is
				// automatically inserted.
				.
//				antMatchers("/**").hasRole("USER").
//				antMatchers("/newpayment").hasRole("USER").
//				antMatchers("/complaints").permitAll().
				antMatchers("/").permitAll().
				antMatchers("/userlogin").permitAll().
				antMatchers("/registration").permitAll().
				antMatchers("/complaints/**").permitAll().
				antMatchers(HttpMethod.OPTIONS, "/**").permitAll().
				antMatchers("/complaintslist").hasRole("HODCOMPLAINTS").
				antMatchers("/approveComplaints").hasRole("HODCOMPLAINTS").
//				antMatchers("/payment_gateway/**").hasRole("USER").
//				antMatchers("/navigatetocomplaints").hasRole("USER").
		
			//	antMatchers("/").hasRole("STUDENT")
		//		.antMatchers("/faculty/**").hasRole("FACULTY")
				// .antMatchers("/","static/js","static/css").permitAll()
//				antMatchers("/").permitAll()
				anyRequest().authenticated().and().
				//allow any HTTP OPTIONS request (which is typically a pre flight request coming from react like
				//front end : it's not required for testing it with postman
//				antMatchers(HttpMethod.OPTIONS, "/**").permitAll().and().
//				loginPage("http://localhost:3000/login")
				
				formLogin().loginPage("http://localhost:3000/login")
				.and().			
	
				sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	
		http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

	}


	@Bean 
	public PasswordEncoder encoder() {
		System.out.println(2);
		return new BCryptPasswordEncoder();
	}



	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {

		return super.authenticationManagerBean();
	}

}
