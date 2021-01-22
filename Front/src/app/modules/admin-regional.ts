import { User } from './user';
import { Monument } from './monument';
import { Region } from './region';
export class AdminRegional extends User {
  regions: Region[];
  monuments: Monument[];
}
