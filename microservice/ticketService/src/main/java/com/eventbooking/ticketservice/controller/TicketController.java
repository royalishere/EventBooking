package com.eventbooking.ticketservice.controller;

import com.eventbooking.ticketservice.model.Ticket;
import com.eventbooking.ticketservice.service.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/ticket")
@RequiredArgsConstructor
public class TicketController {


    private final TicketService ticketService;

    @PostMapping("/createTicket")
    public Ticket postTicket(@RequestBody Ticket ticket) {

        return ticketService.createTicket(ticket);

    }

    @GetMapping("/getAllTickets")
    public List<Ticket> getAllTickets() {
        return ticketService.getAllTickets();
    }

    @GetMapping("/getTicketById")
    public ResponseEntity<?> getTicketById(@RequestParam int id) {

        Ticket result = ticketService.getById(id);

        return ResponseEntity.ok(Objects.requireNonNullElse(result, "Ticket not found"));

    }

    @PutMapping("/updateTicket")
    public ResponseEntity<?> updateTicket(@RequestParam int id, int count) {

        Ticket result = ticketService.getById(id);

        if (result != null) {
            if (result.getTicketAvailable() < count) {
                return ResponseEntity.ok("Not enough tickets available");
            }

            ticketService.bookingTicket(result, count);
        }

        return ResponseEntity.ok(Objects.requireNonNullElse(result, "Ticket not found"));

    }
}
