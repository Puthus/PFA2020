package iir5.pfa.g7.models;

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
public class Region {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String nom;
	private String libelle;
	@ManyToOne(cascade = CascadeType.MERGE)
	private AdminRegional adminRegional;
	@OneToMany(mappedBy = "region", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Lieu> lieux;
	@OneToMany(mappedBy = "region", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Recenseur> recenseurs;

	public Region() {
		super();
		// TODO Auto-generated constructor stub
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getLibelle() {
		return libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}

	public AdminRegional getAdminRegional() {
		return adminRegional;
	}

	public void setAdminRegional(AdminRegional adminRegional) {
		this.adminRegional = adminRegional;
	}

	public List<Lieu> getLieux() {
		return lieux;
	}

	public void setLieux(List<Lieu> lieux) {
		this.lieux = lieux;
	}

	public List<Recenseur> getRecenseurs() {
		return recenseurs;
	}

	public void setRecenseurs(List<Recenseur> recenseurs) {
		this.recenseurs = recenseurs;
	}

}
