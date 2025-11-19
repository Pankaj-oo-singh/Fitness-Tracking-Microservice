package com.fitness.Api_Gateway.controlllers;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/fallback")
public class FallbackController {

    @GetMapping("/auth")
    public Mono<ResponseEntity<Map<String, String>>> authFallback() {
        return Mono.just(ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                .body(createFallbackResponse("Auth Service is unavailable")));
    }

    @GetMapping("/user")
    public Mono<ResponseEntity<Map<String, String>>> userFallback() {
        return Mono.just(ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                .body(createFallbackResponse("User Service is unavailable")));
    }

    @GetMapping("/workout")
    public Mono<ResponseEntity<Map<String, String>>> workoutFallback() {
        return Mono.just(ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                .body(createFallbackResponse("Workout Service is unavailable")));
    }

    @GetMapping("/diet")
    public Mono<ResponseEntity<Map<String, String>>> dietFallback() {
        return Mono.just(ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                .body(createFallbackResponse("Diet Service is unavailable")));
    }

    @GetMapping("/goal")
    public Mono<ResponseEntity<Map<String, String>>> goalFallback() {
        return Mono.just(ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                .body(createFallbackResponse("Goal Service is unavailable")));
    }

    @GetMapping("/notification")
    public Mono<ResponseEntity<Map<String, String>>> notificationFallback() {
        return Mono.just(ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                .body(createFallbackResponse("Notification Service is unavailable")));
    }

    private Map<String, String> createFallbackResponse(String message) {
        Map<String, String> response = new HashMap<>();
        response.put("message", message);
        response.put("status", "SERVICE_UNAVAILABLE");
        response.put("timestamp", java.time.LocalDateTime.now().toString());
        return response;
    }
}