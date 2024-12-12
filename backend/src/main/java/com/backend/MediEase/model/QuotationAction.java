package com.backend.MediEase.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.security.Timestamp;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class QuotationAction {
    private Long actionId;
    private Long quotationId;
    private Long userId;
    private String action; // 'Accepted' or 'Rejected'
    private Timestamp actionDate;
}
