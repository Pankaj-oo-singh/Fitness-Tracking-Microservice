package com.fitness.UserService.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "fitness_data")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FitnessData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private BigDecimal height; // in cm
    private BigDecimal weight; // in kg
    private BigDecimal bmi;
    private String fitnessLevel; // BEGINNER, INTERMEDIATE, ADVANCED
    private String goal; // WEIGHT_LOSS, MUSCLE_GAIN, MAINTENANCE
    private Integer targetWeight; // in kg
    private Integer dailyCalorieTarget;
    private Integer dailyStepTarget;

    @Column(name = "last_updated")
    private LocalDateTime lastUpdated;

    @PrePersist
    @PreUpdate
    protected void onUpdate() {
        lastUpdated = LocalDateTime.now();
        // Calculate BMI if height and weight are available
        if (height != null && weight != null && height.compareTo(BigDecimal.ZERO) > 0) {
            BigDecimal heightInMeters = height.divide(BigDecimal.valueOf(100), 2, BigDecimal.ROUND_HALF_UP);
            this.bmi = weight.divide(heightInMeters.multiply(heightInMeters), 2, BigDecimal.ROUND_HALF_UP);
        }
    }
}