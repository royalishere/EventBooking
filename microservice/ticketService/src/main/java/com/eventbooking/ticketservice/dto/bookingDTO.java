package com.eventbooking.ticketservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class bookingDTO {

    private int ticketId;

    private int userId;

    private int ticketCount;
}
