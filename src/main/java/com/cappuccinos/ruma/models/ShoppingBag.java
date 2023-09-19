package com.cappuccinos.ruma.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity(name = "shopping_bag")
@Table(name = "shopping_bag")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class ShoppingBag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToMany
    private List<Product> products;
    @OneToOne
    @JoinColumn(name = "client_id")
    private Client owner;
}
