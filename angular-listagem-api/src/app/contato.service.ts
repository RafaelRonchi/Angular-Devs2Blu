import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
 
@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  contatosU = 'http://localhost:8080/cliente'

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(this.contatosU); // Use template literal without $ sign
  }
  
}
