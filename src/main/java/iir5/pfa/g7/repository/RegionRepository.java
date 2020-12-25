package iir5.pfa.g7.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import iir5.pfa.g7.models.Region;

public interface RegionRepository extends JpaRepository<Region, Long> {

	Region findByNom(String nom);

	Optional<Region> findById(long id);

}
