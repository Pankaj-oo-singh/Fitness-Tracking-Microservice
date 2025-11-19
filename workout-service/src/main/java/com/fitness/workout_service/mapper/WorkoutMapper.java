package com.fitness.workout_service.mapper;

//
//import com.fitness.workout_service.dto.ExerciseDto;
//import com.fitness.workout_service.dto.WorkoutDto;
//import com.fitness.workout_service.entities.Exercise;
//import com.fitness.workout_service.entities.Workout;
//import org.springframework.stereotype.Component;
//
//import java.util.stream.Collectors;
//
//@Component
//public class WorkoutMapper {
//
//    public WorkoutDto toDto(Workout workout) {
//        return WorkoutDto.builder()
//                .workoutId(workout.getWorkoutId())
//                .userId(workout.getUserId())
//                .date(workout.getDate())
//                .duration(workout.getDuration())
//                .type(workout.getType())
//                .exercises(workout.getExercises().stream()
//                        .map(this::toDto)
//                        .collect(Collectors.toList()))
//                .build();
//    }
//
//    public ExerciseDto toDto(Exercise exercise) {
//        return ExerciseDto.builder()
//                .exerciseId(exercise.getExerciseId())
//                .name(exercise.getName())
//                .sets(exercise.getSets())
//                .reps(exercise.getReps())
//                .weight(exercise.getWeight())
//                .build();
//    }
//
//    public Workout toEntity(WorkoutDto dto) {
//        Workout workout = Workout.builder()
//                .userId(dto.getUserId())
//                .date(dto.getDate())
//                .duration(dto.getDuration())
//                .type(dto.getType())
//                .build();
//        workout.setExercises(dto.getExercises().stream()
//                .map(this::toEntity)
//                .peek(exercise -> exercise.setWorkout(workout))
//                .collect(Collectors.toList()));
//        return workout;
//    }
//
//    public Exercise toEntity(ExerciseDto dto) {
//        return Exercise.builder()
//                .name(dto.getName())
//                .sets(dto.getSets())
//                .reps(dto.getReps())
//                .weight(dto.getWeight())
//                .build();
//    }
//}