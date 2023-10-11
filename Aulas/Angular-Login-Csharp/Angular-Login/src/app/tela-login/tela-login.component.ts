import { User } from './../models/user';
import { ServiceService as Service } from './../services/service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent {
  user: User = new User();
  constructor(private authService:Service) { }

  register(user1:User){
    this.authService.register(user1).subscribe();
  }

  login(user1:User){
    this.authService.login(user1).subscribe((token:string) => {
      localStorage.setItem('authToken', token);
    });
  }

  getMe(){
    this.authService.getMe().subscribe((name:string) => {
      alert(name);
    });
  }
}
