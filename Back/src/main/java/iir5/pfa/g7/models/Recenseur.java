package iir5.pfa.g7.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
public class Recenseur extends User {

	@ManyToOne(cascade = CascadeType.MERGE)
	private Region region;

	public Recenseur() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Region getRegion() {
		return region;
	}

	public void setRegion(Region region) {
		this.region = region;
	}

}
