import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../model/user";
import { data } from "jquery";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private gestionnaireUrl = "http://localhost:8080/api/test/gestionnaire";
  private recenseurUrl = "http://localhost:8080/api/test/recenseur";
  private adminUrl = "http://localhost:8080/api/test/admin";

  private url = "http://localhost:8080/gestionnaires/list";

  constructor(private http: HttpClient) {}

  getGestionnaireBoard(): Observable<string> {
    return this.http.get(this.gestionnaireUrl, { responseType: "text" });
  }

  getRecenseurBoard(): Observable<string> {
    return this.http.get(this.recenseurUrl, { responseType: "text" });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: "text" });
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}`);
  }
}
