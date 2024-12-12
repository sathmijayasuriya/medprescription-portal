package com.backend.MediEase.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter

public class QuotationDetailResponseDTO {
    private String drugName;
    private int quantity;
    private BigDecimal totalPrice;
}
