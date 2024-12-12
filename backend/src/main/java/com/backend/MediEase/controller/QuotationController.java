package com.backend.MediEase.controller;

import com.backend.MediEase.constants.RestURI;
import com.backend.MediEase.dto.QuotationActionRequestDTO;
import com.backend.MediEase.dto.QuotationRequestDTO;
import com.backend.MediEase.dto.QuotationResponseDTO;
import com.backend.MediEase.service.QuotationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(RestURI.BASE_URL)
public class QuotationController {

    @Autowired
    private QuotationService quotationService;

    @PostMapping(RestURI.CREATE_QUOTATION)
    public ResponseEntity<Map<String, Object>> createQuotation(@RequestBody QuotationRequestDTO requestDTO) {
        System.out.println("request quotation user id"+requestDTO.getUserId());
        System.out.println("request quotation pharmacist id"+requestDTO.getPharmacyId());

        System.out.println("response : "+quotationService.createQuotation(requestDTO));    Long quotationId = quotationService.createQuotation(requestDTO);

        // Return a structured response with a message
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Quotation created successfully");
        response.put("quotationId", quotationId);
        return ResponseEntity.ok(response);

//        return quotationService.createQuotation(requestDTO);
    }

    @GetMapping(RestURI.GET_QUOTA_BY_UID)
    public List<QuotationResponseDTO> getQuotations(@RequestParam Long userId, @RequestParam Long prescriptionId) {
        return quotationService.getQuotations(userId, prescriptionId);
    }


    @PatchMapping("/{quotationId}/status")
    public void updateQuotationStatus(@PathVariable Long quotationId, @RequestParam String status, @RequestParam Long userId) {
        quotationService.updateQuotationStatus(quotationId, status, userId);
    }

}
