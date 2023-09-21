package com.cappuccinos.ruma.controllers;

import com.cappuccinos.ruma.dtos.ClientDTO;
import com.cappuccinos.ruma.models.Client;
import com.cappuccinos.ruma.models.ShoppingBag;
import com.cappuccinos.ruma.services.ClientService;
import com.cappuccinos.ruma.services.ShoppingBagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController()
@RequestMapping("/api/v1/clients")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @Autowired
    private ShoppingBagService shoppingBagService;

    @PostMapping("/new-client")
    public ResponseEntity<Client> createNewClient(@RequestBody ClientDTO data) throws Exception {
        Client newClient = clientService.createNewClient(data);
        return new ResponseEntity<>(newClient, HttpStatus.CREATED);
    }

    @GetMapping("/all-clients")
    public ResponseEntity<List<Client>> getAllClients() {
        List<Client> clients = this.clientService.getAllClients();
        return new ResponseEntity<>(clients, HttpStatus.OK);
    }

    @PostMapping("/add-product")
    public ResponseEntity<ShoppingBag> addProductToShoppingBag(@RequestBody Map<String, Long> requestParams) throws Exception {
        Long productId = requestParams.get("productId");
        Long clientId = requestParams.get("clientId");

        ShoppingBag shoppingBag = this.shoppingBagService.addProductToShoppingBagById(productId, clientId);
        this.shoppingBagService.saveShoppingBag(shoppingBag);
        return new ResponseEntity<>(shoppingBag, HttpStatus.OK);
    }

    @PostMapping("/remove-product")
    public ResponseEntity<ShoppingBag> removeProductFromShoppingBag(@RequestBody Map<String, Long> requestParams) throws Exception {
        Long productId = requestParams.get("productId");
        Long clientId = requestParams.get("clientId");

        ShoppingBag shoppingBag = this.shoppingBagService.removeProductFromShoppingBagById(productId, clientId);
        this.shoppingBagService.saveShoppingBag(shoppingBag);
        return new ResponseEntity<>(shoppingBag, HttpStatus.OK);
    }
}