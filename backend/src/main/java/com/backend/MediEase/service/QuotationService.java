package com.backend.MediEase.service;

import com.backend.MediEase.dto.QuotationRequestDTO;
import com.backend.MediEase.dto.QuotationResponseDTO;

import java.util.List;

public interface QuotationService {
     Long createQuotation(QuotationRequestDTO requestDTO) ;
     List<QuotationResponseDTO> getQuotations(Long userId, Long prescriptionId) ;
     void updateQuotationStatus(Long quotationId, String status, Long userId) ;


    }
