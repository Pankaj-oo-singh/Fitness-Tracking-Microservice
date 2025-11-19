package com.fitness.Diet_Service.controllers;

import com.fitness.Diet_Service.dto.DietPlanDto;
import com.fitness.Diet_Service.dto.MealDto;
import com.fitness.Diet_Service.services.DietService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/diet-plans")
@RequiredArgsConstructor
public class DietPlanController {

    private final DietService dietService;





    @PostMapping
    public ResponseEntity<DietPlanDto> createDietPlan(
            @RequestHeader("X-User-Id") Long userId,
            @RequestBody DietPlanDto dto) {
        return ResponseEntity.ok(dietService.createDietPlan(userId, dto));
    }

    @GetMapping
    public ResponseEntity<List<DietPlanDto>> getUserDietPlans(
            @RequestHeader("X-User-Id") Long userId) {
        return ResponseEntity.ok(dietService.getUserDietPlans(userId));
    }

    @PostMapping("/{dietPlanId}/meals")
    public ResponseEntity<DietPlanDto> addMeal(
            @RequestHeader("X-User-Id") Long userId,
            @PathVariable Long dietPlanId,
            @RequestBody MealDto dto) {
        return ResponseEntity.ok(dietService.addMeal(userId, dietPlanId, dto));
    }
}