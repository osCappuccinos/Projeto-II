package com.cappuccinos.ruma.controllers;

import com.cappuccinos.ruma.dtos.StoreDTO;
import com.cappuccinos.ruma.models.Product;
import com.cappuccinos.ruma.models.Store;
import com.cappuccinos.ruma.services.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/stores")
public class StoreController {

    @Autowired
    private StoreService storeService;

    @PostMapping("/new-store")
    private ResponseEntity<Store> createNewStore(@RequestBody StoreDTO data) {
        Store newStore = storeService.createNewStore(data);
        return new ResponseEntity<>(newStore, HttpStatus.CREATED);
    }

    @GetMapping("/all-stores")
    public ResponseEntity<List<Store>> getAllStores() {
        List<Store> stores = this.storeService.getAllStores();
        return new ResponseEntity<>(stores, HttpStatus.OK);
    }

    @GetMapping("/{storeName}")
    public ResponseEntity<Store> getStoreByName(@PathVariable String storeName) throws Exception {
        Store store = this.storeService.findStoreByName(storeName);
        return new ResponseEntity<>(store, HttpStatus.OK);
    }

    @GetMapping("/{storeName}/products")
    public ResponseEntity<List<Product>> getAllStoreProducts(@PathVariable String storeName) throws Exception {
        List<Product> products = this.storeService.getAllProductsByStore(storeName);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
}
