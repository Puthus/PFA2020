package iir5.pfa.g7.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import iir5.pfa.g7.models.Monument;

public interface MonumentRepository extends JpaRepository<Monument, Long> {

	Monument findByNom(String nom);

	Optional<Monument> findById(long id);

}
