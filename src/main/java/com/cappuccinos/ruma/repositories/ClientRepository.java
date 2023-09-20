package com.cappuccinos.ruma.repositories;

import com.cappuccinos.ruma.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ClientRepository extends JpaRepository<Client, Long> {
    Optional<Client> findClientById(Long id);
    Optional<Client> findClientByEmail(String email);
}
