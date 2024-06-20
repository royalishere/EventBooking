package com.eventbooking.eventservice.controller;

import com.eventbooking.eventservice.dto.EventDTO;
import com.eventbooking.eventservice.model.Event;
import com.eventbooking.eventservice.service.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/event")
@RequiredArgsConstructor
public class EventController {

    private final EventService eventService;

    @PostMapping("/create")
    //create event
    public Event createEvent(@RequestBody EventDTO event)
    {
        Event newEvent = new Event();

        newEvent.setName(event.getName());
        newEvent.setAddress(event.getAddress());
        newEvent.setTime(event.getTime());
        newEvent.setCategory(event.getCategory());
        newEvent.setDescription(event.getDescription());
        newEvent.setOrganizer(event.getOrganizer());
        newEvent.setOrganizer_des(event.getOrganizer_des());

        return eventService.createEvent(newEvent);
    }

    @GetMapping("/getAll")
    //get list of all events
    public List<Event> getAllEvents()
    {
        return eventService.getAllEvents();
    }

    @GetMapping("/getById")
    //get event by id
    public ResponseEntity<?> getEventById(@RequestParam int id) {
        return ResponseEntity.ok(Objects.requireNonNullElse(eventService.getById(id),
                "Event not found"));
    }

    @PutMapping("/update")
    //update event
    public String updateEvent(@RequestBody EventDTO event, @RequestParam int id) {

        Event updateEvent = eventService.getById(id);

        if (updateEvent == null) {
            return "User not found";
        }

        updateEvent.setName(event.getName());
        updateEvent.setAddress(event.getAddress());
        updateEvent.setTime(event.getTime());
        updateEvent.setCategory(event.getCategory());
        updateEvent.setDescription(event.getDescription());
        updateEvent.setOrganizer(event.getOrganizer());
        updateEvent.setOrganizer_des(event.getOrganizer_des());

        try{
            eventService.updateEvent(updateEvent);
        } catch (Exception e) {
            return "Update failed";
        }

        return "Update success";
    }

    @DeleteMapping("/delete")
    //delete event
    public String deleteEvent(@RequestParam int id) {
        Event deleteEvent = eventService.getById(id);

        if (deleteEvent == null) {
            return "Event not found";
        }

        try {
            eventService.deleteEvent(id);
        } catch (Exception e) {
            return "Delete failed";
        }
        return "Delete success";
    }

    @GetMapping("?category={category}")
    //get event by category
    public List<Event> getEventByCategory(@PathVariable String category) {
        return eventService.getEventByCategory(category);
    }

    @GetMapping("?organizer={organizer}")
    //get event by organizer
    public List<Event> getEventByOrganizer(@PathVariable String organizer) {
        return eventService.getEventByOrganizer(organizer);
    }
}
