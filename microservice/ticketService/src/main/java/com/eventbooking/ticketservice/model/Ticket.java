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
    @GeneratedValue
    private int id;

    @Column(name = "eventId")
    private int eventId;

    @Column(name = "ticketAvailable")
    private int ticketAvailable;

    @Column(name = "ticketType")
    private String ticketType;

    @Column(name = "ticketPrice")
    private double ticketPrice;

}
