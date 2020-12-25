package iir5.pfa.g7.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class AdminRegional extends Personne {

	@OneToMany(mappedBy = "adminRegional", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Region> regions;

	@OneToMany(mappedBy = "adminRegional", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Lieu> lieux;

	public AdminRegional() {
		super();
		// TODO Auto-generated constructor stub
	}

	public List<Region> getRegions() {
		return regions;
	}

	public void setRegions(List<Region> regions) {
		this.regions = regions;
	}

	public List<Lieu> getLieux() {
		return lieux;
	}

	public void setLieux(List<Lieu> lieux) {
		this.lieux = lieux;
	}

}
