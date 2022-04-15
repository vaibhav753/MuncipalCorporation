package com.app.pojos;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import lombok.NoArgsConstructor;

@MappedSuperclass
@NoArgsConstructor
public class BaseEntity {

	//common data members
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Integer id;

		public Integer getId() {
			return id;
		}

		public void setId(Integer id) {
			this.id = id;
		}
		
}
