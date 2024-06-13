package com.eventbooking.ticketservice.service;

import com.eventbooking.ticketservice.repository.TicketRepo;
import org.springframework.beans.factory.annotation.Autowired;
import com.eventbooking.ticketservice.model.Ticket;
import org.springframework.stereotype.Service;

@Service
public class TicketService {

    @Autowired
    private TicketRepo ticketRepo;

    public Ticket createTicket (Ticket ticket) {
        return ticketRepo.save(ticket);
    }
}
