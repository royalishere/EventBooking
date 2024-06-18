package com.eventbooking.eventservice.service;

import com.eventbooking.eventservice.model.Voucher;
import com.eventbooking.eventservice.repository.VoucherRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class VoucherService {

    private final VoucherRepo voucherRepo;

    //create voucher
    public Voucher createVoucher (Voucher voucher) {
        return voucherRepo.save(voucher);
    }

    //get list of all vouchers
    public List<Voucher> getAllVouchers() {
        return voucherRepo.findAll();
    }

    //get voucher by id
    public Voucher getById(int id) {
        return voucherRepo.findById(id).orElse(null);
    }

    //update voucher
    public void updateVoucher(Voucher voucher) {
        voucherRepo.save(voucher);
    }

    //delete voucher
    public void deleteVoucher(int id) {
        voucherRepo.deleteById(id);
    }

    //update voucher usage_count
    public Voucher updateVoucherUsageCount(int id) {
        Voucher voucher = voucherRepo.findById(id).orElse(null);
        if (voucher != null) {
            voucher.setUsage_count(voucher.getUsage_count() + 1);
            voucherRepo.save(voucher);
        }
        return (voucher);
    }

    //set voucher status to expired
    public void setVoucherExpired() {
        voucherRepo.setVoucherExpired();
    }

    //update voucher status
    public void updateVoucherStatus(int id, String status) {
        Voucher voucher = voucherRepo.findById(id).orElse(null);
        if (voucher != null) {
            voucher.setStatus(status);
            voucherRepo.save(voucher);
        }
    }
}
