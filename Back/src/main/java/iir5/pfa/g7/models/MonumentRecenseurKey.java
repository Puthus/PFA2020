package iir5.pfa.g7.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
class MonumentRecenseurKey implements Serializable {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(name = "recenseur_id")
    private long recenseurId;

    @Column(name = "monument_id")
    private long monumentId;

	public MonumentRecenseurKey() {
		super();
	}

	public long getrecenseurId() {
		return recenseurId;
	}

	public void setrecenseurId(long recenseurId) {
		this.recenseurId = recenseurId;
	}

	public long getMonumentId() {
		return monumentId;
	}

	public void setMonumentId(long monumentId) {
		this.monumentId = monumentId;
	}

    
    
}

