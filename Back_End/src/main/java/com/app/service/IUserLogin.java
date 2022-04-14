package com.app.service;

import java.util.Optional;


import com.app.dto.UserLogin;
import com.app.pojos.User;

public interface IUserLogin {

	User getUser(UserLogin request);

}
