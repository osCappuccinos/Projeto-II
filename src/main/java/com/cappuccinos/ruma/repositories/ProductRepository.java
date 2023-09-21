package com.cappuccinos.ruma.repositories;

import com.cappuccinos.ruma.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {
    Optional<Product> findProductById(Long id);
}
