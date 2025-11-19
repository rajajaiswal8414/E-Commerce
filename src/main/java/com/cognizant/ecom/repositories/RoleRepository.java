package com.cognizant.ecom.repositories;

import com.cognizant.ecom.model.AppRole;
import com.cognizant.ecom.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByRoleName(AppRole appRole);
}
