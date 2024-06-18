package com.eventbooking.eventservice.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.dialect.function.TruncFunction;

import java.util.Date;

@Entity
@Data
@Table(name = "voucher")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Voucher {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "code")
    private String code;

    @Column(name = "description")
    private String description;

    @Column(name = "discount_type")
    private String discount_type;

    @Column(name = "discount_value")
    private String discount_value;

    @Column(name = "start_date")
    private Date start_date;

    @Column(name = "end_date")
    private Date end_date;

    @Column(name = "usage_limit")
    private int usage_limit;

    @Column(name = "usage_count")
    private int usage_count;

    @Column(name = "status")
    private String status;
}
