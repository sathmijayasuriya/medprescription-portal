package com.backend.MediEase.service;


import com.backend.MediEase.dao.PrescriptionDAO;
import com.backend.MediEase.dto.PrescriptionRequestDTO;
import com.backend.MediEase.dto.PrescriptionResponseDTO;
import com.backend.MediEase.model.Prescription;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class PrescriptionServiceImpl implements PrescriptionService{

    @Autowired
    private PrescriptionDAO prescriptionDAO;

    @Value("${upload.dir}")
    private String uploadDir;

    @Override
    public void addPrescription(Long userId, String note, String deliveryAddress, List<MultipartFile> imagePaths) {
        // Save the prescription to the database
        Prescription prescription = new Prescription();
        prescription.setUserId(userId);
        prescription.setNote(note);
        prescription.setDeliveryAddress(deliveryAddress);
        prescription.setStatus("Pending");

        Long prescriptionId = prescriptionDAO.addPrescription(prescription);

        // Save the images and get their file paths
        List<String> imageFilePaths = saveImages(imagePaths);

        // Save the image paths in the database
        prescriptionDAO.addPrescriptionImages(prescriptionId, imageFilePaths);
    }

    private List<String> saveImages(List<MultipartFile> imagePaths) {
        List<String> filePaths = new ArrayList<>();
        for (MultipartFile file : imagePaths) {
            try {
                // Save the file to a specific directory
                Path path = Paths.get(uploadDir + "/" + file.getOriginalFilename());
                Files.write(path, file.getBytes());

                filePaths.add(path.toString());
            } catch (IOException e) {
                e.printStackTrace();
                // Handle exception (e.g., return empty list or throw an error)
            }
        }
        return filePaths;
    }

    // get all prescriptions
    public List<PrescriptionResponseDTO> getAllPrescriptions() {
        return prescriptionDAO.getAllPrescriptions().stream()
                .map(this::convertToResponseDTO)
                .collect(Collectors.toList());
    }
    //get by user id
    public List<PrescriptionResponseDTO> getPrescriptionsByUser(Long userId) {
        return prescriptionDAO.getPrescriptionsByUser(userId).stream()
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
