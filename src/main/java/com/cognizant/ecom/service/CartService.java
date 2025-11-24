package com.cognizant.ecom.service;

import com.cognizant.ecom.payload.CartDTO;

public interface CartService {
    CartDTO addProductToCart(Long productId, Integer quantity);
}
