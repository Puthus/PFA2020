import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Monument } from "../modules/monument";
@Injectable({
  providedIn: "root",
})
export class MonumentService {
  private url = "http://localhost:8080/monuments";
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Monument[]> {
    return this.http.get<Monument[]>(`${this.url}/list`);
  }

  public findByNom(name: string): Observable<Monument> {
    return this.http.get<Monument>(`${this.url}/${name}`);
  }

  public save(obj: Monument): Observable<object> {
    return this.http.post(`${this.url}/create`, obj);
  }

  public delete(id: number): Observable<object> {
    return this.http.delete(`${this.url}/delete/${id}`);
  }

  public update(id: number, obj: Monument): Observable<object> {
    return this.http.put(`${this.url}/update/${id}`, obj);
  }

  public getObjet(id: number): Observable<Monument> {
    return this.http.get<Monument>(`${this.url}/${id}`);
  }
}
