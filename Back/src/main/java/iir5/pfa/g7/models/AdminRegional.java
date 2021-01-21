package iir5.pfa.g7.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@PrimaryKeyJoinColumn(name = "idUser")
public class AdminRegional extends User {

	@OneToMany(mappedBy = "adminRegional", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Region> regions;

	// TODO
	@OneToMany(mappedBy = "adminRegional", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Monument> monuments;

	public AdminRegional() {
		super();
	}
	
	public AdminRegional(User u) {
		super(u);
	}

	public List<Region> getRegions() {
		return regions;
	}

	public void setRegions(List<Region> regions) {
		this.regions = regions;
	}

	public List<Monument> getMonuments() {
		return monuments;
	}

	public void setMonuments(List<Monument> monuments) {
		this.monuments = monuments;
	}

}
