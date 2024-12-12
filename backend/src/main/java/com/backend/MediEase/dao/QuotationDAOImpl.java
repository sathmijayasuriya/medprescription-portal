package com.backend.MediEase.dao;

import com.backend.MediEase.dto.QuotationDetailDTO;
import com.backend.MediEase.dto.QuotationResponseDTO;
import com.backend.MediEase.model.Quotation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class QuotationDAOImpl implements QuotationDAO{
    @Autowired
    private JdbcTemplate jdbcTemplate;

    // Insert new quotation
    public Long createQuotation(Quotation quotation) {
        String sql = "INSERT INTO Quotations (prescription_id, pharmacy_id, user_id, status, created_at) VALUES (?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, quotation.getPrescriptionId(), quotation.getPharmacyId(), quotation.getUserId(), "Pending", quotation.getCreatedAt());

        return jdbcTemplate.queryForObject("SELECT LAST_INSERT_ID()", Long.class);
    }

    // Insert quotation details (add drug name, quantity,price)
    public void addQuotationDetails(Long quotationId, QuotationDetailDTO detail) {
        String sql = "INSERT INTO Quotation_Details (quotation_id, drug_id, quantity, total_price) " +
                "SELECT ?, ?, ?, price_per_unit * ? FROM Drugs WHERE drug_id = ?";
        jdbcTemplate.update(sql, quotationId, detail.getDrugId(), detail.getQuantity(), detail.getQuantity(), detail.getDrugId());
    }

    // Fetch quotation by ID
    public List<QuotationResponseDTO> getQuotations(Long userId, Long prescriptionId) {
        String sql = "SELECT * FROM Quotations WHERE user_id = ? AND prescription_id = ?";
        List<Quotation> quotations = jdbcTemplate.query(sql, new Object[]{userId, prescriptionId}, new QuotationRowMapper());

        return quotations.stream().map(quotation -> {
            String detailsSql = "SELECT * FROM Quotation_Details WHERE quotation_id = ?";
            List<QuotationDetailDTO> details = jdbcTemplate.query(detailsSql, new Object[]{quotation.getQuotationId()}, new QuotationDetailRowMapper());

            QuotationResponseDTO responseDTO = new QuotationResponseDTO();
            responseDTO.setQuotationId(quotation.getQuotationId());
            responseDTO.setPrescriptionId(quotation.getPrescriptionId());
            responseDTO.setStatus(quotation.getStatus());
            responseDTO.setCreatedAt(quotation.getCreatedAt());
            responseDTO.setQuotationDetails(details);
            return responseDTO;
        }).toList();
    }


    // Update quotation status
    public void updateQuotationStatus(Long quotationId, String status) {
        String sql = "UPDATE Quotations SET status = ? WHERE quotation_id = ?";
        jdbcTemplate.update(sql, status, quotationId);
    }

    // Log actions in Quotation_Actions
    public void logAction(Long quotationId, Long userId, String actionType) {
        String sql = "INSERT INTO Quotation_Actions (quotation_id, action_by, action_type) VALUES (?, ?, ?)";
        jdbcTemplate.update(sql, quotationId, userId, actionType);
    }

    private static class QuotationRowMapper implements RowMapper<Quotation> {
        @Override
        public Quotation mapRow(ResultSet rs, int rowNum) throws SQLException {
            Quotation quotation = new Quotation();
            quotation.setQuotationId(rs.getLong("quotation_id"));
            quotation.setPrescriptionId(rs.getLong("prescription_id"));
            quotation.setPharmacyId(rs.getLong("pharmacy_id"));
            quotation.setUserId(rs.getLong("user_id"));
            quotation.setStatus(rs.getString("status"));
            quotation.setCreatedAt(rs.getString("created_at"));
            return quotation;
        }
    }

    private static class QuotationDetailRowMapper implements RowMapper<QuotationDetailDTO> {
        @Override
        public QuotationDetailDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
            QuotationDetailDTO detail = new QuotationDetailDTO();
            detail.setDrugId(rs.getLong("drug_id"));
            detail.setQuantity(rs.getInt("quantity"));
            return detail;
        }
    }
}
