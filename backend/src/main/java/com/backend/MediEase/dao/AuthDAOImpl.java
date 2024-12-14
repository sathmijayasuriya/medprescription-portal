package com.backend.MediEase.dao;

import com.backend.MediEase.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
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

        KeyHolder keyHolder = new GeneratedKeyHolder(); // this used to capture the userid

        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, new String[]{"user_id"});
            ps.setString(1, user.getName());
            ps.setString(2, user.getEmail());
            ps.setString(3, user.getPassword());
            ps.setString(4, user.getAddress());
            ps.setString(5, user.getContactNo());
            ps.setString(6, user.getDob());
            ps.setString(7, user.getUserType());
            return ps;
        }, keyHolder);

        // Set the generated userId back to the User object
        if (keyHolder.getKey() != null) {
            user.setUserId(keyHolder.getKey().longValue());
        }

        System.out.println("Rows affected: " + rowsAffected + ", Generated userId: " + user.getUserId());
        return rowsAffected;
    }

   // user id is becomming null for below code
//    @Override
//    public int registerUser(User user) {
//        String sql = "INSERT INTO Users (name, email, password, address, contact_no, dob, user_type, created_at) " +
//                "VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_DATE)";
//        int rowsAffected = jdbcTemplate.update(sql, user.getName(), user.getEmail(), user.getPassword(),
//                user.getAddress(), user.getContactNo(), user.getDob(), user.getUserType());
//        System.out.println("Rows affected: " + rowsAffected);
//        return rowsAffected;
//    }


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
