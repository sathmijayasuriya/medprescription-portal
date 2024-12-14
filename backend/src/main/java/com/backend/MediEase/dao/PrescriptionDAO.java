package com.backend.MediEase.dao;

import com.backend.MediEase.model.Prescription;

import java.util.List;

public interface PrescriptionDAO {

    Long addPrescription(Prescription prescription);
     void addPrescriptionImages(Long prescriptionId, List<String> imagePaths) ;
     List<Prescription> getAllPrescriptions() ;
     List<Prescription> getPrescriptionsByUser(Long userId) ;


    }
