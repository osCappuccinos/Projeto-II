package com.cappuccinos.ruma.models;

import com.cappuccinos.ruma.dtos.ProductDTO;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity(name = "products")
@Table(name = "products")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private BigDecimal value;
    @Enumerated(EnumType.STRING)
    @ManyToOne
    @JoinColumn(name = "store_id")
    private Store store;

    public Product(ProductDTO data) {
        this.name = data.name();
        this.value = data.value();
        this.store = data.store();
    }
}