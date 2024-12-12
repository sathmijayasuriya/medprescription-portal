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
public class QuotationRequestDTO {
    private Long prescriptionId;
    private Long pharmacyId;
    private Long userId;
    private List<QuotationDetailDTO> quotationDetails; // List of drugs and their quantities


}
