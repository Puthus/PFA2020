import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Region } from '../modules/region';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  private url = 'http://localhost:8080/regions';
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Region[]> {
    return this.http.get<Region[]>(`${this.url}/list`);
  }

  public findByNom(name: string): Observable<Region> {
    return this.http.get<Region>(`${this.url}/${name}`);
  }

  public save(obj: Region): Observable<object> {
    return this.http.post(`${this.url}/create`, obj);
  }

  public delete(id: number): Observable<object> {
    return this.http.delete(`${this.url}/delete/${id}`);
  }

  public update(id: number, obj: Region): Observable<object> {
    return this.http.put(`${this.url}/update/${id}`, obj);
  }

  public getObjet(id: number): Observable<Region> {
    return this.http.get<Region>(`${this.url}/${id}`);
  }
}
