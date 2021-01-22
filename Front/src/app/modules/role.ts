/* eslint-disable no-shadow */
export enum RoleName {
  roleGestionnaire,
  roleRecenseur,
  roleAdmin,
}
export class Role {
  id: number;
  name: RoleName;
}
