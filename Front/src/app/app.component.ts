import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';
import {Title} from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [Title]
})
export class AppComponent implements OnInit {
  private roles: string[];
  authority: string;

  constructor(private tokenStorage: TokenStorageService, private title: Title) {
    this.title.setTitle('Projet');
  }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_GESTIONNAIRE') {
          this.authority = 'gestionnaire';
          return false;
        }
        this.authority = 'recenseur';
        return true;
      });
    }
  }
}
