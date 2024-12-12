package com.backend.MediEase.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class User {

    private Long userId;
    private String name;
    private String email;
    private String password;
    private String address;
    private String contactNo;
    private String dob;
    private String userType; // "User" or "Pharmacy"
    private String createdAt;
}
