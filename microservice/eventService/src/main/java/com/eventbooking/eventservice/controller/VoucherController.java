package com.eventbooking.eventservice.controller;

import com.eventbooking.eventservice.dto.VoucherDTO;
import com.eventbooking.eventservice.model.Event;
import com.eventbooking.eventservice.model.Voucher;
import com.eventbooking.eventservice.service.VoucherService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/voucher")
@RequiredArgsConstructor
public class VoucherController {

    private final VoucherService voucherService;

    @PostMapping("/create")
    //create voucher
    public Voucher createVoucher(@RequestBody VoucherDTO voucher) {

        Voucher newVoucher = new Voucher();

        newVoucher.setCode(voucher.getCode());
        newVoucher.setDescription(voucher.getDescription());
        newVoucher.setDiscount_type(voucher.getDiscount_type());
        newVoucher.setDiscount_value(String.valueOf(voucher.getDiscount_value()));
        newVoucher.setEnd_date(voucher.getEnd_date());
        newVoucher.setStart_date(voucher.getStart_date());
        newVoucher.setUsage_count(voucher.getUsage_count());
        newVoucher.setUsage_limit(voucher.getUsage_limit());
        newVoucher.setStatus(voucher.getStatus());

        return voucherService.createVoucher(newVoucher);
    }

    //get list of all vouchers
    @GetMapping("/getAll")
    public List<Voucher> getAllVouchers() {
        return voucherService.getAllVouchers();
    }

    //get voucher by id
    @GetMapping("/getById")
    public ResponseEntity<?> getVoucherById(@RequestParam int id) {
        return ResponseEntity.ok(Objects.requireNonNullElse(voucherService.getById(id),
                "Voucher not found"));
    }

    //update voucher
    @PutMapping("/update")
    public String updateVoucher(@RequestBody VoucherDTO voucher, @RequestParam int id) {

        Voucher updateVoucher = voucherService.getById(id);

        if (updateVoucher == null) {
            return "User not found";
        }

        updateVoucher.setCode(voucher.getCode());
        updateVoucher.setDescription(voucher.getDescription());
        updateVoucher.setDiscount_type(voucher.getDiscount_type());
        updateVoucher.setDiscount_value(String.valueOf(voucher.getDiscount_value()));
        updateVoucher.setEnd_date(voucher.getEnd_date());
        updateVoucher.setStart_date(voucher.getStart_date());
        updateVoucher.setUsage_count(voucher.getUsage_count());
        updateVoucher.setUsage_limit(voucher.getUsage_limit());
        updateVoucher.setStatus(voucher.getStatus());

        try{
            voucherService.updateVoucher(updateVoucher);
        } catch (Exception e) {
            return "Update failed";
        }

        return "Update success";
    }

    //delete voucher
    @DeleteMapping("/delete")
    public String deleteVoucher(@RequestParam int id) {

        Voucher deleteVoucher = voucherService.getById(id);

        if (deleteVoucher == null) {
            return "Voucher not found";
        }

        voucherService.deleteVoucher(id);
        return "Voucher deleted successfully";
    }

    //update voucher usage_count
    @PutMapping("/updateUsageCount")
    public String updateVoucherUsageCount(@RequestParam int id) {
        if(voucherService.updateVoucherUsageCount(id) != null) {
            return "Updated successfully";
        }
        return "Updated failed";
    }
}
