package com.eventbooking.ticketservice.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Data
@Table(name = "booking_history")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingHistory {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "event_id")
    private int eventId;

    @Column(name = "ticket_id")
    private int ticketId;

    @Column(name = "user_id")
    private int userId;

    @Column(name = "booking_date")
    private Date bookingDate;

    @Column(name = "booking_status")
    private String bookingStatus;

    @Column(name = "Total_price")
    private double totalPrice;

    @Column(name = "ticket_count")
    private int ticketCount;
}
