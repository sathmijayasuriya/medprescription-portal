package com.backend.MediEase.service;

import com.backend.MediEase.dto.PrescriptionRequestDTO;
import com.backend.MediEase.dto.PrescriptionResponseDTO;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface PrescriptionService {

        void addPrescription(Long userId, String note, String deliveryAddress, List<MultipartFile> imagePaths) ;

        List<PrescriptionResponseDTO> getAllPrescriptions() ;

    }
