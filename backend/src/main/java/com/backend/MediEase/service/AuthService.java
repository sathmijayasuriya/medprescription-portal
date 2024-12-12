package com.backend.MediEase.service;


import com.backend.MediEase.dao.AuthDAO;
import com.backend.MediEase.dto.UserReqLoginDTO;
import com.backend.MediEase.dto.UserReqRegisterDTO;
import com.backend.MediEase.dto.UserResponseDTO;
import com.backend.MediEase.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class AuthService {

    @Autowired
    private AuthDAO authDAO;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // Register user/pharmacist
    public String registerUser(UserReqRegisterDTO dto) {
        Optional<User> existingUser = authDAO.findByEmail(dto.getEmail());
        if (existingUser.isPresent()) {
            return "Email is already registered";
        }

        User user = new User();
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        user.setAddress(dto.getAddress());
        user.setContactNo(dto.getContactNo());
        user.setDob(dto.getDob());
        user.setUserType(dto.getUserType());

        int rowsAffected = authDAO.registerUser(user);
        return rowsAffected > 0 ? "Registration successful" : "Registration failed";
    }

    // Login user/pharmacist
    public Optional<UserResponseDTO> loginUser(UserReqLoginDTO dto) {
        Optional<User> user = authDAO.findByEmail(dto.getEmail());
        if (user.isPresent() && passwordEncoder.matches(dto.getPassword(), user.get().getPassword())) {
            UserResponseDTO response = new UserResponseDTO();
            response.setUserId(user.get().getUserId());
            response.setName(user.get().getName());
            response.setEmail(user.get().getEmail());
            response.setAddress(user.get().getAddress());
            response.setContactNo(user.get().getContactNo());
            response.setDob(user.get().getDob());
            response.setUserType(user.get().getUserType());
            return Optional.of(response);
        }
        return Optional.empty();
    }
}
