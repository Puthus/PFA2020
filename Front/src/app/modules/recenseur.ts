import { User } from "./user";
import { Region } from "./region";
import { Monument } from "./monument";
import { Constat } from "./constat";
export class Recenseur extends User {
  region: Region;
  monuments: Monument[];
  constats: Constat[];
}
