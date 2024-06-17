package com.eventbooking.userservice.model;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Table(name = "organizer")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Organizer {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name ="user_id")
    private int userId;

    @Column(name = "company_name")
    private String companyName;

    @Column(name = "company_information")
    private String companyInformation;

    @Column(name = "BC_Code")
    private String BCCode;

    @Column(name = "status")
    private String status;
}
