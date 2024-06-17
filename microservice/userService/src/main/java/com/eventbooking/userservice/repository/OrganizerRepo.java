package com.eventbooking.userservice.repository;

import com.eventbooking.userservice.model.Organizer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface OrganizerRepo extends JpaRepository<Organizer, Integer> {
    @Query("SELECT o FROM Organizer o WHERE o.userId = :userId")
    Organizer findByUserId(@Param("userId") int userId);
}
