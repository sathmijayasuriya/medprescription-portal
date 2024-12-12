package com.backend.MediEase.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class PrescriptionRequestDTO {

    private Long userId;
    private String note;
    private String deliveryAddress;
    private List<String> imagePaths;
}
