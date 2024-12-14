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
public class PrescriptionResponseDTO {
    private Long prescriptionId;
    private Long userId;
    private String note;
    private String deliveryAddress;
    private String status;

    //Return Base64-Encoded Images in DTO
    // need to implement this, otherwise images will not be diplay
    private List<String> imagePaths; // Return image paths to the client
}
