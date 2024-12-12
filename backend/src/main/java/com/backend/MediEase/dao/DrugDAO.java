package com.backend.MediEase.dao;

import com.backend.MediEase.model.Drug;

import java.util.List;

public interface DrugDAO {


     Drug getDrugById(Long drugId) ;
     List<Drug> getAllDrugs() ;
     int addDrug(Drug drug) ;



    }
