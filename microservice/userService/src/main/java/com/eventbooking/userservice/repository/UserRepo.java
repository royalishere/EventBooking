package com.eventbooking.userservice.repository;

import com.eventbooking.userservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer> {
    User findByEmail(String email);
}
