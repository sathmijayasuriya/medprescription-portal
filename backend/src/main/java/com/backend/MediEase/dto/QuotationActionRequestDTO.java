package com.backend.MediEase.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class QuotationActionRequestDTO {
    private Long quotationId;
    private Long userId;
    private String action; // 'Accepted' or 'Rejected'
}
