package com.eventbooking.userservice.controller;

import com.eventbooking.userservice.dto.OrganizerDTO;
import com.eventbooking.userservice.model.Organizer;
import com.eventbooking.userservice.service.OrganizerService;
import com.eventbooking.userservice.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@RequiredArgsConstructor
@RequestMapping("/organizer")
@CrossOrigin(origins = "http://localhost:5000")
public class OrganizerController {

    private final OrganizerService organizerService;
    private final UserService userService;

    @PostMapping("/create")
    public Organizer createOrganizer(@RequestBody OrganizerDTO organizer) {

        Organizer newOrganizer = new Organizer();

        newOrganizer.setCompanyName(organizer.getCompanyName());
        newOrganizer.setCompanyInformation(organizer.getCompanyInformation());
        newOrganizer.setBCCode(organizer.getBCCode());
        newOrganizer.setUserId(organizer.getUserId());
        newOrganizer.setStatus("Pending");

        return organizerService.createOrganizer(newOrganizer);
    }

    @GetMapping("/getById")
    public Organizer getById(@RequestParam int id) {
        return organizerService.getById(id);
    }

    @GetMapping("/getByUserId")
    public Organizer getByUserId(@RequestParam int id) {
        try {
            return organizerService.getByUserId(id);
        }
        catch (Exception e) {
            return null;
        }
    }

    @PutMapping("/update")
    public String updateOrganizer(@RequestBody OrganizerDTO organizer, @RequestParam int id) {

        Organizer updateOrganizer = organizerService.getById(id);

        if (updateOrganizer == null) {
            return "Organizer not found";
        }

        updateOrganizer.setCompanyName(organizer.getCompanyName());
        updateOrganizer.setCompanyInformation(organizer.getCompanyInformation());
        updateOrganizer.setBCCode(organizer.getBCCode());

        try {
            organizerService.updateOrganizer(updateOrganizer);
        } catch (Exception e) {
            return "Update failed";
        }

        return "Update successful";
    }

    @PutMapping("/updateStatus")
    public String updateStatus(@RequestParam int id, @RequestParam String status) {
        try {
            organizerService.updateStatus(id, status);
            int userId = organizerService.getById(id).getUserId();

            if (status.equals("Approved")) {
                userService.changeUserType(userId, "organizer");
                return "Organizer approved";
            }
            else if (status.equals("Lock")){
                return "Organizer Locked";
            }
            else
            {
                userService.changeUserType(userId, "user");
                return "Organizer rejected";
            }

        } catch (Exception e) {
            return "Update failed";
        }
    }
}
