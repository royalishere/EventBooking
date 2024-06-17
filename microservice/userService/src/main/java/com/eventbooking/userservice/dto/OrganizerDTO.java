package com.eventbooking.userservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrganizerDTO {

    private int userId;

    private String companyName;

    private String companyInformation;

    private String BCCode;
}
