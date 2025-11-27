package com.cognizant.ecom.repositories;

import com.cognizant.ecom.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CartRepository extends JpaRepository<Cart, Long> {

    @Query("Select c FROM Cart c WHERE c.user.email = ?1")
    Cart findCartByEmail(String email);

    @Query("Select c FROM Cart c WHERE c.user.email = ?1 AND c.id = ?2")
    Cart findCartByEmailAndCartId(String emailId, Long cartId);
}
