package com.eventbooking.feedbackservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class updateFeedbackDTO {

    private int id;

    private int rating;

    private String comment;

    private String answer;

}
