import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { NbRoleProvider } from '@nebular/security';
import { UsersService } from '../service/users.service';
import { User } from '../modules/user';

@Injectable()
export class RoleProvider implements NbRoleProvider {
  constructor(private authService: NbAuthService, private userservice: UsersService) {}
  username: string;
  role: Observable<string>;
  getRole(): Observable<string> {
    // this.authService.isAuthenticated().subscribe((data) => console.log("auth? : ", data));
    this.authService.getToken().subscribe((data) => (this.username = data.getPayload()['sub']));
    this.role = this.userservice.findByUsername(this.username).pipe(map((user: User) => user.roles[0].name.toString()));
    // this.role.subscribe((data) => console.log(data));
    return this.role;
  }
}
