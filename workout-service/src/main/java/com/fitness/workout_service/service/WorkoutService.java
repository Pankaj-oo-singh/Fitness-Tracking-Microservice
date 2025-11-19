package com.fitness.workout_service.service;

import com.fitness.workout_service.dto.ExerciseDto;
import com.fitness.workout_service.dto.NotificationDto;
import com.fitness.workout_service.dto.UserDto;
import com.fitness.workout_service.dto.WorkoutDto;
import com.fitness.workout_service.entities.Exercise;
import com.fitness.workout_service.entities.Workout;

import com.fitness.workout_service.repositories.ExerciseRepository;
import com.fitness.workout_service.repositories.WorkoutRepository;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.stream.Collectors;
//
//
//@Service
//
//public class WorkoutService {
//    private final WorkoutRepository workoutRepository;
//    private final ExerciseRepository exerciseRepository;
//    private final ModelMapper modelMapper;
//    private final RestTemplate restTemplate;
//
//    public WorkoutService(WorkoutRepository workoutRepository,
//                          ExerciseRepository exerciseRepository,
//                          ModelMapper modelMapper,
//                          RestTemplate restTemplate) {
//        this.workoutRepository = workoutRepository;
//        this.exerciseRepository = exerciseRepository;
//        this.modelMapper = modelMapper;
//        this.restTemplate = restTemplate;
//    }
//
//    // Create workout
//    public WorkoutDto createWorkout(Long userId, WorkoutDto dto) {
//
////         restTemplate.getForObject("http://USER-SERVICE/users/" + userId, UserDto.class);
//
//        Workout workout = modelMapper.map(dto, Workout.class);
//        workout.setUserId(userId);
//
//        if (workout.getExercises() != null) {
//            workout.getExercises().forEach(e -> e.setWorkout(workout));
//        }
//
//        Workout saved = workoutRepository.save(workout);
//        return modelMapper.map(saved, WorkoutDto.class);
//    }
//
//    // Get all workouts of a user
//    public List<WorkoutDto> getUserWorkouts(Long userId) {
//        return workoutRepository.findByUserId(userId).stream()
//                .map(w -> modelMapper.map(w, WorkoutDto.class))
//                .collect(Collectors.toList());
//    }
//
//    // Add exercise to workout
//    public WorkoutDto addExercise(Long userId, Long workoutId, ExerciseDto dto) {
//        Workout workout = workoutRepository.findById(workoutId)
//                .orElseThrow(() -> new RuntimeException("Workout not found"));
//        if (!workout.getUserId().equals(userId)) {
//            throw new RuntimeException("Unauthorized");
//        }
//
//        Exercise exercise = modelMapper.map(dto, Exercise.class);
//        exercise.setWorkout(workout);
//        exerciseRepository.save(exercise);
//
//        return modelMapper.map(workout, WorkoutDto.class);
//    }
//}


//@Service
//public class WorkoutService {
//
//    private final WorkoutRepository workoutRepository;
//    private final ExerciseRepository exerciseRepository;
//    private final ModelMapper modelMapper;
//    private final RestTemplate restTemplate;
//    private final KafkaTemplate<String, NotificationDto> kafkaTemplate;
//
//    public WorkoutService(WorkoutRepository workoutRepository,
//                          ExerciseRepository exerciseRepository,
//                          ModelMapper modelMapper,
//                          RestTemplate restTemplate,
//                          KafkaTemplate<String, NotificationDto> kafkaTemplate) {
//        this.workoutRepository = workoutRepository;
//        this.exerciseRepository = exerciseRepository;
//        this.modelMapper = modelMapper;
//        this.restTemplate = restTemplate;
//        this.kafkaTemplate = kafkaTemplate;
//    }
//
//    // ✅ Create workout
//    public WorkoutDto createWorkout(Long userId, WorkoutDto dto) {
//        Workout workout = modelMapper.map(dto, Workout.class);
//        workout.setUserId(userId);
//
//        if (workout.getExercises() != null) {
//            workout.getExercises().forEach(e -> e.setWorkout(workout));
//        }
//
//        Workout saved = workoutRepository.save(workout);
//        WorkoutDto response = modelMapper.map(saved, WorkoutDto.class);
//
//        // ✅ Send notification via Kafka
//        NotificationDto notification = NotificationDto.builder()
//                .userId(userId)
//                .title("Workout Created 🎯")
//                .message("Your new workout '" + saved.getName() + "' has been successfully created!")
//                .build();
//
//        kafkaTemplate.send("notifications", notification);
//
//        return response;
//    }
//
//    // ✅ Get all workouts of a user
//    public List<WorkoutDto> getUserWorkouts(Long userId) {
//        return workoutRepository.findByUserId(userId).stream()
//                .map(w -> modelMapper.map(w, WorkoutDto.class))
//                .collect(Collectors.toList());
//    }
//
//    // ✅ Add exercise to workout
//    public WorkoutDto addExercise(Long userId, Long workoutId, ExerciseDto dto) {
//        Workout workout = workoutRepository.findById(workoutId)
//                .orElseThrow(() -> new RuntimeException("Workout not found"));
//        if (!workout.getUserId().equals(userId)) {
//            throw new RuntimeException("Unauthorized");
//        }
//
//        Exercise exercise = modelMapper.map(dto, Exercise.class);
//        exercise.setWorkout(workout);
//        exerciseRepository.save(exercise);
//
//        // ✅ Send notification when exercise added
//        NotificationDto notification = NotificationDto.builder()
//                .userId(userId)
//                .title("New Exercise Added 💪")
//                .message("Exercise '" + exercise.getName() + "' added to your workout '" + workout.getName() + "'.")
//                .build();
//        kafkaTemplate.send("notifications", notification);
//
//        return modelMapper.map(workout, WorkoutDto.class);
//    }
//}

@Service
@Slf4j
public class WorkoutService {

    private final WorkoutRepository workoutRepository;
    private final ExerciseRepository exerciseRepository;
    private final ModelMapper modelMapper;
    private final RestTemplate restTemplate;
    private final KafkaTemplate<String, NotificationDto> kafkaTemplate;

    public WorkoutService(WorkoutRepository workoutRepository,
                          ExerciseRepository exerciseRepository,
                          ModelMapper modelMapper,
                          RestTemplate restTemplate,
                          KafkaTemplate<String, NotificationDto> kafkaTemplate) {
        this.workoutRepository = workoutRepository;
        this.exerciseRepository = exerciseRepository;
        this.modelMapper = modelMapper;
        this.restTemplate = restTemplate;
        this.kafkaTemplate = kafkaTemplate;
    }

    // ✅ Create workout
    public WorkoutDto createWorkout(Long userId, WorkoutDto dto) {
        log.info("Creating workout for user: {}", userId);

        Workout workout = modelMapper.map(dto, Workout.class);
        workout.setUserId(userId);

        if (workout.getExercises() != null) {
            workout.getExercises().forEach(e -> e.setWorkout(workout));
        }

        Workout saved = workoutRepository.save(workout);
        WorkoutDto response = modelMapper.map(saved, WorkoutDto.class);

        // ✅ FIXED: Send notification via Kafka with proper key
        try {
            NotificationDto notification = NotificationDto.builder()
                    .userId(userId)
                    .title("Workout Created 🎯")
                    .message("Your new workout '" + saved.getName() + "' has been successfully created!")
                    .build();

            // Add key (userId as string) and handle async result
            kafkaTemplate.send("notifications", String.valueOf(userId), notification)
                    .whenComplete((result, ex) -> {
                        if (ex == null) {
                            log.info("✅ Notification sent successfully for user: {}. Offset: {}",
                                    userId, result.getRecordMetadata().offset());
                        } else {
                            log.error("❌ Failed to send notification for user: {}. Error: {}",
                                    userId, ex.getMessage());
                        }
                    });
        } catch (Exception e) {
            log.error("❌ Error sending Kafka notification: {}", e.getMessage());
            // Don't throw - notification failure shouldn't break workout creation
        }

        return response;
    }

    // ✅ Get all workouts of a user
    public List<WorkoutDto> getUserWorkouts(Long userId) {
        log.debug("Fetching workouts for user: {}", userId);
        return workoutRepository.findByUserId(userId).stream()
                .map(w -> modelMapper.map(w, WorkoutDto.class))
                .collect(Collectors.toList());
    }

    // ✅ Add exercise to workout
    public WorkoutDto addExercise(Long userId, Long workoutId, ExerciseDto dto) {
        log.info("Adding exercise to workout {} for user: {}", workoutId, userId);

        Workout workout = workoutRepository.findById(workoutId)
                .orElseThrow(() -> new RuntimeException("Workout not found"));

        if (!workout.getUserId().equals(userId)) {
            throw new RuntimeException("Unauthorized");
        }

        Exercise exercise = modelMapper.map(dto, Exercise.class);
        exercise.setWorkout(workout);
        exerciseRepository.save(exercise);

        // ✅ FIXED: Send notification when exercise added
        try {
            NotificationDto notification = NotificationDto.builder()
                    .userId(userId)
                    .title("New Exercise Added 💪")
                    .message("Exercise '" + exercise.getName() + "' added to your workout '" + workout.getName() + "'.")
                    .build();

            kafkaTemplate.send("notifications", String.valueOf(userId), notification)
                    .whenComplete((result, ex) -> {
                        if (ex == null) {
                            log.info("✅ Exercise notification sent for user: {}", userId);
                        } else {
                            log.error("❌ Failed to send exercise notification: {}", ex.getMessage());
                        }
                    });
        } catch (Exception e) {
            log.error("❌ Error sending exercise notification: {}", e.getMessage());
        }

        return modelMapper.map(workout, WorkoutDto.class);
    }
}