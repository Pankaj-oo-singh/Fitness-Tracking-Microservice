package com.fitness.Api_Gateway.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class AuthResponse {
    @JsonProperty("userId")
    private Long userId;

    @JsonProperty("email")
    private String email;

    @JsonProperty("roles")
    private String roles;

    @JsonProperty("valid")
    private boolean valid;

    @JsonProperty("message")
    private String message;
}