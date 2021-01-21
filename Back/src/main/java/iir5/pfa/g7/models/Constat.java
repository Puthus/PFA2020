package iir5.pfa.g7.models;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

@Entity
public class Constat {

	@EmbeddedId
	MonumentRecenseurKey id;
	
	@ManyToOne(cascade = CascadeType.MERGE)
    @MapsId("recenseurId")
    @JoinColumn(name = "recenseur_id")
    private Recenseur recenseur;

    @ManyToOne(cascade = CascadeType.MERGE)
    @MapsId("monumentId")
    @JoinColumn(name = "monument_id")
    private Monument monument;
	
	private Date date;
	private String type;

	public Constat() {
		super();
	}

	public MonumentRecenseurKey getId() {
		return id;
	}

	public void setId(MonumentRecenseurKey id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Recenseur getrecenseur() {
		return recenseur;
	}

	public void setrecenseur(Recenseur recenseur) {
		this.recenseur = recenseur;
	}

	public Monument getMonument() {
		return monument;
	}

	public void setMonument(Monument monument) {
		this.monument = monument;
	}
	
	

}
