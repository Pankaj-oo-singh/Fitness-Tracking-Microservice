package com.fitness.Diet_Service.repositories;


import com.fitness.Diet_Service.entities.DietPlan;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DietPlanRepository extends JpaRepository<DietPlan, Long> {
//    Optional<DietPlan> findByGoal(String goal);
    List<DietPlan> findByUserId(Long userId);
}