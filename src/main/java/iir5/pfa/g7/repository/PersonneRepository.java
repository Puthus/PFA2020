package iir5.pfa.g7.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import iir5.pfa.g7.models.Personne;

public interface PersonneRepository extends JpaRepository<Personne, Integer> {

	@Query("SELECT u FROM Personne u WHERE u.nom = :nom")
	public Personne getUserByNom(@Param("nom") String nom);

}
