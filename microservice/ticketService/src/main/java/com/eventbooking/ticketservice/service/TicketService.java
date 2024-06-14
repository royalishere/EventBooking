package com.eventbooking.ticketservice.service;

import com.eventbooking.ticketservice.repository.TicketRepo;
import lombok.RequiredArgsConstructor;
import com.eventbooking.ticketservice.model.Ticket;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TicketService {

    private final TicketRepo ticketRepo;

    public Ticket createTicket (Ticket ticket) {
        return ticketRepo.save(ticket);
    }

    public List<Ticket> getAllTickets() {
        return ticketRepo.findAll();
    }

    public Ticket getById(int id) {
        return ticketRepo.findById(id).orElse(null);
    }

    public Ticket bookingTicket(Ticket ticket, int count)
    {

        ticket.setTicketAvailable(ticket.getTicketAvailable() - count);

        return ticketRepo.save(ticket);
    }
}
