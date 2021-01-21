package iir5.pfa.g7.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@PrimaryKeyJoinColumn(name = "idUser")
public class Recenseur extends User {

	@ManyToOne(cascade = CascadeType.MERGE)
	private Region region;

	@OneToMany(mappedBy = "recenseur", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Monument> monuments;
	
	@OneToMany(mappedBy = "recenseur", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Constat> constats;
	
	public Recenseur() {
		super();
	}

	public Recenseur(User u) {
		super(u);
	}
	
	public Region getRegion() {
		return region;
	}

	public void setRegion(Region region) {
		this.region = region;
	}

	public List<Monument> getMonuments() {
		return monuments;
	}

	public void setMonuments(List<Monument> monuments) {
		this.monuments = monuments;
	}

	public List<Constat> getConstats() {
		return constats;
	}

	public void setConstats(List<Constat> constats) {
		this.constats = constats;
	}
	
	

	
}
