package com.fitness.UserService.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserProfileDto {
    private Long userId;           // User ID from auth-service
    private String name;           // Name from auth-service
    private Double height;         // Height from auth-service
    private Double weight;         // Weight from auth-service

    private String bio;            // Optional profile info
    private String fitnessGoals;   // Optional profile info
    private String dietaryPreferences;
    private String allergies;
    private String medicalConditions;
    private String workoutPreferences;

    private Integer targetWeight;      // in kg
    private Integer dailyCalorieTarget;
    private Integer proteinTarget;     // in grams
    private Integer carbTarget;        // in grams
    private Integer fatTarget;         // in grams
}