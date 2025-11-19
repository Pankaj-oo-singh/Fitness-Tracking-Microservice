package com.fitness.Notification_Service.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NotificationDto {
    private Long userId;
    private String title;
    private String message;

    private LocalDateTime createdAt = LocalDateTime.now();


    private Boolean isRead = false;
}