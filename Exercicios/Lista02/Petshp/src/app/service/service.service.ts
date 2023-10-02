import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  readonly _url = 'http://localhost:3000/petShop'
  constructor(private __http:HttpClient) { }

  AddPet(data: any):Observable<any>{
    return this.__http.post(this._url, data);
  }

  DelPet(id: number):Observable<any>{
    console.log(id);

    return this.__http.delete(this._url + "/"+id);
  }

  GetPets(): Observable<any>{
    return this.__http.get(this._url);
  }
}
