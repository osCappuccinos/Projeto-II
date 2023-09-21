package com.cappuccinos.ruma.repositories;

import com.cappuccinos.ruma.models.ShoppingBag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShoppingBagRepository extends JpaRepository<ShoppingBag, Long> {
}
