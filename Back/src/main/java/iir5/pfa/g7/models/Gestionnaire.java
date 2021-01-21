package iir5.pfa.g7.models;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;

@Entity
@PrimaryKeyJoinColumn(name = "idUser")
public class Gestionnaire extends User {

	public Gestionnaire() {
		super();
	}
	
	public Gestionnaire(User u) {
		super(u);
	}
	
}
