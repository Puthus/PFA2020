package iir5.pfa.g7.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import iir5.pfa.g7.models.Compte;

public interface CompteRepository extends JpaRepository<Compte, Long> {

	Compte findByNumero(String numero);

	Optional<Compte> findById(long id);

}
