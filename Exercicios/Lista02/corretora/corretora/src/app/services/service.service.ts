import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  readonly _url = 'http://localhost:3000/corretora/'

  constructor(private _http :  HttpClient) { }

  addImo(data: any): Observable<any>{
    return this._http.post(this._url, data)
  }

  delImo(id: any): Observable<any>{
    return this._http.delete(this._url + id)
  }

  getImo(): Observable<any>{
    return this._http.get(this._url)
  }

  updateImo(id: any, data: any): Observable<any>{
    return this._http.put(this._url + id, data)
  }

}
