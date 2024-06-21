package com.eventbooking.feedbackservice.controller;

import com.eventbooking.feedbackservice.dto.FeedbackDTO;
import com.eventbooking.feedbackservice.dto.updateFeedbackDTO;
import com.eventbooking.feedbackservice.model.Feedback;
import com.eventbooking.feedbackservice.service.FeedbackService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/feedback")
@CrossOrigin(origins = "http://localhost:5000")
public class FeedbackController {

    private final FeedbackService feedbackService;

    @PostMapping("/create")
    public Feedback createFeedback(@RequestBody FeedbackDTO feedback) {

        Feedback newFeedback = new Feedback();
        newFeedback.setEventId(feedback.getEventId());
        newFeedback.setUserId(feedback.getUserId());
        newFeedback.setRating(feedback.getRating());
        newFeedback.setComment(feedback.getComment());
        newFeedback.setAnswer(null);

        return feedbackService.createFeedback(newFeedback);
    }

    @GetMapping("/getByUserId")
    public List<Feedback> getByUserId(@RequestParam int userId) {
        return feedbackService.getByUserId(userId);
    }

    @GetMapping("/getByEventId")
    public List<Feedback> getByEventId(@RequestParam int eventId) {
        return feedbackService.getByEventId(eventId);
    }

    @GetMapping("/getAll")
    public List<Feedback> getAllFeedback() {
        return feedbackService.getAllFeedback();
    }

    @DeleteMapping("/delete")
    public String deleteFeedback(@RequestParam int id) {
        try {
            if (feedbackService.getById(id) == null) {
                return "feedback not found";
            }
            feedbackService.deleteFeedback(id);
            return "delete feedback successfully";
        }
        catch (NullPointerException e) {
            return "feedback not found";
        }
    }

    @PutMapping("/changeRating")
    public String changeRating(@RequestBody updateFeedbackDTO updateDTO) {

        Feedback feedback = feedbackService.getById(updateDTO.getId());

        if (feedback == null) {
            return "feedback not found";
        }
        try {
            feedback.setRating(updateDTO.getRating());
            feedback.setComment(updateDTO.getComment());
            feedbackService.updateFeedback(feedback);

            return "change rating successfully";
        }
        catch (NullPointerException e) {
            return "change rating failed";
        }
    }

    @PutMapping("/answer")
    public String answerFeedback(@RequestBody updateFeedbackDTO updateDTO) {

        Feedback feedback = feedbackService.getById(updateDTO.getId());

        if (feedback == null) {
            return "feedback not found";
        }
        try {
            feedback.setAnswer(updateDTO.getAnswer());
            feedbackService.updateFeedback(feedback);

            return "answer feedback successfully";
        }
        catch (NullPointerException e) {
            return "answer feedback failed";
        }
    }
}
