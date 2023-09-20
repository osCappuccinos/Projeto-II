package com.cappuccinos.ruma.models;

import com.cappuccinos.ruma.dtos.ClientDTO;
import jakarta.persistence.*;
import lombok.*;

@Entity(name = "clients")
@Table(name = "clients")
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

    public Client(ClientDTO data) {
        this.firstName = data.firstName();
        this.lastName = data.lastName();
        this.email = data.email();
        this.password = data.password();
    }
}
