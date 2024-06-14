package com.eventbooking.ticketservice.controller;

import com.eventbooking.ticketservice.dto.bookingDTO;
import com.eventbooking.ticketservice.model.BookingHistory;
import com.eventbooking.ticketservice.model.Ticket;
import com.eventbooking.ticketservice.service.BookingHistoryService;
import com.eventbooking.ticketservice.service.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/booking history")
@RequiredArgsConstructor
public class BookingHistoryController {

    private final BookingHistoryService bookingHistoryService;
    private final TicketService ticketService;

    @GetMapping("/getAllBookingHistory")
    public List<BookingHistory> getAll() {
        return bookingHistoryService.getAllBookingHistory();
    }

    @PostMapping("/bookingTicket")
    public ResponseEntity<?> booking(@RequestBody bookingDTO bookingDTO) {
        BookingHistory bookingRequest = new BookingHistory();

        bookingRequest.setTicketId(bookingDTO.getTicketId());
        bookingRequest.setUserId(bookingDTO.getUserId());
        bookingRequest.setTicketCount(bookingDTO.getTicketCount());

        bookingRequest.setBookingDate(new Date());
        bookingRequest.setBookingStatus("Wait for payment");

        Ticket ticket = ticketService.getById(bookingDTO.getTicketId());

        if (ticket == null) {
            return ResponseEntity.ok("Ticket not found");
        }

        if (ticket.getTicketAvailable() < bookingDTO.getTicketCount()) {

            return ResponseEntity.ok("Not enough tickets available");
        }
        else {
            ticketService.bookingTicket(ticket, bookingRequest.getTicketCount());

            bookingRequest.setTotalPrice(ticket.getTicketPrice() * bookingRequest.getTicketCount());
            bookingHistoryService.createBookingHistory(bookingRequest);
        }

        return ResponseEntity.ok(bookingRequest);
    }
}
