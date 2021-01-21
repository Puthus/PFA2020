import { Role } from "./role";
export class User {
  id: number;
  nom: string;
  prenom: string;
  username: string;
  password: string;
  email: string;
  active: boolean;
  roles: Role[];
}
