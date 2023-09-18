package com.cappuccinos.ruma.models;

import jakarta.persistence.*;
import lombok.*;
@Entity(name = "clients")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    @Column(unique = true)
    private String email;
    private String password;
    @OneToOne(mappedBy = "owner", cascade = CascadeType.ALL)
    private ShoppingBag shoppingBag;
}
