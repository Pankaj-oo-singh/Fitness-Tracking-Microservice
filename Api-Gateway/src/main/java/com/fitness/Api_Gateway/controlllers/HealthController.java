package com.fitness.Api_Gateway.controlllers;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.util.HashMap;
import java.util.Map;

@RestController
public class HealthController {

    @GetMapping("/health")
    public Mono<ResponseEntity<Map<String, String>>> health() {
        Map<String, String> healthStatus = new HashMap<>();
        healthStatus.put("status", "UP");
        healthStatus.put("service", "api-gateway");
        healthStatus.put("timestamp", java.time.LocalDateTime.now().toString());
        return Mono.just(ResponseEntity.ok(healthStatus));
    }
}