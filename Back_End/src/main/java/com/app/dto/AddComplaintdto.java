package com.app.dto;

import com.app.pojos.ComplaintType;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AddComplaintdto {

	private String mainType;
	private String subType;
}
