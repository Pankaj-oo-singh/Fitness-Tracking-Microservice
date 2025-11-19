package com.fitness.Diet_Service.dto;

import lombok.*;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DietPlanDto {
    private Long id;
    private String name;
    private String description;
    private Long userId;
    private List<MealDto> meals;
}