package com.eventbooking.userservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

        private String name;

        private String email;

        private String phone;

        private Date dateOfBirth;
}
