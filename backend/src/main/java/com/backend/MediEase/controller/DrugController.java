package com.backend.MediEase.controller;


import com.backend.MediEase.constants.RestURI;
import com.backend.MediEase.dto.DrugRequestDTO;
import com.backend.MediEase.dto.DrugResponseDTO;
import com.backend.MediEase.service.DrugService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(RestURI.BASE_URL)
public class DrugController {

    @Autowired
    private DrugService drugService;

    // Add drug
    @PostMapping(RestURI.ADD_DRUG)
    public void addDrug(@RequestBody DrugRequestDTO drugRequestDTO) {
        drugService.addDrug(drugRequestDTO);
    }

    // Get all drugs
    @GetMapping(RestURI.GET_ALL_DRUGS)
    public List<DrugResponseDTO> getAllDrugs() {
        return drugService.getAllDrugs();
    }

    // Get drug by ID
    @GetMapping(RestURI.GET_DRUG_BY_ID)
    public DrugResponseDTO getDrugById(@PathVariable("id") Long drugId) {
        return drugService.getDrugById(drugId);
    }
}
