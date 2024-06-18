package com.eventbooking.eventservice.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Table(name = "event")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Event {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "address")
    private String address;

    @Column(name = "time")
    private String time;

    @Column(name = "category")
    private String category;

    @Column(name = "description")
    private String description;

   @Column(name = "organizer")
    private String organizer;

    @Column(name = "organizer_des")
    private String organizer_des;
}
