/* eslint-disable @typescript-eslint/ban-types */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Travail } from '../modules/travail';

@Injectable({
  providedIn: 'root',
})
export class TravailService {
  private url = 'http://localhost:8080/travails';
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Travail[]> {
    return this.http.get<Travail[]>(`${this.url}/list`);
  }

  public findByNom(name: string): Observable<Travail> {
    return this.http.get<Travail>(`${this.url}/${name}`);
  }

  public save(obj: Travail): Observable<object> {
    return this.http.post(`${this.url}/create`, obj);
  }

  public delete(id: number): Observable<object> {
    return this.http.delete(`${this.url}/delete/${id}`);
  }

  public update(id: number, obj: Travail): Observable<object> {
    return this.http.put(`${this.url}/update/${id}`, obj);
  }

  public getObjet(id: number): Observable<Travail> {
    return this.http.get<Travail>(`${this.url}/${id}`);
  }
}
