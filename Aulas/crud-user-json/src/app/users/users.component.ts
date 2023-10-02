import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userForm:any
  users: any[] = [];
  constructor (public fb:FormBuilder, private service:CommonService){
    this.userForm = this.fb.group({
      Name:[""],
      Email:[""],
      Mobile:[""],
      Age:[""]
    })
  }

  ngOnInit(): void {
    this.GetAllUsers();
  }

  SubmitForm(){
    console.log(this.userForm.value)
    this.service.AddUpdateUser(this.userForm.value).subscribe(data =>{
      alert('Adicionado Com Sucesso')
    })
  }

  GetAllUsers(){
    this.service.GetAllUsers().subscribe(data =>{
      console.log(data)
      this.users = data;
    })
  }

  DelUserById(id : any){
    this.service.DelUserById(id).subscribe(data =>{
      alert('Deletado Com Sucesso')
      this.GetAllUsers();
    })
  }

  GetUserById(id : any){
    this.service.GetUserById(id).subscribe(data =>{
      alert('get user worked')
      document.querySelector('#nav-home-tab')?.classList.add('active')
      document.querySelector('#nav-home')?.classList.add('active')
      document.querySelector('#nav-home')?.classList.add('show')

      document.querySelector('#nav-profile-tab')?.classList.remove('active')
      document.querySelector('#nav-profile')?.classList.remove('active')
      this.userForm.patchValue(data)
    })
  }


}
