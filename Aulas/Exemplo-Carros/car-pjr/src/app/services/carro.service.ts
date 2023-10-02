import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  readonly _url = 'http://localhost:3000/carros/'

  constructor(private _http:HttpClient) { }


  AdicionarCarro(data:any):Observable<any>{
      return this._http.post(this._url,data)
  }

  PegarTodosCarros():Observable<any>{
    return this._http.get(this._url)
  }

  AtualizarCarro(data:any, id:number):Observable<any>{
    return this._http.put(this._url+id,data)
    
  }
  DeletarCarro(id:number):Observable<any>{
    return this._http.delete(this._url+id)
  }
}
