package iir5.pfa.g7.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Gestionnaire extends Personne {

	@OneToMany(mappedBy = "gestionnaire", fetch = FetchType.EAGER)
	@JsonIgnore
	private List<Compte> comptes;

	public Gestionnaire() {
		super();
		// TODO Auto-generated constructor stub
	}

	public List<Compte> getComptes() {
		return comptes;
	}

	public void setComptes(List<Compte> comptes) {
		this.comptes = comptes;
	}

}
