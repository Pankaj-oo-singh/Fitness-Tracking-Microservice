package com.fitness.workout_service.repositories;


import com.fitness.workout_service.entities.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExerciseRepository extends JpaRepository<Exercise, Long> {
}