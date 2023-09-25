package com.cappuccinos.ruma.controllers;

import com.cappuccinos.ruma.dtos.ProductDTO;
import com.cappuccinos.ruma.models.Product;
import com.cappuccinos.ruma.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/api/v1/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/new-product")
    private ResponseEntity<Product> createNewProduct(@RequestBody ProductDTO data) throws Exception {
        Product newProduct = productService.createNewProduct(data);
        return new ResponseEntity<>(newProduct, HttpStatus.ACCEPTED);
    }
}
