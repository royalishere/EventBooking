package com.eventbooking.ticketservice.repository;

import com.eventbooking.ticketservice.model.BookingHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingHistoryRepo extends JpaRepository<BookingHistory, Integer> {
}
