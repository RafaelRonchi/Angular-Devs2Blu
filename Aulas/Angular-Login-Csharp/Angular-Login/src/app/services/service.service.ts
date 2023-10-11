import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  readonly url = 'http://localhost:5011/api/Auth/';

  constructor(private http:HttpClient) { }

  public register(user: User): Observable<any>{
    return this.http.post<any>(this.url + "register", user);
  }

  public login(user: User): Observable<string>{
    return this.http.post(this.url + "login", user, {responseType: 'text'});
  }

  public getMe(): Observable<string>{
    return this.http.get(this.url,  {responseType: 'text', } );
  }
}
