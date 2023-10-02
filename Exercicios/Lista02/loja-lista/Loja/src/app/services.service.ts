import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  readonly _url = 'http://localhost:3000/loja'
  constructor(private __http  : HttpClient) { }

  getItens(): Observable<any>{
    return this.__http.get(this._url);
  }
}
