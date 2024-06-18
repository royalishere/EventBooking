package com.eventbooking.feedbackservice.repository;

import com.eventbooking.feedbackservice.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface FeedbackRepo extends JpaRepository<Feedback, Integer> {

    //find by user id
    @Query("SELECT f FROM Feedback f WHERE f.userId = :userId")
    List<Feedback> findByUserId(int userId);

    //find by event id
    @Query("SELECT f FROM Feedback f WHERE f.eventId = :eventId")
    List<Feedback> findByEventId(int eventId);
}
