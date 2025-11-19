package com.fitness.UserService.client;

import com.fitness.UserService.config.FeignConfig;
import com.fitness.UserService.dto.UserDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name = "auth-service")
public interface AuthServiceClient {
    @GetMapping("/auth/user/{id}")
    UserDto getUserById(@PathVariable("id") Long id);
}