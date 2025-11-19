package com.fitness.Notification_Service.repository;


import com.fitness.Notification_Service.entities.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
    List<Notification> findByUserId(Long userId);
    // New method to get notifications ordered by creation time
    List<Notification> findByUserIdOrderByCreatedAtDesc(Long userId);

    // Get unread notifications
    List<Notification> findByUserIdAndIsReadFalse(Long userId);

    // Count unread notifications
    @Query("SELECT COUNT(n) FROM Notification n WHERE n.userId = :userId AND n.isRead = false")
    Long countUnreadNotifications(@Param("userId") Long userId);
}
