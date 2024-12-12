package com.backend.MediEase.controller;


import com.backend.MediEase.constants.RestURI;
import com.backend.MediEase.dto.UserReqLoginDTO;
import com.backend.MediEase.dto.UserReqRegisterDTO;
import com.backend.MediEase.dto.UserResponseDTO;
import com.backend.MediEase.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping(RestURI.BASE_URL)
public class UserController {

    @Autowired
    private AuthService authService;

    // Register User
    @PostMapping(RestURI.USER_REGISTER)
    public ResponseEntity<String> registerUser(@RequestBody UserReqRegisterDTO dto) {
        dto.setUserType("User");
        String response = authService.registerUser(dto);
        return ResponseEntity.ok(response);
    }

    // Register Pharmacist
    @PostMapping(RestURI.ADMIN_REGISTER)
    public ResponseEntity<String> registerPharmacy(@RequestBody UserReqRegisterDTO dto) {
        dto.setUserType("Pharmacy");
        String response = authService.registerUser(dto);
        return ResponseEntity.ok(response);
    }

    // Login User
    public ResponseEntity<UserResponseDTO> loginUser(@RequestBody UserReqLoginDTO dto) {
        Optional<UserResponseDTO> response = authService.loginUser(dto);
        return response.map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(401).body(null));
    }
    // Login Pharmacist
    @PostMapping(RestURI.ADMIN_LOGIN)
    public ResponseEntity<UserResponseDTO> loginPharmacy(@RequestBody UserReqLoginDTO dto) {
        Optional<UserResponseDTO> response = authService.loginUser(dto);
        return response.map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(401).body(null));
    }

}
