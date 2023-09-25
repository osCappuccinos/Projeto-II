package com.cappuccinos.ruma.services;

import com.cappuccinos.ruma.dtos.ProductDTO;
import com.cappuccinos.ruma.models.Product;
import com.cappuccinos.ruma.models.Store;
import com.cappuccinos.ruma.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    @Autowired
    private StoreService storeService;

    public Product createNewProduct(ProductDTO data) throws Exception {
        Product newProduct = new Product(data);
        Store store = this.storeService.findStoreByName(data.store());
        newProduct.setStore(store);
        store.getProducts().add(newProduct);
        storeService.saveStore(store);
        this.repository.save(newProduct);
        return newProduct;
    }

    public Product findProductById(Long id) throws Exception {
        return this.repository.findProductById(id).orElseThrow(() -> new Exception("Product not found"));
    }
}
