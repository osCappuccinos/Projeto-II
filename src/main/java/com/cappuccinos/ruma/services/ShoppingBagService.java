package com.cappuccinos.ruma.services;

import com.cappuccinos.ruma.models.Client;
import com.cappuccinos.ruma.models.Product;
import com.cappuccinos.ruma.models.ShoppingBag;
import com.cappuccinos.ruma.repositories.ShoppingBagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ShoppingBagService {

    @Autowired
    private ClientService clientService;

    @Autowired
    private ProductService productService;

    @Autowired
    private ShoppingBagRepository repository;

    public ShoppingBag addProductToShoppingBagById(Long productId, Long clientId) throws Exception {
        Product product = this.productService.findProductById(productId);
        Client client = this.clientService.findClientById(clientId);

        ShoppingBag shoppingBag = client.getShoppingBag();
        shoppingBag.getProducts().add(product);
        return shoppingBag;
    }

    public ShoppingBag removeProductFromShoppingBagById(Long productId, Long clientId) throws Exception {
        Product product = this.productService.findProductById(productId);
        Client client = this.clientService.findClientById(clientId);

        ShoppingBag shoppingBag = client.getShoppingBag();
        shoppingBag.getProducts().remove(product);
        return shoppingBag;
    }
    public void saveShoppingBag(ShoppingBag shoppingBag) {
        this.repository.save(shoppingBag);
    }
}
