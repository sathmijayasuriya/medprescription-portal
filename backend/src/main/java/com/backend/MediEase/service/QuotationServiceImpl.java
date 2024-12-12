package com.backend.MediEase.service;

import com.backend.MediEase.dao.QuotationDAO;
import com.backend.MediEase.dto.QuotationDetailDTO;
import com.backend.MediEase.dto.QuotationRequestDTO;
import com.backend.MediEase.dto.QuotationResponseDTO;
import com.backend.MediEase.model.Quotation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class QuotationServiceImpl implements QuotationService{
    @Autowired
    private QuotationDAO quotationDAO;

    public Long createQuotation(QuotationRequestDTO requestDTO) {
        Quotation quotation = new Quotation();
        quotation.setPrescriptionId(requestDTO.getPrescriptionId());
        quotation.setPharmacyId(requestDTO.getPharmacyId());
        quotation.setUserId(requestDTO.getUserId()); // Set userId from the DTO
        quotation.setStatus("Pending");
        quotation.setCreatedAt(String.valueOf(System.currentTimeMillis()));

        Long quotationId = quotationDAO.createQuotation(quotation); //update Quotations table
        for (QuotationDetailDTO detail : requestDTO.getQuotationDetails()) {
            quotationDAO.addQuotationDetails(quotationId, detail); //update Quotation_Details table
        }
        return quotationId;
    }

    public QuotationResponseDTO getQuotation(Long quotationId) {
        return quotationDAO.getQuotation(quotationId);
    }

    public void updateQuotationStatus(Long quotationId, String status, Long userId) {
        quotationDAO.updateQuotationStatus(quotationId, status);
        quotationDAO.logAction(quotationId, userId, status);
    }
}
