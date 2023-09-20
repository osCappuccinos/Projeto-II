package com.cappuccinos.ruma.controllers;

import com.cappuccinos.ruma.dtos.ClientDTO;
import com.cappuccinos.ruma.models.Client;
import com.cappuccinos.ruma.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/api/v1/clients")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @PostMapping("/newClient")
    public ResponseEntity<Client> createNewClient(@RequestBody ClientDTO data) throws Exception {
        Client newClient = clientService.createNewClient(data);
        return new ResponseEntity<>(newClient, HttpStatus.CREATED);
    }

    @GetMapping("/all-clients")
    public ResponseEntity<List<Client>> getAllClients() {
        List<Client> clients = this.clientService.getAllClients();
        return new ResponseEntity<>(clients, HttpStatus.OK);
    }
}
