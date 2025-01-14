package com.backend.MediEase.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Prescription {
    private Long prescriptionId;
    private Long userId;
    private String note;
    private String deliveryAddress;
    private String status;
    private List<String> imagePaths;
}
