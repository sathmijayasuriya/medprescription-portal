package com.backend.MediEase.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class DrugResponseDTO {

    private Long drugId;
    private String drugName;
    private Double pricePerUnit;
    private String description;
    private String createdAt;
}
