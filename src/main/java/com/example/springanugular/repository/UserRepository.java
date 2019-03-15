package com.example.springanugular.repository;

import com.example.springanugular.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author AlexM
 */

@Repository
public interface UserRepository  extends CrudRepository<User, Long> {
}
