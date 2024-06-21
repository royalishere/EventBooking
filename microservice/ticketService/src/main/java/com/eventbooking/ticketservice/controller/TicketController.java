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
@CrossOrigin(origins = "http://localhost:5000")
public class TicketController {

    // Gọi service TicketService
    private final TicketService ticketService;

    @PostMapping("/createTicket")
    //Tạo danh sách vé tham gia sự kiện
    public Ticket postTicket(@RequestBody Ticket ticket) {

        return ticketService.createTicket(ticket);

    }

    @GetMapping("/getAllTickets")
    //Lấy danh sách vé tham gia sự kiện
    public List<Ticket> getAllTickets() {
        return ticketService.getAllTickets();
    }

    @GetMapping("/getTicketById")
    //Lấy vé theo id
    public ResponseEntity<?> getTicketById(@RequestParam int id) {

        Ticket result = ticketService.getById(id);

        return ResponseEntity.ok(Objects.requireNonNullElse(result, "Ticket not found"));

    }

    @PutMapping("/updateCount")
    //Cập nhật số lượng vé còn lại
    public ResponseEntity<?> updateTicket(@RequestParam int id, int count) {

        //gọi hàm getById() từ service TicketService
        Ticket result = ticketService.getById(id);

        //kiểm tra vé có tồn tại không
        if (result != null) {

            //kiểm tra số lượng vé còn lại có đủ không
            if (result.getTicketAvailable() < count) {
                return ResponseEntity.ok("Not enough tickets available");
            }

            //nếu đủ thì giảm số lượng vé còn lại
            ticketService.bookingTicket(result, count);
        }

        return ResponseEntity.ok(Objects.requireNonNullElse(result, "Ticket not found"));
    }

    @GetMapping("/getByEventId")
    //Lấy vé theo id sự kiện
    public List<Ticket> findByEventId(@RequestParam int eventId) {

        try{
            return ticketService.findByEventId(eventId);
        }
        catch (Exception e) {
            return null;
        }
    }
}
