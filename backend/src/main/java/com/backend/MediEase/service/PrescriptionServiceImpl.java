package com.backend.MediEase.service;


import com.backend.MediEase.dao.PrescriptionDAO;
import com.backend.MediEase.dto.PrescriptionRequestDTO;
import com.backend.MediEase.dto.PrescriptionResponseDTO;
import com.backend.MediEase.model.Prescription;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class PrescriptionServiceImpl implements PrescriptionService{

    @Autowired
    private PrescriptionDAO prescriptionDAO;
    @Override
    public void addPrescription(PrescriptionRequestDTO requestDTO) {
        Prescription prescription = new Prescription();
        prescription.setUserId(requestDTO.getUserId());
        prescription.setNote(requestDTO.getNote());
        prescription.setDeliveryAddress(requestDTO.getDeliveryAddress());
        prescription.setStatus("Pending");

        // Save the prescription and get its ID
        Long prescriptionId = prescriptionDAO.addPrescription(prescription);

        // Save the images
        prescriptionDAO.addPrescriptionImages(prescriptionId, requestDTO.getImagePaths());
    }
    @Override
    public List<PrescriptionResponseDTO> getAllPrescriptions() {
        return prescriptionDAO.getAllPrescriptions().stream()
                .map(this::convertToResponseDTO)
                .collect(Collectors.toList());
    }

    private PrescriptionResponseDTO convertToResponseDTO(Prescription prescription) {
        PrescriptionResponseDTO responseDTO = new PrescriptionResponseDTO();
        responseDTO.setPrescriptionId(prescription.getPrescriptionId());
        responseDTO.setUserId(prescription.getUserId());
        responseDTO.setNote(prescription.getNote());
        responseDTO.setDeliveryAddress(prescription.getDeliveryAddress());
        responseDTO.setStatus(prescription.getStatus());
        responseDTO.setImagePaths(prescription.getImagePaths());
        return responseDTO;
    }
}
