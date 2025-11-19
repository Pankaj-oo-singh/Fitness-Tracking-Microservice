package com.fitness.Notification_Service.service;



import com.fitness.Notification_Service.dto.NotificationDto;
import com.fitness.Notification_Service.entities.Notification;
import com.fitness.Notification_Service.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class NotificationService {

    private final NotificationRepository repository;

    public void createNotification(NotificationDto dto) {
        try {
            Notification notification = Notification.builder()
                    .userId(dto.getUserId())
                    .title(dto.getTitle())
                    .message(dto.getMessage())
                    .isRead(false)
                    .build();

            Notification saved = repository.save(notification);
            log.info("💾 Notification saved with ID: {} for user: {}",
                    saved.getId(), saved.getUserId());

        } catch (Exception e) {
            log.error("❌ Failed to save notification for user {}: {}",
                    dto.getUserId(), e.getMessage(), e);
            throw new RuntimeException("Failed to save notification", e);
        }
    }

    public void createNotification(Long userId, NotificationDto dto) {
        // Overloaded method for backward compatibility
        createNotification(dto);
    }

    public List<Notification> getUserNotifications(Long userId) {
        log.info("Fetching notifications for user: {}", userId);
        return repository.findByUserIdOrderByCreatedAtDesc(userId);
    }

    // Additional method to mark notification as read
    public void markAsRead(Long notificationId, Long userId) {
        Notification notification = repository.findById(notificationId)
                .orElseThrow(() -> new RuntimeException("Notification not found"));

        if (!notification.getUserId().equals(userId)) {
            throw new RuntimeException("Unauthorized access to notification");
        }

        notification.setIsRead(true);
        repository.save(notification);
        log.info("✅ Notification {} marked as read for user: {}", notificationId, userId);
    }
}