package com.backend.MediEase.service;

import com.backend.MediEase.dto.PrescriptionRequestDTO;
import com.backend.MediEase.dto.PrescriptionResponseDTO;

import java.util.List;

public interface PrescriptionService {

      void addPrescription(PrescriptionRequestDTO requestDTO) ;
        List<PrescriptionResponseDTO> getAllPrescriptions() ;

    }
