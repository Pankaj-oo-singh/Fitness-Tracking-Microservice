package com.fitness.Notification_Service.service;



import com.fitness.Notification_Service.dto.NotificationDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class NotificationKafkaListener {

    private final NotificationService service;

    @KafkaListener(topics = "notifications", groupId = "notification-group")
    public void consume(NotificationDto dto) {
        try {
            log.info("📩 Received notification for user: {} - Title: '{}'",
                    dto.getUserId(), dto.getTitle());

             service.createNotification(dto);
            log.info("✅ Notification saved successfully for user: {}", dto.getUserId());

        } catch (Exception e) {
            log.error("❌ Error processing notification for user {}: {}",
                    dto.getUserId(), e.getMessage(), e);
            throw e; // Re-throw to trigger retry mechanism
        }
    }
}