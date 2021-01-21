import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { User } from "../modules/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private url = "http://localhost:8080/users";
  constructor(private http: HttpClient) {}

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/list`);
  }

  public findByNom(name: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${name}`);
  }

  public save(obj: User): Observable<object> {
    return this.http.post(`${this.url}/create`, obj);
  }

  public delete(id: number): Observable<object> {
    return this.http.delete(`${this.url}/delete/${id}`);
  }

  public update(id: number, obj: User): Observable<object> {
    return this.http.put(`${this.url}/update/${id}`, obj);
  }

  public getObjet(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }
}
