package com.eventbooking.feedbackservice.service;

import com.eventbooking.feedbackservice.model.Feedback;
import com.eventbooking.feedbackservice.repository.FeedbackRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FeedbackService {

    private final FeedbackRepo feedbackRepo;

    public Feedback createFeedback(Feedback feedback) {
        return feedbackRepo.save(feedback);
    }

    public List<Feedback> getByUserId(int userId) {
        return feedbackRepo.findByUserId(userId);
    }

    public List<Feedback> getByEventId(int eventId) {
        return feedbackRepo.findByEventId(eventId);
    }

    public List<Feedback> getAllFeedback() {
        return feedbackRepo.findAll();
    }

    public Feedback getById(int id) {
        return feedbackRepo.findById(id).orElse(null);
    }

    public void deleteFeedback(int id) {
        feedbackRepo.deleteById(id);
    }

    public Feedback updateFeedback(Feedback feedback) {
        return feedbackRepo.save(feedback);
    }
}
