package com.cappuccinos.ruma.services;

import com.cappuccinos.ruma.dtos.StoreDTO;
import com.cappuccinos.ruma.models.Store;
import com.cappuccinos.ruma.repositories.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StoreService {

    @Autowired
    private StoreRepository repository;

    public Store findStoreById(Long id) throws Exception {
        return this.repository.findStoreById(id).orElseThrow(() -> new Exception("Store not found."));
    }

    public Store findStoreByName(String name) throws Exception {
        return this.repository.findStoreByName(name).orElseThrow(() -> new Exception("Store not found."));
    }

    public Store createNewStore(StoreDTO data) {
        Store newStore = new Store(data);
        this.saveStore(newStore);
        return newStore;
    }

    public void saveStore(Store newStore) {
        this.repository.save(newStore);
    }

    public List<Store> getAllStores() {
        return this.repository.findAll();
    }
}
