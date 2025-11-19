//package com.fitness.Api_Gateway.config;
//
//import com.fitness.Api_Gateway.filter.JwtAuthenticationFilter;
//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.cloud.gateway.route.RouteLocator;
//import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//@Configuration
//@RequiredArgsConstructor
//public class GatewayRoutesConfig {
//
//
//    private final JwtAuthenticationFilter jwtFilter;
//
//    @Bean
//    public RouteLocator customRoutes(RouteLocatorBuilder builder) {
//        return builder.routes()
//                // Public Auth Routes
//                .route("auth-service-public", r -> r.path("/auth/signup", "/auth/login", "/auth/refresh", "/auth/validate")
//                        .uri("lb://auth-service"))
//
//                // Secured Auth Routes
//                .route("auth-service-secured", r -> r.path("/auth/user-id")
//                        .filters(f -> f.filter(jwtFilter))
//                        .uri("lb://auth-service"))
//
//                // User Service
//                .route("user-service", r -> r.path("/users/**")
//                        .filters(f -> f.filter(jwtFilter))
//                        .uri("lb://user-service"))
//
//                // Workout Service
//                .route("workout-service", r -> r.path("/workouts/**")
//                        .filters(f -> f.filter(jwtFilter))
//                        .uri("lb://workout-service"))
//
//                .build();
//    }
//}