package com.backend.MediEase.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class QuotationResponseDTO {
    private Long quotationId;
    private Long prescriptionId;
    private String status;
    private List<QuotationDetailDTO> quotationDetails;
    private String createdAt;
}
