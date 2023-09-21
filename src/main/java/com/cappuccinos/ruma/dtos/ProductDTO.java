package com.cappuccinos.ruma.dtos;

import com.cappuccinos.ruma.models.Store;

import java.math.BigDecimal;

public record ProductDTO(String name, BigDecimal value, Store store) {
}
