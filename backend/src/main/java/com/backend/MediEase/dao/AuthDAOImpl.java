package com.backend.MediEase.dao;

import com.backend.MediEase.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class AuthDAOImpl implements AuthDAO{

    @Autowired
    private JdbcTemplate jdbcTemplate;


    // Register user/pharmacist
    @Override
    public int registerUser(User user) {
        String sql = "INSERT INTO Users (name, email, password, address, contact_no, dob, user_type, created_at) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_DATE)";
        return jdbcTemplate.update(sql, user.getName(), user.getEmail(), user.getPassword(),
                user.getAddress(), user.getContactNo(), user.getDob(), user.getUserType());
    }

    // Find user by email
    @Override
    public Optional<User> findByEmail(String email) {
        String sql = "SELECT * FROM Users WHERE email = ?";
        return jdbcTemplate.query(sql, new Object[]{email}, rs -> {
            if (rs.next()) {
                User user = new User();
                user.setUserId(rs.getLong("user_id"));
                user.setName(rs.getString("name"));
                user.setEmail(rs.getString("email"));
                user.setPassword(rs.getString("password"));
                user.setAddress(rs.getString("address"));
                user.setContactNo(rs.getString("contact_no"));
                user.setDob(rs.getString("dob"));
                user.setUserType(rs.getString("user_type"));
                user.setCreatedAt(rs.getString("created_at"));
                return Optional.of(user);
            }
            return Optional.empty();
        });
    }
}
