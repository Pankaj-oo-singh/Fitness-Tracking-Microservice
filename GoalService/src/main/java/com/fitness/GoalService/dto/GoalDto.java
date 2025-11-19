package com.fitness.GoalService.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GoalDto {
    private Long id;
    private Long userId;
    private String name;
    private String description;
    private Boolean completed;
}