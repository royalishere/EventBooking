package com.eventbooking.ticketservice.controller;

import com.eventbooking.ticketservice.dto.TicketDTO;
import com.eventbooking.ticketservice.model.Ticket;
import com.eventbooking.ticketservice.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ticket")
public class TicketController {

    @Autowired
    private TicketService ticketService;

    @PostMapping("/createTicket")
    public Ticket postTicket(@RequestBody Ticket ticket)
    {

        return ticketService.createTicket(ticket);

    }

}
