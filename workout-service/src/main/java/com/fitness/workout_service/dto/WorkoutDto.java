package com.fitness.workout_service.dto;


import lombok.*;

import java.time.LocalDateTime;
import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WorkoutDto {
    private Long id;
    private String name;
    private String description;
    private Long userId;
    private List<ExerciseDto> exercises;
}