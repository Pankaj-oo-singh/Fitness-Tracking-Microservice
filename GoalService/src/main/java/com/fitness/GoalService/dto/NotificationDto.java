package com.fitness.GoalService.dto;


import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NotificationDto {
    private Long userId;
    private String title;
    private String message;
}