import { AdminRegional } from "./admin-regional";
import { Monument } from "./monument";
import { Recenseur } from "./recenseur";
export class Region {
  id: number;
  nom: string;
  libelle: string;
  adminRegional: AdminRegional;
  monuments: Monument[];
  recenseurs: Recenseur[];
}
