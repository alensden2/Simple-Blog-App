package com.asdc.pawpals.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.asdc.pawpals.model.Animal;

public interface AdminReadAllAnimalsRepository extends JpaRepository<Animal, Long> {}