package com.eventbooking.ticketservice.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Table(name = "ticket")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Ticket {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "event_id")
    private int eventId;

    @Column(name = "ticket_available")
    private int ticketAvailable;

    @Column(name = "ticket_type")
    private String ticketType;

    @Column(name = "ticket_price")
    private double ticketPrice;

}
