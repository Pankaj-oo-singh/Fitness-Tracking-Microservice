package com.fitness.workout_service.entities;


import jakarta.persistence.*;
import lombok.*;

@Entity

@Table(name = "exercise")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Exercise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private Integer sets;
    private Integer reps;

    @ManyToOne
    @JoinColumn(name = "workout_id")
    private Workout workout;
}