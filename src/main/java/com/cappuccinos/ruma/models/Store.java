package com.cappuccinos.ruma.models;

import com.cappuccinos.ruma.dtos.StoreDTO;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity(name = "stores")
@Table(name = "stores")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(unique = true)
    private String email;
    private String password;
    @OneToMany(mappedBy = "store")
    private List<Product> products;

    public Store(StoreDTO data) {
        this.name = data.name();
        this.email = data.email();
        this.password = data.password();
        this.products = data.products();
    }
}
