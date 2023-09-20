package com.cappuccinos.ruma.services;

import com.cappuccinos.ruma.dtos.ClientDTO;
import com.cappuccinos.ruma.models.Client;
import com.cappuccinos.ruma.models.ShoppingBag;
import com.cappuccinos.ruma.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    @Autowired
    private ClientRepository repository;

    public Client findClientById(Long id) throws Exception {
        return this.repository.findClientById(id).orElseThrow(() -> new Exception("Client not found."));
    }

    public Client findClientByEmail(String email) throws Exception {
        return this.repository.findClientByEmail(email).orElseThrow(() -> new Exception("Client not found."));
    }

    public Client createNewClient(ClientDTO data) {
        Client newClient = new Client(data);
        this.saveClient(newClient);
        return newClient;
    }

    public void saveClient(Client newClient) {
        this.repository.save(newClient);
    }

    public List<Client> getAllClients() {
        return this.repository.findAll();
    }
}
