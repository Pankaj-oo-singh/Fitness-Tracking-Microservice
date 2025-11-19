package com.fitness.GoalService.service;


import com.fitness.GoalService.dto.GoalDto;
import com.fitness.GoalService.dto.NotificationDto;
import com.fitness.GoalService.entities.Goal;
import com.fitness.GoalService.repository.GoalRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
//
//@Service
//@RequiredArgsConstructor
//public class GoalService {
//
//    private final GoalRepository goalRepository;
//    private final ModelMapper modelMapper;
//    private final KafkaTemplate<String, NotificationDto> kafkaTemplate;
//    private static final String TOPIC = "notifications";
//
//    public GoalDto createGoal(Long userId, GoalDto dto) {
//        Goal goal = Goal.builder()
//                .name(dto.getName())
//                .description(dto.getDescription())
//                .userId(userId)
//                .completed(false)
//                .build();
//        Goal saved = goalRepository.save(goal);
//        NotificationDto notification = NotificationDto.builder()
//                .userId(userId)
//                .title("New Goal Created")
//                .message("You set a new goal: " + dto.getName())
//                .build();
//
//        kafkaTemplate.send(TOPIC, notification);
//        return modelMapper.map(saved, GoalDto.class);
//    }
//
//    public List<GoalDto> getUserGoals(Long userId) {
//        return goalRepository.findByUserId(userId).stream()
//                .map(goal -> modelMapper.map(goal, GoalDto.class))
//                .collect(Collectors.toList());
//    }
//
//    public GoalDto updateGoal(Long userId, Long goalId, GoalDto dto) {
//        Goal goal = goalRepository.findById(goalId)
//                .orElseThrow(() -> new RuntimeException("Goal not found"));
//        if(!goal.getUserId().equals(userId)) throw new RuntimeException("Unauthorized");
//
//        goal.setName(dto.getName());
//        goal.setDescription(dto.getDescription());
//        goal.setCompleted(dto.getCompleted());
//        Goal updated = goalRepository.save(goal);
//        return modelMapper.map(updated, GoalDto.class);
//    }
//
//    public void deleteGoal(Long userId, Long goalId) {
//        Goal goal = goalRepository.findById(goalId)
//                .orElseThrow(() -> new RuntimeException("Goal not found"));
//        if(!goal.getUserId().equals(userId)) throw new RuntimeException("Unauthorized");
//
//        goalRepository.delete(goal);
//    }
//}


@Service
@RequiredArgsConstructor
public class GoalService {

    private final GoalRepository goalRepository;
    private final ModelMapper modelMapper;
    private final KafkaTemplate<String, NotificationDto> kafkaTemplate;
    private static final String TOPIC = "notifications";

    // ✅ Create Goal + send Kafka notification
    public GoalDto createGoal(Long userId, GoalDto dto) {
        Goal goal = Goal.builder()
                .name(dto.getName())
                .description(dto.getDescription())
                .userId(userId)
                .completed(false)
                .build();

        Goal saved = goalRepository.save(goal);

        // Send notification
        NotificationDto notification = NotificationDto.builder()
                .userId(userId)
                .title("🎯 New Goal Created")
                .message("You set a new goal: " + saved.getName())
                .build();
        kafkaTemplate.send(TOPIC, notification);

        return modelMapper.map(saved, GoalDto.class);
    }

    // ✅ Get all user goals
    public List<GoalDto> getUserGoals(Long userId) {
        return goalRepository.findByUserId(userId).stream()
                .map(goal -> modelMapper.map(goal, GoalDto.class))
                .collect(Collectors.toList());
    }

    // ✅ Update Goal + send notification if completed or updated
    public GoalDto updateGoal(Long userId, Long goalId, GoalDto dto) {
        Goal goal = goalRepository.findById(goalId)
                .orElseThrow(() -> new RuntimeException("Goal not found"));

        if (!goal.getUserId().equals(userId))
            throw new RuntimeException("Unauthorized");

        boolean wasCompleted = goal.getCompleted();
        goal.setName(dto.getName());
        goal.setDescription(dto.getDescription());
        goal.setCompleted(dto.getCompleted());

        Goal updated = goalRepository.save(goal);

        // Send notification depending on what changed
        NotificationDto notification;

        if (!wasCompleted && updated.getCompleted()) {
            notification = NotificationDto.builder()
                    .userId(userId)
                    .title("🏆 Goal Completed!")
                    .message("Congratulations! You have completed your goal: " + updated.getName())
                    .build();
        } else {
            notification = NotificationDto.builder()
                    .userId(userId)
                    .title("✏️ Goal Updated")
                    .message("Your goal '" + updated.getName() + "' was updated successfully.")
                    .build();
        }

        kafkaTemplate.send(TOPIC, notification);

        return modelMapper.map(updated, GoalDto.class);
    }

    // ✅ Delete Goal + send Kafka notification
    public void deleteGoal(Long userId, Long goalId) {
        Goal goal = goalRepository.findById(goalId)
                .orElseThrow(() -> new RuntimeException("Goal not found"));

        if (!goal.getUserId().equals(userId))
            throw new RuntimeException("Unauthorized");

        goalRepository.delete(goal);

        // Send notification
        NotificationDto notification = NotificationDto.builder()
                .userId(userId)
                .title("🗑️ Goal Deleted")
                .message("Your goal '" + goal.getName() + "' has been deleted.")
                .build();
        kafkaTemplate.send(TOPIC, notification);
    }
}