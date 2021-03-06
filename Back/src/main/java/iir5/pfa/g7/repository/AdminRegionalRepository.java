package iir5.pfa.g7.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import iir5.pfa.g7.models.AdminRegional;

@Repository
public interface AdminRegionalRepository extends JpaRepository<AdminRegional, Integer> {

	AdminRegional findByNom(String nom);

	Optional<AdminRegional> findById(int id);

}
