package com.fitness.UserService.dto;


import com.fitness.UserService.entities.User;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Set;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDto {
        private Long id;
        private String name;
        private String email;
        private String gender;
        private int age;
        private double height;
        private double weight;
}

