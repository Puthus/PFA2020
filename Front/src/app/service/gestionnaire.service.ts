import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gestionnaire } from '../modules/gestionnaire';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root',
})
export class GestionnaireService {
  private url = 'http://localhost:8080/gestionnaires';
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Gestionnaire[]> {
    return this.http.get<Gestionnaire[]>(`${this.url}/list`);
  }

  public findByNom(name: string): Observable<Gestionnaire> {
    return this.http.get<Gestionnaire>(`${this.url}/${name}`);
  }

  public save(obj: Gestionnaire): Observable<object> {
    return this.http.post(`${this.url}/create`, obj);
  }

  public delete(id: number): Observable<object> {
    return this.http.delete(`${this.url}/delete/${id}`);
  }

  public update(id: number, obj: Gestionnaire): Observable<object> {
    return this.http.put(`${this.url}/update/${id}`, obj);
  }

  public getObjet(id: number): Observable<Gestionnaire> {
    return this.http.get<Gestionnaire>(`${this.url}/${id}`);
  }
}
