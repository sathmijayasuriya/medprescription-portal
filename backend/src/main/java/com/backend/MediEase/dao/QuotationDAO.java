package com.backend.MediEase.dao;

import com.backend.MediEase.dto.QuotationDetailDTO;
import com.backend.MediEase.dto.QuotationResponseDTO;
import com.backend.MediEase.model.Quotation;

public interface QuotationDAO {

     Long createQuotation(Quotation quotation) ;
     void addQuotationDetails(Long quotationId, QuotationDetailDTO detail) ;
     QuotationResponseDTO getQuotation(Long userId, Long prescriptionId) ;
     void updateQuotationStatus(Long quotationId, String status) ;
     void logAction(Long quotationId, Long userId, String actionType) ;

    }
