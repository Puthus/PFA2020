import { Role } from "./role";
export class User {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  username: string;
  roles: Role[];
}
