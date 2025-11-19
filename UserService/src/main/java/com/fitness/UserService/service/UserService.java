package com.fitness.UserService.service;




import com.fitness.UserService.dto.*;
import com.fitness.UserService.entities.FitnessData;
import com.fitness.UserService.entities.User;
import com.fitness.UserService.entities.UserProfile;
import com.fitness.UserService.exception.ResourceNotFoundException;
import com.fitness.UserService.repositories.UserProfileRepository;
import com.fitness.UserService.repositories.UserRepository;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor


public class UserService {



    private final UserRepository userRepository; // Local DB
//    private final AuthServiceClient authServiceClient; // Feign client to auth-service
    private final ModelMapper modelMapper = new ModelMapper();
    /**
     * Fetch user profile by ID (merged from auth-service and local DB)
     */
//    public UserDto getUserById(Long userId) {
//        // 1. Fetch global user info from auth-service
//        UserDto authUser = authServiceClient.getUserById(userId);
//
//        // 2. Fetch local user info from user-service DB
//        userRepository.findById(userId).ifPresent(user -> {
//            authUser.setHeight(user.getHeight());
//            authUser.setWeight(user.getWeight());
//            authUser.setName(user.getName() != null ? user.getName() : authUser.getName());
//        });
//
//        return authUser;
//    }

    /**
     * Update user profile in local DB and return merged DTO
     */
//    public UserDto updateProfile(Long userId, UpdateProfileDto updateProfileDto) {
//        // Fetch existing user or create a new one
//        User user = userRepository.findById(userId).orElseGet(() -> {
//            User newUser = new User();
//            newUser.setId(userId);
//            // Copy email from auth-service
//            UserDto authUserDto = authServiceClient.getUserById(userId);
//            newUser.setEmail(authUserDto.getEmail());
//            return newUser;
//        });
//
//        // Update fields if provided
//        Optional.ofNullable(updateProfileDto.getName()).ifPresent(user::setName);
//        Optional.ofNullable(updateProfileDto.getHeight()).ifPresent(user::setHeight);
//        Optional.ofNullable(updateProfileDto.getWeight()).ifPresent(user::setWeight);
//
//        userRepository.save(user);
//
//        // Return combined DTO
//        UserDto authUser = authServiceClient.getUserById(userId);
//        authUser.setHeight(user.getHeight());
//        authUser.setWeight(user.getWeight());
//        authUser.setName(user.getName() != null ? user.getName() : authUser.getName());
//
//        return authUser;
//    }


    public UserDto getMyProfile(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id " + userId));
        return modelMapper.map(user, UserDto.class);
    }


    public UserDto updateProfile(Long userId, UserDto dto) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id " + userId));

        user.setName(dto.getName());
        user.setAge(dto.getAge());
        user.setGender(dto.getGender());
        user.setHeight(dto.getHeight());
        user.setWeight(dto.getWeight());

        userRepository.save(user);
        return modelMapper.map(user, UserDto.class);
    }

    public void createUserFromAuth(UserDto dto) {
        if (userRepository.findById(dto.getId()).isPresent()) return;
        User user=modelMapper.map(dto,User.class);
        System.out.println(user);

        userRepository.save(user);
    }
}
