export enum RoleName {
  ROLE_GESTIONNAIRE,
  ROLE_RECENSEUR,
  ROLE_ADMIN,
}
export class Role {
  id: number;
  name: RoleName;
}
