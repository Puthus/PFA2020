package iir5.pfa.g7.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import iir5.pfa.g7.models.Gestionnaire;

public interface GestionnaireRepository extends JpaRepository<Gestionnaire, Integer> {

	Gestionnaire findByNom(String nom);

	Optional<Gestionnaire> findById(int id);

}
