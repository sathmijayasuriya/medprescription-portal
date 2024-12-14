package com.backend.MediEase.dao;

import com.backend.MediEase.model.Prescription;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class PrescriptionDAOImpl implements PrescriptionDAO {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public Long addPrescription(Prescription prescription) {
        String sql = "INSERT INTO Prescriptions (user_id, note, delivery_address, status) VALUES (?, ?, ?, ?)";
        jdbcTemplate.update(sql, prescription.getUserId(), prescription.getNote(),
                prescription.getDeliveryAddress(), prescription.getStatus());

        // Retrieve the generated prescription ID
        String idQuery = "SELECT LAST_INSERT_ID()";
        return jdbcTemplate.queryForObject(idQuery, Long.class);
    }

    @Override
    public void addPrescriptionImages(Long prescriptionId, List<String> imagePaths) {
        String sql = "INSERT INTO Prescription_Images (prescription_id, image_path) VALUES (?, ?)";
        for (String imagePath : imagePaths) {
            jdbcTemplate.update(sql, prescriptionId, imagePath);
        }
    }
    @Override
    public List<Prescription> getAllPrescriptions() {
        String sql = "SELECT * FROM Prescriptions";
        return jdbcTemplate.query(sql, this::mapRowToPrescription);
    }

    @Override
    public List<Prescription> getPrescriptionsByUser(Long userId) {
        String sql = "SELECT * FROM Prescriptions WHERE user_id = ?";
        return jdbcTemplate.query(sql, this::mapRowToPrescription, userId);
    }


    private Prescription mapRowToPrescription(ResultSet rs, int rowNum) throws SQLException {
        Prescription prescription = new Prescription();
        prescription.setPrescriptionId(rs.getLong("prescription_id"));
        prescription.setUserId(rs.getLong("user_id"));
        prescription.setNote(rs.getString("note"));
        prescription.setDeliveryAddress(rs.getString("delivery_address"));
        prescription.setStatus(rs.getString("status"));

        // Fetch images for this prescription
        String imageSql = "SELECT image_path FROM Prescription_Images WHERE prescription_id = ?";
        List<String> imagePaths = jdbcTemplate.query(imageSql, (rsImage, rowNumImage) -> rsImage.getString("image_path"), rs.getLong("prescription_id"));
        prescription.setImagePaths(imagePaths);

        return prescription;
    }

}
