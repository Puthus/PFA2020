package iir5.pfa.g7.models;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Monument {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	protected long id;
	protected String nom;
	protected double latitude;
	protected double longitude;

	@ManyToOne(cascade = CascadeType.MERGE)
	private Region region;

	@ManyToOne(cascade = CascadeType.MERGE)
	private AdminRegional adminRegional;

	@ManyToOne(cascade = CascadeType.MERGE)
	private Recenseur recenseur;

	private Date dateCreation;

	@OneToMany(mappedBy = "monument", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Evenement> evenements;
	
	@OneToMany(mappedBy = "monument", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Constat> constats;

	@OneToMany(mappedBy = "monument", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Travail> travaux;
	

	public Monument() {
	}

	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNom() {
		return this.nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public double getLatitude() {
		return this.latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public double getLongitude() {
		return this.longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	public Region getRegion() {
		return this.region;
	}

	public void setRegion(Region region) {
		this.region = region;
	}

	public AdminRegional getAdminRegional() {
		return this.adminRegional;
	}

	public void setAdminRegional(AdminRegional adminRegional) {
		this.adminRegional = adminRegional;
	}
	
	public Recenseur getRecenseur() {
		return recenseur;
	}

	public void setRecenseur(Recenseur recenseur) {
		this.recenseur = recenseur;
	}

	public Date getDateCreation() {
		return this.dateCreation;
	}

	public void setDateCreation(Date dateCreation) {
		this.dateCreation = dateCreation;
	}

	public List<Evenement> getEvenements() {
		return this.evenements;
	}

	public void setEvenements(List<Evenement> evenements) {
		this.evenements = evenements;
	}

	public List<Travail> getTravaux() {
		return this.travaux;
	}

	public void setTravaux(List<Travail> travaux) {
		this.travaux = travaux;
	}

	public List<Constat> getConstats() {
		return constats;
	}

	public void setConstats(List<Constat> constats) {
		this.constats = constats;
	}

	
}
