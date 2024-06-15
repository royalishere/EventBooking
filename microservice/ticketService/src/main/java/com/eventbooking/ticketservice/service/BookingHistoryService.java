package com.eventbooking.ticketservice.service;

import com.eventbooking.ticketservice.model.BookingHistory;
import com.eventbooking.ticketservice.repository.BookingHistoryRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingHistoryService {

    //gọi BookingHistoryRepo
    private final BookingHistoryRepo bookingHistoryRepo;

    //tạo một lịch sử đặt vé
    public BookingHistory createBookingHistory (BookingHistory bookingHistory) {
        return bookingHistoryRepo.save(bookingHistory);
    }

    //lấy lịch sử đặt vé theo id
    public BookingHistory getById(int id) {
        return bookingHistoryRepo.findById(id).orElse(null);
    }

    //lấy tất cả lịch sử đặt vé
    public List<BookingHistory> getAllBookingHistory() {
        return bookingHistoryRepo.findAll();
    }

    //cập nhật trạng thái đặt vé
    public BookingHistory updateStatus(BookingHistory bookingHistory, String status)
    {
        bookingHistory.setBookingStatus(status);
        return bookingHistoryRepo.save(bookingHistory);
    }
}
