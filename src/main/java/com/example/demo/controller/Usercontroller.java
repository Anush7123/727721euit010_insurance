package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.User;
import com.example.demo.repository.Userrepository;
import com.example.demo.service.Userservice;


@CrossOrigin(origins ="http://localhost:3000",allowedHeaders = "*" )
@RestController

public class Usercontroller {
	@Autowired  
	  Userrepository serviceRepository; 
	@Autowired
		Userservice service;

	@GetMapping("/get")
	 List<User> getList(){
		return serviceRepository.findAll();
	}
	@GetMapping("/get/{id}")
	User getUser(@PathVariable String id) {
		return serviceRepository.getById(id);
		}
	@PostMapping("/post")
	public User create(@RequestBody User stu) {
		  return serviceRepository.save(stu);
	}
	@GetMapping("/get/{email}")
	public Optional<User> getbyid(@PathVariable String email){
		return service.getDetails(email);
	}
}