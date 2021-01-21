import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AdminRegional } from "../modules/admin-regional";
import { Observable } from "rxjs/Observable";
import { NbAuthService } from '@nebular/auth';

@Injectable({
  providedIn: "root",
})
export class AdminRegionalService {
  private url = "http://localhost:8080/adminRegionals";
  constructor(private http: HttpClient) {}

  public getAll(): Observable<AdminRegional[]> {
    return this.http.get<AdminRegional[]>(`${this.url}/list`);
  }

  public findByNom(name: string): Observable<AdminRegional> {
    return this.http.get<AdminRegional>(`${this.url}/${name}`);
  }

  public save(obj: AdminRegional): Observable<object> {
    return this.http.post(`${this.url}/create`, obj);
  }

  public delete(id: number): Observable<object> {
    return this.http.delete(`${this.url}/delete/${id}`);
  }

  public update(id: number, obj: AdminRegional): Observable<object> {
    return this.http.put(`${this.url}/update/${id}`, obj);
  }

  public getObjet(id: number): Observable<AdminRegional> {
    return this.http.get<AdminRegional>(`${this.url}/${id}`);
  }
}
