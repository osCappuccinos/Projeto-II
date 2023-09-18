package com.cappuccinos.ruma.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity(name = "stores")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;
    protected String name;
    @Column(unique = true)
    protected String email;
    protected String password;
    @OneToMany(mappedBy = "store")
    private List<Product> products;
}
