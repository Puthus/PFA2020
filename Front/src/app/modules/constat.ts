import { MonumentRecenseurKey } from './monument-recenseur-key';
import { Recenseur } from './recenseur';
import { Monument } from './monument';
export class Constat {
  id: MonumentRecenseurKey;
  recenseur: Recenseur;
  monument: Monument;
  date: Date;
  type: string;
}
