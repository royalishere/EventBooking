package com.eventbooking.ticketservice.service;

import com.eventbooking.ticketservice.model.BookingHistory;
import com.eventbooking.ticketservice.repository.BookingHistoryRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingHistoryService {

    private final BookingHistoryRepo bookingHistoryRepo;

    public BookingHistory createBookingHistory (BookingHistory bookingHistory) {
        return bookingHistoryRepo.save(bookingHistory);
    }

    public BookingHistory getById(int id) {
        return bookingHistoryRepo.findById(id).orElse(null);
    }

    public List<BookingHistory> getAllBookingHistory() {
        return bookingHistoryRepo.findAll();
    }
}
