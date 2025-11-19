package com.fitness.Notification_Service.controller;


import com.fitness.Notification_Service.entities.Notification;
import com.fitness.Notification_Service.service.NotificationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/notifications")
@RequiredArgsConstructor
@Slf4j
public class NotificationController {

    private final NotificationService service;

    @GetMapping
    public ResponseEntity<List<Notification>> getUserNotifications(
            @RequestHeader("X-User-Id") Long userId) {
        log.info("Fetching notifications for user: {}", userId);
        return ResponseEntity.ok(service.getUserNotifications(userId));
    }

    @GetMapping("/unread")
    public ResponseEntity<List<Notification>> getUnreadNotifications(
            @RequestHeader("X-User-Id") Long userId) {
        log.info("Fetching unread notifications for user: {}", userId);
        // You'll need to implement this method in repository
        return ResponseEntity.ok(service.getUserNotifications(userId)); // Placeholder
    }

    @PutMapping("/{notificationId}/read")
    public ResponseEntity<Map<String, String>> markAsRead(
            @RequestHeader("X-User-Id") Long userId,
            @PathVariable Long notificationId) {
        log.info("Marking notification {} as read for user: {}", notificationId, userId);
        service.markAsRead(notificationId, userId);
        return ResponseEntity.ok(Map.of("message", "Notification marked as read"));
    }

    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> health() {
        return ResponseEntity.ok(Map.of(
                "status", "UP",
                "service", "notification-service",
                "timestamp", java.time.LocalDateTime.now().toString()
        ));
    }
}