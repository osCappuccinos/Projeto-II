package com.cappuccinos.ruma.services;

import com.cappuccinos.ruma.dtos.ProductDTO;
import com.cappuccinos.ruma.models.Product;
import com.cappuccinos.ruma.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    public Product createNewProduct(ProductDTO data) {
        Product newProduct = new Product(data);
        this.repository.save(newProduct);
        return newProduct;
    }

    public Product findProductById(Long id) throws Exception {
        return this.repository.findProductById(id).orElseThrow(() -> new Exception("Product not found"));
    }
}
