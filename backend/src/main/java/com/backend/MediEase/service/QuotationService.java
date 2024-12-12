package com.backend.MediEase.service;

import com.backend.MediEase.dto.QuotationActionRequestDTO;
import com.backend.MediEase.dto.QuotationRequestDTO;
import com.backend.MediEase.dto.QuotationResponseDTO;

import java.util.List;

public interface QuotationService {
     Long createQuotation(QuotationRequestDTO requestDTO) ;
     QuotationResponseDTO getQuotation(Long quotationId) ;
     void updateQuotationStatus(Long quotationId, String status, Long userId) ;


    }
