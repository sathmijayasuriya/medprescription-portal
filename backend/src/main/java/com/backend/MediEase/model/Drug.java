package com.backend.MediEase.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Drug {

    private Long drugId;
    private String drugName;
    private Double pricePerUnit;
    private String description;
    private String createdAt;
}
