import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recenseur } from "../modules/recenseur";
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: "root",
})
export class RecenseurService {
  private url = "http://localhost:8080/recenseurs";
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Recenseur[]> {
    return this.http.get<Recenseur[]>(`${this.url}/list`);
  }

  public findByNom(name: string): Observable<Recenseur> {
    return this.http.get<Recenseur>(`${this.url}/${name}`);
  }

  public save(obj: Recenseur): Observable<object> {
    return this.http.post(`${this.url}/create`, obj);
  }

  public delete(id: number): Observable<object> {
    return this.http.delete(`${this.url}/delete/${id}`);
  }

  public update(id: number, obj: Recenseur): Observable<object> {
    return this.http.put(`${this.url}/update/${id}`, obj);
  }

  public getObjet(id: number): Observable<Recenseur> {
    return this.http.get<Recenseur>(`${this.url}/${id}`);
  }
}
