package com.eventbooking.userservice.service;

import com.eventbooking.userservice.model.User;
import com.eventbooking.userservice.repository.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    //gọi UserRepo
    private final UserRepo userRepo;

    //tạo user
    public User createUser(User user) {
        return userRepo.save(user);
    }

    //lấy danh sách user
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    //lấy user theo id
    public User getById(int id) {
        return userRepo.findById(id).orElse(null);
    }

    //cập nhật thông tin user
    public void updateUser(User user) {
        userRepo.save(user);
    }

    //xóa user
    public void deleteUser(int id) {
        userRepo.deleteById(id);
    }

    //đổi loại user
    public void changeUserType(int id, String userType) {
        User user = getById(id);
        user.setUserType(userType);
        userRepo.save(user);
    }
}
