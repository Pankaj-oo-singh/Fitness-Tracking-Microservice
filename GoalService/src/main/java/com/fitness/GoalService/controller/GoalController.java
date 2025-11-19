package com.fitness.GoalService.controller;


import com.fitness.GoalService.dto.GoalDto;
import com.fitness.GoalService.service.GoalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/goals")
@RequiredArgsConstructor
public class GoalController {

    private final GoalService goalService;

    @PostMapping
    public ResponseEntity<GoalDto> createGoal(
            @RequestHeader("X-User-Id") Long userId,
            @RequestBody GoalDto dto) {
        return ResponseEntity.ok(goalService.createGoal(userId, dto));
    }

    @GetMapping
    public ResponseEntity<List<GoalDto>> getUserGoals(
            @RequestHeader("X-User-Id") Long userId) {
        return ResponseEntity.ok(goalService.getUserGoals(userId));
    }

    @PutMapping("/{goalId}")
    public ResponseEntity<GoalDto> updateGoal(
            @RequestHeader("X-User-Id") Long userId,
            @PathVariable Long goalId,
            @RequestBody GoalDto dto) {
        return ResponseEntity.ok(goalService.updateGoal(userId, goalId, dto));
    }

    @DeleteMapping("/{goalId}")
    public ResponseEntity<Void> deleteGoal(
            @RequestHeader("X-User-Id") Long userId,
            @PathVariable Long goalId) {
        goalService.deleteGoal(userId, goalId);
        return ResponseEntity.noContent().build();
    }
}