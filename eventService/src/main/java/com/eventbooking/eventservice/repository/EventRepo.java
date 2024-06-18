package com.eventbooking.eventservice.repository;

import com.eventbooking.eventservice.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.util.List;

public interface EventRepo extends JpaRepository<Event, Integer> {

    @Query("SELECT e FROM Event e WHERE e.category = :category")
    List<Event> findByCategory(@Param("category") String category);

    @Query("SELECT e FROM Event e WHERE e.organizer = :organizer")
    List<Event> findByOrganizer(@Param("organizer") String organizer);
}