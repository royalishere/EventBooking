package com.eventbooking.ticketservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TicketDTO {
    private int eventId;
    private int ticketAvailable;
    private String ticketType;
    private double ticketPrice;
}
