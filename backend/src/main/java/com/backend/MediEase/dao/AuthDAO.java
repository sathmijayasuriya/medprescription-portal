package com.backend.MediEase.dao;

import com.backend.MediEase.model.User;

import java.util.Optional;

public interface AuthDAO {

     int registerUser(User user) ;
     Optional<User> findByEmail(String email);

    }
