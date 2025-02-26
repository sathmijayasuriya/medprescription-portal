package com.backend.MediEase.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class UserResponseDTO {
    private Long userId;
    private String name;
    private String email;
    private String address;
    private String contactNo;
    private String dob;
    private String userType;
}
