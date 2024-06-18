package com.eventbooking.eventservice.repository;

import com.eventbooking.eventservice.model.Voucher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.util.List;

public interface VoucherRepo extends JpaRepository<Voucher, Integer> {

    @Query("UPDATE Voucher v SET v.status = 'expired' where v.end_date < CURRENT_DATE()")
    void setVoucherExpired();
}