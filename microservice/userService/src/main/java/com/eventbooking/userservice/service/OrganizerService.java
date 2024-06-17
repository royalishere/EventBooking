package com.eventbooking.userservice.service;

import com.eventbooking.userservice.model.Organizer;
import com.eventbooking.userservice.repository.OrganizerRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrganizerService {

     private final OrganizerRepo organizerRepo;

     public Organizer createOrganizer(Organizer organizer) {
         return organizerRepo.save(organizer);
     }

     public Organizer getById(int id) {
         return organizerRepo.findById(id).orElse(null);
     }

     public Organizer getByUserId(int userId) {
         return organizerRepo.findByUserId(userId);
     }

     public void updateOrganizer(Organizer organizer) {
         organizerRepo.save(organizer);
     }

     public void updateStatus(int id, String status) {
         Organizer organizer = getById(id);
         organizer.setStatus(status);
         organizerRepo.save(organizer);
     }
}
