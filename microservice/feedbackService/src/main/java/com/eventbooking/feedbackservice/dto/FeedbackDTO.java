package com.eventbooking.feedbackservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FeedbackDTO {

    private int eventId;

    private int userId;

    private int rating;

    private String comment;
}
