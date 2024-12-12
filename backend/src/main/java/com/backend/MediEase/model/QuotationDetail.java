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
public class QuotationDetail {
    private Long detailId;
    private Long quotationId;
    private Long drugId;
    private int quantity;
    private BigDecimal totalPrice;
}
