package com.eventbooking.ticketservice.repository;

import com.eventbooking.ticketservice.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

// This interface extends JpaRepository
public interface TicketRepo extends JpaRepository<Ticket, Integer> {

    @Query("SELECT t FROM Ticket t WHERE t.eventId = :eventId")
    List<Ticket> findByEventId(@Param("eventId") int eventId);
}