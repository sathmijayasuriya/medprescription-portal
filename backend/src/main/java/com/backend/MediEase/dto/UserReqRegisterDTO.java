package com.backend.MediEase.dto;

import lombok.*;
import java.sql.Date;


@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class UserReqRegisterDTO {

    private String name;
    private String email;
    private String password;
    private String address;
    private String contactNo;
    private String dob;
    private String userType;
}
