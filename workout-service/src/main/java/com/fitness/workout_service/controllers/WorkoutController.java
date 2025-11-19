package com.fitness.workout_service.controllers;



import com.fitness.workout_service.dto.ExerciseDto;
import com.fitness.workout_service.dto.WorkoutDto;
import com.fitness.workout_service.service.WorkoutService;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/workouts")

public class WorkoutController {

    private final WorkoutService workoutService;





    public WorkoutController(WorkoutService workoutService) {
        this.workoutService = workoutService;
    }

    @PostMapping
    public ResponseEntity<WorkoutDto> createWorkout(
            @RequestHeader("X-User-Id") Long userId,
            @RequestBody WorkoutDto dto) {
        return ResponseEntity.ok(workoutService.createWorkout(userId, dto));
    }

    @GetMapping
    public ResponseEntity<List<WorkoutDto>> getUserWorkouts(
            @RequestHeader("X-User-Id") Long userId) {
        return ResponseEntity.ok(workoutService.getUserWorkouts(userId));
    }

    @PostMapping("/{workoutId}/exercises")
    public ResponseEntity<WorkoutDto> addExercise(
            @RequestHeader("X-User-Id") Long userId,
            @PathVariable Long workoutId,
            @RequestBody ExerciseDto dto) {
        return ResponseEntity.ok(workoutService.addExercise(userId, workoutId, dto));
    }


}