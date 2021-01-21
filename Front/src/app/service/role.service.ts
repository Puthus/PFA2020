import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Role } from "../modules/role";

@Injectable({
  providedIn: "root",
})
export class RoleService {
  private url = "http://localhost:8080/roles";
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.url}/list`);
  }

  public findByNom(name: string): Observable<Role> {
    return this.http.get<Role>(`${this.url}/${name}`);
  }

  public save(obj: Role): Observable<object> {
    return this.http.post(`${this.url}/create`, obj);
  }

  public delete(id: number): Observable<object> {
    return this.http.delete(`${this.url}/delete/${id}`);
  }

  public update(id: number, obj: Role): Observable<object> {
    return this.http.put(`${this.url}/update/${id}`, obj);
  }

  public getObjet(id: number): Observable<Role> {
    return this.http.get<Role>(`${this.url}/${id}`);
  }
}
