package com.fitness.workout_service.dto;


import com.fitness.workout_service.enums.Role;
import lombok.Data;

import java.util.Set;

@Data
public class UserDto {

    private Long id;
    private String name;
    private String email;
    private String gender;
    private int age;
    private double height;
    private double weight;
}
