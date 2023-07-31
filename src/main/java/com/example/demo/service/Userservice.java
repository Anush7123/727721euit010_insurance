package com.example.demo.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.Userrepository;


@Service
public class Userservice {

	@Autowired
	private Userrepository repository;
	
	public Optional<User> getDetails(String email)
	{
		return repository.findById(email);
	}
	public String updateDetails(User user)
	{
		repository.save(user);
		return "Updated";
	}

}