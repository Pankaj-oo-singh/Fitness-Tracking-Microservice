package com.fitness.Diet_Service.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MealDto {
    private Long id;
    private String name;
    private String description;
    private int calories;
}