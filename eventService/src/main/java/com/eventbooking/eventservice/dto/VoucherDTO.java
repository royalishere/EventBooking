package com.eventbooking.eventservice.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VoucherDTO {
    private String code;
    private String description;
    private String discount_type;
    private double discount_value;
    private Date start_date;
    private Date end_date;
    private int usage_limit;
    private int usage_count;
    private String status;
}
