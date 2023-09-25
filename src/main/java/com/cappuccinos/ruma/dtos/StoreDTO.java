package com.cappuccinos.ruma.dtos;

import com.cappuccinos.ruma.models.Product;

import java.util.List;

public record StoreDTO(String name, String email, String password, List<Product> products) {
}
