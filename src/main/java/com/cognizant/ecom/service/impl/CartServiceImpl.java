package com.cognizant.ecom.service.impl;

import com.cognizant.ecom.exceptions.APIException;
import com.cognizant.ecom.exceptions.ResourceNotFoundException;
import com.cognizant.ecom.model.Cart;
import com.cognizant.ecom.model.CartItem;
import com.cognizant.ecom.model.Product;
import com.cognizant.ecom.payload.CartDTO;
import com.cognizant.ecom.payload.ProductDTO;
import com.cognizant.ecom.repositories.CartItemRepository;
import com.cognizant.ecom.repositories.CartRepository;
import com.cognizant.ecom.repositories.ProductRepository;
import com.cognizant.ecom.service.CartService;
import com.cognizant.ecom.util.AuthUtil;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {

    private final CartRepository cartRepository;
    private final AuthUtil authUtil;
    private final ProductRepository productRepository;
    private final CartItemRepository cartItemRepository;
    private final ModelMapper modelMapper;

    @Override
    public CartDTO addProductToCart(Long productId, Integer quantity) {
        Cart cart = createCart();
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product", "productId", productId));

        CartItem cartItem = cartItemRepository.findCartItemByProductIdAndCartId(cart.getCartId(), productId);

        if(cartItem != null){
            throw  new APIException("Product " +
                    product.getProductName() + " already exists in the cart");
        }

        if(product.getQuantity() == 0){
            throw  new APIException(product.getProductName() +
                    " is not available");
        }

        if(product.getQuantity() < quantity){
            throw new APIException("Please, make an order of the " +
                    product.getProductName() + " less than or equal to the quantity" +
                    product.getQuantity() + ".");
        }

        CartItem newCartItem = new CartItem();

        newCartItem.setProduct(product);
        newCartItem.setCart(cart);
        newCartItem.setQuantity(quantity);
        newCartItem.setDiscount(product.getDiscount());
        newCartItem.setProductPrice(product.getSpecialPrice());

        cartItemRepository.save(newCartItem);

        product.setQuantity(product.getQuantity());
        cart.setTotalPrice(cart.getTotalPrice() + (product.getSpecialPrice() * quantity));
        cartRepository.save(cart);
        CartDTO cartDTO = modelMapper.map(cart, CartDTO.class);

        List<CartItem> cartItems = cart.getCartItems();

        Stream<ProductDTO> productStream = cartItems.stream()
                .map(item -> {
                    ProductDTO map = modelMapper.map(item.getProduct(), ProductDTO.class);
                    map.setQuantity(item.getQuantity());
                    return map;
                });
        cartDTO.setProducts(productStream.toList());
        return cartDTO;
    }

    private Cart createCart(){
        Cart userCart = cartRepository.findCartByEmail(authUtil.loggedInEmail());
        if(userCart != null){
            return userCart;
        }
        Cart cart = new Cart();
        cart.setTotalPrice(0.00);
        cart.setUser(authUtil.loggedInUser());
        return cartRepository.save(cart);
    }
}
