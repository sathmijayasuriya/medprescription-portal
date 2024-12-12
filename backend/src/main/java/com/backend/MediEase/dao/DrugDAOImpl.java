package com.backend.MediEase.dao;


import com.backend.MediEase.model.Drug;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class DrugDAOImpl implements DrugDAO {

    private JdbcTemplate jdbcTemplate;

    public void DrugDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public DrugDAOImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // Add new drug
    @Override
    public int addDrug(Drug drug) {
        String sql = "INSERT INTO Drugs (drug_name, price_per_unit, description, created_at) VALUES (?, ?, ?, ?)";
        return jdbcTemplate.update(sql, drug.getDrugName(), drug.getPricePerUnit(), drug.getDescription(), drug.getCreatedAt());
    }

    // Get all drugs
    @Override
    public List<Drug> getAllDrugs() {
        String sql = "SELECT * FROM Drugs";
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            Drug drug = new Drug();
            drug.setDrugId(rs.getLong("drug_id"));
            drug.setDrugName(rs.getString("drug_name"));
            drug.setPricePerUnit(rs.getDouble("price_per_unit"));
            drug.setDescription(rs.getString("description"));
            drug.setCreatedAt(rs.getString("created_at"));
            return drug;
        });
    }

    // Get drug by ID
    @Override
    public Drug getDrugById(Long drugId) {
        String sql = "SELECT * FROM Drugs WHERE drug_id = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{drugId}, (rs, rowNum) -> {
            Drug drug = new Drug();
            drug.setDrugId(rs.getLong("drug_id"));
            drug.setDrugName(rs.getString("drug_name"));
            drug.setPricePerUnit(rs.getDouble("price_per_unit"));
            drug.setDescription(rs.getString("description"));
            drug.setCreatedAt(rs.getString("created_at"));
            return drug;
        });
    }
}
