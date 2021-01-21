package iir5.pfa.g7.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import iir5.pfa.g7.models.Recenseur;

@Repository
public interface RecenseurRepository extends JpaRepository<Recenseur, Integer> {

	Recenseur findByNom(String nom);

	Optional<Recenseur> findById(int id);

}
