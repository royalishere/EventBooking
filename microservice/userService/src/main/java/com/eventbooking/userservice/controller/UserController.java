package com.eventbooking.userservice.controller;

import com.eventbooking.userservice.dto.UserDTO;
import com.eventbooking.userservice.model.User;
import com.eventbooking.userservice.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    // Gọi UserService
    private final UserService userService;

    //tạo user
    @PostMapping("/create")
    public User createUser(@RequestBody UserDTO user) {

        User newUser = new User();

        newUser.setName(user.getName());
        newUser.setPhone(user.getPhone());
        newUser.setDateOfBirth(user.getDateOfBirth());
        newUser.setEmail(user.getEmail());
        newUser.setUserType("user");

        return userService.createUser(newUser);
    }

    //lấy danh sách user
    @GetMapping("/getAll")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    //lấy user theo id
    @GetMapping("/getById")
    public ResponseEntity<?> getById(@RequestParam int id) {
        return ResponseEntity.ok(Objects.requireNonNullElse(userService.getById(id),
                "User not found"));
    }

    //cập nhật thông tin user
    @PutMapping("/update")
    public String updateUser(@RequestBody UserDTO user, @RequestParam int id) {

        User updateUser = userService.getById(id);

        if (updateUser == null) {
            return "User not found";
        }

        updateUser.setName(user.getName());
        updateUser.setPhone(user.getPhone());
        updateUser.setDateOfBirth(user.getDateOfBirth());
        updateUser.setEmail(user.getEmail());

        try{
            userService.updateUser(updateUser);
        } catch (Exception e) {
            return "Update failed";
        }

        return "Update success";
    }
}
