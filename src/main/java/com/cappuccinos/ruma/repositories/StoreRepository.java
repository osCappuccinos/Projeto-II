package com.cappuccinos.ruma.repositories;

import com.cappuccinos.ruma.models.Store;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StoreRepository extends JpaRepository<Store, Long> {
    Optional<Store> findStoreById(Long id);

    Optional<Store> findStoreByName(String name);
}
