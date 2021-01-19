package iir5.pfa.g7.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import iir5.pfa.g7.models.Recenseur;

public interface RecenseurRepository extends JpaRepository<Recenseur, Integer> {

	Recenseur findByName(String nom);

	Optional<Recenseur> findById(int id);

}
