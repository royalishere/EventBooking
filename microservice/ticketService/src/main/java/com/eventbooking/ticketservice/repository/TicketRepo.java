package com.eventbooking.ticketservice.repository;

import com.eventbooking.ticketservice.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

// This interface extends JpaRepository
public interface TicketRepo extends JpaRepository<Ticket, Integer> {
}