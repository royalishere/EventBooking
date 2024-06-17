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

    // Gọi service BookingHistoryService và TicketService
    private final BookingHistoryService bookingHistoryService;
    private final TicketService ticketService;

    @GetMapping("/getAll")
    //lấy tất cả lịch sử đặt vé
    public List<BookingHistory> getAll() {
        //gọi hàm getAllBookingHistory() từ service BookingHistoryService
        return bookingHistoryService.getAllBookingHistory();
    }

    @PostMapping("/booking")
    //đặt vé
    public ResponseEntity<?> booking(@RequestBody bookingDTO bookingDTO) {

        Ticket ticket = ticketService.getById(bookingDTO.getTicketId());

        //kiểm tra vé có tồn tại không
        if (ticket == null) {
            return ResponseEntity.ok("Ticket not found");
        }

        //kiểm tra số lượng vé còn lại có đủ không
        if (ticket.getTicketAvailable() < bookingDTO.getTicketCount()) {

            return ResponseEntity.ok("Not enough tickets available");
        }

        //tạo một đối tượng BookingHistory
        BookingHistory bookingRequest = new BookingHistory();

        //gán giá trị cho các thuộc tính của đối tượng BookingHistory
        bookingRequest.setEventId(ticket.getEventId());
        bookingRequest.setTicketId(bookingDTO.getTicketId());
        bookingRequest.setUserId(bookingDTO.getUserId());
        bookingRequest.setTicketCount(bookingDTO.getTicketCount());

        bookingRequest.setBookingDate(new Date());
        bookingRequest.setBookingStatus("Wait for payment");


        //nếu đủ thì giảm số lượng vé còn lại
        ticketService.bookingTicket(ticket, bookingRequest.getTicketCount());

        //tính tổng giá tiền và tạo lịch sử đặt vé
        bookingRequest.setTotalPrice(ticket.getTicketPrice() * bookingRequest.getTicketCount());
        bookingHistoryService.createBookingHistory(bookingRequest);

        return ResponseEntity.ok(bookingRequest);
    }

    @PutMapping("/cancel")
    //hủy vé
    public ResponseEntity<?> cancel(@RequestParam int id) {
        //lấy thông tin lịch sử đặt vé
        BookingHistory bookingHistory = bookingHistoryService.getById(id);

        //kiểm tra lịch sử đặt vé có tồn tại không
        if (bookingHistory == null) {
            return ResponseEntity.ok("Booking not found");
        }
        //kiểm tra lịch sử đặt vé đã hủy chưa
        else if (bookingHistory.getBookingStatus().equals("Canceled")) {
            return ResponseEntity.ok("Booking already canceled");
        }
        //kiểm tra lịch sử đặt vé đã thanh toán chưa
        else if (bookingHistory.getBookingStatus().equals("Paid")) {
            return ResponseEntity.ok("Booking already paid");
        }

        //nếu chưa thì tăng số lượng vé còn lại và cập nhật trạng thái lịch sử đặt vé
        ticketService.cancelTicket(bookingHistory.getTicketId(), bookingHistory.getTicketCount());
        bookingHistoryService.updateStatus(bookingHistory, "Canceled");

        return ResponseEntity.ok(bookingHistory);
    }

    @PutMapping("/confirmPayment")
    //xác nhận thanh toán
    public ResponseEntity<?> confirmPayment(@RequestParam int id) {
        //lấy thông tin lịch sử đặt vé
        BookingHistory bookingHistory = bookingHistoryService.getById(id);

        //kiểm tra lịch sử đặt vé có tồn tại không
        if (bookingHistory == null) {
            return ResponseEntity.ok("Booking not found");
        }
        //kiểm tra lịch sử đặt vé đã hủy chưa
        else if (bookingHistory.getBookingStatus().equals("Canceled")) {
            return ResponseEntity.ok("Booking already canceled");
        }
        //kiểm tra lịch sử đặt vé đã thanh toán chưa
        else if (bookingHistory.getBookingStatus().equals("Paid")) {
            return ResponseEntity.ok("Booking already paid");
        }

        //nếu chưa thì cập nhật trạng thái lịch sử đặt vé
        bookingHistoryService.updateStatus(bookingHistory, "Paid");

        return ResponseEntity.ok(bookingHistory);
    }

    @GetMapping("/getEventRevenue")
    //lấy doanh thu của sự kiện
    public double getEventRevenue(@RequestParam int eventId) {
        //gọi hàm getEventRevenue() từ service BookingHistoryService
        try {
            return bookingHistoryService.getEventRevenue(eventId);
        }
        catch (Exception e) {

            //trả về 0 nếu không có doanh thu
            return 0;
        }
    }

    @GetMapping("/getByUserId")
    //lấy lịch sử đặt vé theo id người dùng
    public List<BookingHistory> getByUserId(@RequestParam int userId) {
        try{
            return bookingHistoryService.findByUserId(userId);
        }
        catch (Exception e) {
            return null;
        }
    }
}
