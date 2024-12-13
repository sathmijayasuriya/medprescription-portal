package com.backend.MediEase.controller;


import com.backend.MediEase.constants.RestURI;
import com.backend.MediEase.dto.PrescriptionRequestDTO;
import com.backend.MediEase.dto.PrescriptionResponseDTO;
import com.backend.MediEase.service.PrescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(RestURI.BASE_URL)
public class PrescriptionController {

    @Autowired
    private PrescriptionService prescriptionService;

    @PostMapping(RestURI.ADD_PRESCRIPTION)
    public ResponseEntity<String> addPrescription(
            @RequestParam Long userId,
            @RequestParam String note,
            @RequestParam String deliveryAddress,
            @RequestParam List<MultipartFile> imagePaths) {

        if (imagePaths.size() > 5) {
            return ResponseEntity.badRequest().body("Maximum 5 images allowed!");
        }

        // Process the data and save prescription and images
        prescriptionService.addPrescription(userId, note, deliveryAddress, imagePaths);

        return ResponseEntity.ok("Prescription added successfully!");
    }

    @GetMapping(RestURI.GET_ALL_PRESCRIPTIONS)
    public ResponseEntity<List<PrescriptionResponseDTO>> getAllPrescriptions() {
        return ResponseEntity.ok(prescriptionService.getAllPrescriptions());
    }
}
