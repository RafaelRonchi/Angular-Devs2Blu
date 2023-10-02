import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  readonly _url = 'http://localhost:3000/cursos/';
  constructor(private _http: HttpClient) { }

  getCursos(): Observable<any> {
    return this._http.get<any>(this._url);
  }

  addCurso(data: any): Observable<any> {
    return this._http.post<any>(this._url, data);
  }

  updateCurso(data: any, id: number): Observable<any> {
    return this._http.put<any>(this._url+ id, data);
  }

  deleteCurso(id: number): Observable<any> {
    return this._http.delete<any>(this._url + id);
  }
}
