package iir5.pfa.g7.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import iir5.pfa.g7.models.Evenement;

public interface EvenementRepository extends JpaRepository<Evenement, Long> {

	Evenement findByNom(String nom);

	Optional<Evenement> findById(long id);

}
