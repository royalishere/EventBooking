package com.eventbooking.eventservice.service;

import com.eventbooking.eventservice.repository.EventRepo;
import lombok.RequiredArgsConstructor;
import com.eventbooking.eventservice.model.Event;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EventService {

    private final EventRepo eventRepo;

    //create event
    public Event createEvent (Event event) {
        return eventRepo.save(event);
    }

    //get list of all events
    public List<Event> getAllEvents() {
        return eventRepo.findAll();
    }

    //get event by id
    public Event getById(int id) {
        return eventRepo.findById(id).orElse(null);
    }

    //update event
    public void updateEvent(Event event) {
        eventRepo.save(event);
    }

    //delete event
    public void deleteEvent(int id) {
        eventRepo.deleteById(id);
    }

    //get event by category
    public List<Event> getEventByCategory(String category) {
        return eventRepo.findByCategory(category);
    }

    //get event by organizer
    public List<Event> getEventByOrganizer(String organizer) {
        return eventRepo.findByOrganizer(organizer);
    }
}
