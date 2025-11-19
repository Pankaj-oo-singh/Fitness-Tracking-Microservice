package com.fitness.Api_Gateway.filter;


import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.Ordered;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.server.reactive.ServerHttpResponseDecorator;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;


@Component
@Slf4j
public class LoggingFilter implements GlobalFilter, Ordered {

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        String path = exchange.getRequest().getPath().value();
        String method = exchange.getRequest().getMethod().name();
        long startTime = System.currentTimeMillis();

        log.info("Incoming request: {} {} from {}", method, path,
                exchange.getRequest().getRemoteAddress());

        return chain.filter(exchange)
                .doOnSuccess(aVoid -> {
                    long duration = System.currentTimeMillis() - startTime;
                    HttpStatusCode statusCode = exchange.getResponse().getStatusCode();
                    String status = statusCode != null ? String.valueOf(statusCode.value()) : "200";
                    log.info("Request {} {} completed in {}ms with status {}",
                            method, path, duration, status);
                })
                .doOnError(throwable -> {
                    long duration = System.currentTimeMillis() - startTime;
                    HttpStatusCode statusCode = exchange.getResponse().getStatusCode();
                    String status = statusCode != null ? String.valueOf(statusCode.value()) : "N/A";
                    log.error("Request {} {} failed in {}ms with error: {} (Status: {})",
                            method, path, duration, throwable.getMessage(), status, throwable);
                });
    }

    @Override
    public int getOrder() {
        return Ordered.HIGHEST_PRECEDENCE;
    }
}
