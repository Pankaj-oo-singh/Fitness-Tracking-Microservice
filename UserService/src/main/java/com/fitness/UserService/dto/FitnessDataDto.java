package com.fitness.UserService.dto;


import lombok.Data;
import java.math.BigDecimal;

@Data
public class FitnessDataDto {
    private Long userId;
    private BigDecimal height;
    private BigDecimal weight;
    private BigDecimal bmi;
    private String fitnessLevel;
    private String goal;
    private Integer targetWeight;
    private Integer dailyCalorieTarget;
    private Integer dailyStepTarget;
}