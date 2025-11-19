package com.fitness.UserService.controller;


import com.fitness.UserService.dto.*;
import com.fitness.UserService.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@Slf4j
public class UserController {
    private final UserService userService;

//    @GetMapping("/{id}")
//    public ResponseEntity<UserDto> getUserById(@PathVariable Long id) {
//        return ResponseEntity.ok(userService.getUserById(id));
//    }
//
//    @PutMapping("/{id}")
//    public ResponseEntity<UserDto> updateProfile(@PathVariable Long id, @RequestBody UpdateProfileDto updateProfileDto) {
//        return ResponseEntity.ok(userService.updateProfile(id, updateProfileDto));
//    }
    @GetMapping("/me")
    public ResponseEntity<UserDto> getMyProfile(@RequestHeader("X-User-Id") Long userId) {
        return ResponseEntity.ok(userService.getMyProfile(userId));
    }

    // Update logged-in user profile
    @PutMapping("/me")
    public ResponseEntity<UserDto> updateProfile(
            @RequestHeader("X-User-Id") Long userId,
            @RequestBody UserDto dto) {
        return ResponseEntity.ok(userService.updateProfile(userId, dto));
    }
    @PostMapping("/sync")
    public ResponseEntity<Void> createUserFromAuth(@RequestBody UserDto dto) {
        userService.createUserFromAuth(dto);
        return ResponseEntity.ok().build();
    }
}