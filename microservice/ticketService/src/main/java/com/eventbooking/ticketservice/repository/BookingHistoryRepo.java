package com.eventbooking.ticketservice.repository;

import com.eventbooking.ticketservice.model.BookingHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

// This interface extends JpaRepository
public interface BookingHistoryRepo extends JpaRepository<BookingHistory, Integer> {

    @Query("SELECT b FROM BookingHistory b WHERE b.eventId = :eventId")
    List<BookingHistory> findByEventId(@Param("eventId") int eventId);

    @Query("SELECT SUM(b.totalPrice) FROM BookingHistory b WHERE b.eventId = :eventId AND b.bookingStatus = 'Paid'")
    Double findTotalPriceByEventId(@Param("eventId") int eventId);

    @Query("SELECT b FROM BookingHistory b WHERE b.userId = :userId")
    List<BookingHistory> findByUserId(@Param("userId") int userId);
}
