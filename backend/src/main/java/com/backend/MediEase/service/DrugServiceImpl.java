package com.backend.MediEase.service;


import com.backend.MediEase.dao.DrugDAO;
import com.backend.MediEase.dto.DrugRequestDTO;
import com.backend.MediEase.dto.DrugResponseDTO;
import com.backend.MediEase.model.Drug;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DrugServiceImpl implements DrugService{

    @Autowired
    private DrugDAO drugDAO;

    // Add drug
    @Override
    public void addDrug(DrugRequestDTO drugRequestDTO) {
        Drug drug = new Drug();
        drug.setDrugName(drugRequestDTO.getDrugName());
        drug.setPricePerUnit(drugRequestDTO.getPricePerUnit());
        drug.setDescription(drugRequestDTO.getDescription());
        drug.setCreatedAt(String.valueOf(System.currentTimeMillis())); // Use timestamp as createdAt
        drugDAO.addDrug(drug);
    }

    // Get all drugs
    @Override
    public List<DrugResponseDTO> getAllDrugs() {
        List<Drug> drugs = drugDAO.getAllDrugs();
        return drugs.stream().map(drug -> {
            DrugResponseDTO dto = new DrugResponseDTO();
            dto.setDrugId(drug.getDrugId());
            dto.setDrugName(drug.getDrugName());
            dto.setPricePerUnit(drug.getPricePerUnit());
            dto.setDescription(drug.getDescription());
            dto.setCreatedAt(drug.getCreatedAt());
            return dto;
        }).collect(Collectors.toList());
    }

    // Get drug by ID
    @Override
    public DrugResponseDTO getDrugById(Long drugId) {
        Drug drug = drugDAO.getDrugById(drugId);
        DrugResponseDTO dto = new DrugResponseDTO();
        dto.setDrugId(drug.getDrugId());
        dto.setDrugName(drug.getDrugName());
        dto.setPricePerUnit(drug.getPricePerUnit());
        dto.setDescription(drug.getDescription());
        dto.setCreatedAt(drug.getCreatedAt());
        return dto;
    }
}
