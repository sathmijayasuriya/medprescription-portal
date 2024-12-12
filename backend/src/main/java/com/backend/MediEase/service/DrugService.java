package com.backend.MediEase.service;

import com.backend.MediEase.dto.DrugRequestDTO;
import com.backend.MediEase.dto.DrugResponseDTO;

import java.util.List;

public interface DrugService {


         void addDrug(DrugRequestDTO drugRequestDTO) ;

         List<DrugResponseDTO> getAllDrugs() ;

         DrugResponseDTO getDrugById(Long drugId) ;

    }
