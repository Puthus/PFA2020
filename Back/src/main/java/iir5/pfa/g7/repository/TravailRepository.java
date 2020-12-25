package iir5.pfa.g7.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import iir5.pfa.g7.models.Travail;

public interface TravailRepository extends JpaRepository<Travail, Long> {

	Travail findByNom(String nom);

	Optional<Travail> findById(long id);

}
