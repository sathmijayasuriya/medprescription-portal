package com.backend.MediEase.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Quotation {

    private Long quotationId;
    private Long prescriptionId;
    private Long pharmacyId;
    private Long userId;
    private String status;
    private String createdAt;
}
