package com.fitness.UserService.dto;

import com.fitness.UserService.entities.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
//
//import java.time.LocalDate;
//import java.util.Set;
//
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//public class CreateUserRequest {
//
//    @NotBlank
//    @Size(max = 100)
//    private String name;
//
//    @NotBlank
//    @Email
//    private String email;
//
//    @NotBlank
//    @Size(min = 6)
//    private String password;
//
//    private String phoneNumber;
//    private LocalDate dateOfBirth;
//    private User.Gender gender;
//    private Double height;
//    private Double weight;
//    private User.FitnessLevel fitnessLevel;
//    private Set<UserDto.Role> roles;
//}