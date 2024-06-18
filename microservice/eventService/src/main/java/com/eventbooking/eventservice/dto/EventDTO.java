package com.eventbooking.eventservice.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EventDTO {
    private String name;
    private String address;
    private String time;
    private String category;
    private String description;
    private String organizer;
    private String organizer_des;
}
