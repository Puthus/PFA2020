import { Region } from './region';
import { AdminRegional } from './admin-regional';
import { Recenseur } from './recenseur';
import { Evenement } from './evenement';
import { Constat } from './constat';
import { Travail } from './travail';
export class Monument {
  id: number;
  nom: string;
  latitude: number;
  longitude: number;
  region: Region;
  adminRegional: AdminRegional;
  recenseur: Recenseur;
  dateCreation: Date;
  evenements: Evenement[];
  constats: Constat[];
  travaux: Travail[];
}
