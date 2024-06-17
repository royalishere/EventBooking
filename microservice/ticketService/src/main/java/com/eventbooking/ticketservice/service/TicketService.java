package com.eventbooking.ticketservice.service;

import com.eventbooking.ticketservice.repository.TicketRepo;
import lombok.RequiredArgsConstructor;
import com.eventbooking.ticketservice.model.Ticket;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TicketService {

    //gọi TicketRepo
    private final TicketRepo ticketRepo;

    //tạo vé tham gia sự kiện
    public Ticket createTicket (Ticket ticket) {
        return ticketRepo.save(ticket);
    }

    //lấy danh sách vé tham gia sự kiện
    public List<Ticket> getAllTickets() {
        return ticketRepo.findAll();
    }

    //lấy vé theo id
    public Ticket getById(int id) {
        return ticketRepo.findById(id).orElse(null);
    }

    //cập nhật số lượng vé còn lại
    public void bookingTicket(Ticket ticket, int count)
    {
        //giảm số lượng vé còn lại
        ticket.setTicketAvailable(ticket.getTicketAvailable() - count);

        ticketRepo.save(ticket);
    }

    //hủy vé
    public void cancelTicket(int id, int count)
    {
        //tăng số lượng vé còn lại
        Ticket ticket = getById(id);
        ticket.setTicketAvailable(ticket.getTicketAvailable() + count);

        ticketRepo.save(ticket);
    }

    public List<Ticket> findByEventId(int eventId) {
        return ticketRepo.findByEventId(eventId);
    }
}
