package iir5.pfa.g7.models;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Evenement {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String nom;
	private String typeEven;
	@Temporal(TemporalType.DATE)
	private Date DateEven;
	@ManyToOne(cascade = CascadeType.MERGE)
	private Monument monument;

	public Evenement() {
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

	public String getTypeEven() {
		return typeEven;
	}

	public void setTypeEven(String typeEven) {
		this.typeEven = typeEven;
	}

	public Date getDateEven() {
		return DateEven;
	}

	public void setDateEven(Date dateEven) {
		DateEven = dateEven;
	}

	public Monument getMonument() {
		return monument;
	}

	public void setMonument(Monument monument) {
		this.monument = monument;
	}

}
