package iir5.pfa.g7.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import iir5.pfa.g7.models.Lieu;

public interface LieuRepository extends JpaRepository<Lieu, Long> {

	Lieu findByNom(String nom);

	Optional<Lieu> findById(long id);

}
