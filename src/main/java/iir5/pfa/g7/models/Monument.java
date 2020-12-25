package iir5.pfa.g7.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Monument extends Lieu {

	private Date dateCreation;
	@OneToMany(mappedBy = "monument", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Evenement> evenements;
	@OneToMany(mappedBy = "monument", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Travail> travaux;

	public Monument() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Date getDateCreation() {
		return dateCreation;
	}

	public void setDateCreation(Date dateCreation) {
		this.dateCreation = dateCreation;
	}

	public List<Evenement> getEvenements() {
		return evenements;
	}

	public void setEvenements(List<Evenement> evenements) {
		this.evenements = evenements;
	}

	public List<Travail> getTravaux() {
		return travaux;
	}

	public void setTravaux(List<Travail> travaux) {
		this.travaux = travaux;
	}

}
