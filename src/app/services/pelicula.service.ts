import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/pelicula.model';

const baseUrl = 'https://my-json-server.typicode.com/jordiascension/angular-crud-emc/peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(baseUrl);
  }

  get(id: any): Observable<Pelicula> {
    return this.http.get<Pelicula>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(`${baseUrl}?title=${title}`);
  }
}
