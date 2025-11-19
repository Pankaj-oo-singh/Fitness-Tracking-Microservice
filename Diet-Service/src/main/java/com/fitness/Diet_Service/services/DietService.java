package com.fitness.Diet_Service.services;

import com.fitness.Diet_Service.dto.DietPlanDto;
import com.fitness.Diet_Service.dto.MealDto;
import com.fitness.Diet_Service.dto.NotificationDto;
import com.fitness.Diet_Service.entities.DietPlan;
import com.fitness.Diet_Service.entities.Meal;
import com.fitness.Diet_Service.exception.ResourceNotFoundException;
import com.fitness.Diet_Service.repositories.DietPlanRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
//
//@Service
//
//public class DietService {
//
//    private final DietPlanRepository repository;
//    private final ModelMapper mapper;
//
//    public DietService(DietPlanRepository repository, ModelMapper mapper) {
//        this.repository = repository;
//        this.mapper = mapper;
//    }
//
//    public DietPlanDto createDietPlan(Long userId, DietPlanDto dto) {
//        DietPlan plan = mapper.map(dto, DietPlan.class);
//        plan.setUserId(userId);
//        DietPlan saved = repository.save(plan);
//        return mapper.map(saved, DietPlanDto.class);
//    }
//
//    public List<DietPlanDto> getUserDietPlans(Long userId) {
//        return repository.findByUserId(userId)
//                .stream()
//                .map(plan -> mapper.map(plan, DietPlanDto.class))
//                .collect(Collectors.toList());
//    }
//
//    public DietPlanDto addMeal(Long userId, Long dietPlanId, MealDto dto) {
//        DietPlan plan = repository.findById(dietPlanId)
//                .orElseThrow(() -> new RuntimeException("Diet plan not found"));
//        if (!plan.getUserId().equals(userId)) {
//            throw new RuntimeException("Unauthorized");
//        }
//
//        Meal meal = mapper.map(dto, Meal.class);
//        plan.getMeals().add(meal);
//        DietPlan updated = repository.save(plan);
//        return mapper.map(updated, DietPlanDto.class);
//    }
//}




@Service
@RequiredArgsConstructor
public class DietService {

    private final DietPlanRepository repository;
    private final ModelMapper mapper;
    private final KafkaTemplate<String, NotificationDto> kafkaTemplate;
    private static final String TOPIC = "notifications";

    // ✅ Create a diet plan and send a Kafka notification
    public DietPlanDto createDietPlan(Long userId, DietPlanDto dto) {
        DietPlan plan = mapper.map(dto, DietPlan.class);
        plan.setUserId(userId);

        DietPlan saved = repository.save(plan);

        // Send Kafka notification
        NotificationDto notification = NotificationDto.builder()
                .userId(userId)
                .title("🥗 New Diet Plan Created")
                .message("Your new diet plan '" + saved.getName() + "' has been created.")
                .build();

        kafkaTemplate.send(TOPIC, notification);

        return mapper.map(saved, DietPlanDto.class);
    }

    // ✅ Get all diet plans for a user
    public List<DietPlanDto> getUserDietPlans(Long userId) {
        return repository.findByUserId(userId)
                .stream()
                .map(plan -> mapper.map(plan, DietPlanDto.class))
                .collect(Collectors.toList());
    }

    // ✅ Add meal to a diet plan and send Kafka notification
    public DietPlanDto addMeal(Long userId, Long dietPlanId, MealDto dto) {
        DietPlan plan = repository.findById(dietPlanId)
                .orElseThrow(() -> new RuntimeException("Diet plan not found"));

        if (!plan.getUserId().equals(userId)) {
            throw new RuntimeException("Unauthorized");
        }

        Meal meal = mapper.map(dto, Meal.class);
        plan.getMeals().add(meal);
        DietPlan updated = repository.save(plan);

        // Send Kafka notification
        NotificationDto notification = NotificationDto.builder()
                .userId(userId)
                .title("🍽️ Meal Added")
                .message("A new meal '" + dto.getName() + "' was added to your diet plan '" + plan.getName() + "'.")
                .build();

        kafkaTemplate.send(TOPIC, notification);

        return mapper.map(updated, DietPlanDto.class);
    }

    // ✅ Update existing diet plan
    public DietPlanDto updateDietPlan(Long userId, Long planId, DietPlanDto dto) {
        DietPlan plan = repository.findById(planId)
                .orElseThrow(() -> new RuntimeException("Diet plan not found"));

        if (!plan.getUserId().equals(userId)) {
            throw new RuntimeException("Unauthorized");
        }

        plan.setName(dto.getName());
        plan.setDescription(dto.getDescription());

        DietPlan updated = repository.save(plan);

        // Send Kafka notification
        NotificationDto notification = NotificationDto.builder()
                .userId(userId)
                .title("✏️ Diet Plan Updated")
                .message("Your diet plan '" + plan.getName() + "' has been updated.")
                .build();

        kafkaTemplate.send(TOPIC, notification);

        return mapper.map(updated, DietPlanDto.class);
    }

    // ✅ Delete a diet plan
    public void deleteDietPlan(Long userId, Long planId) {
        DietPlan plan = repository.findById(planId)
                .orElseThrow(() -> new RuntimeException("Diet plan not found"));

        if (!plan.getUserId().equals(userId)) {
            throw new RuntimeException("Unauthorized");
        }

        repository.delete(plan);

        // Send Kafka notification
        NotificationDto notification = NotificationDto.builder()
                .userId(userId)
                .title("🗑️ Diet Plan Deleted")
                .message("Your diet plan '" + plan.getName() + "' has been deleted.")
                .build();

        kafkaTemplate.send(TOPIC, notification);
    }
}