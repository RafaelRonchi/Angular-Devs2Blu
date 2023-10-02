import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-pet-shop',
  templateUrl: './pet-shop.component.html',
  styleUrls: ['./pet-shop.component.css']
})
export class PetShopComponent implements OnInit{
    petForm: any;
    listaPets: any[] = [];

    constructor(private _service: ServiceService, public fb: FormBuilder) {
      this.petForm = this.fb.group({
       id: '',
       name: '',
       price: ''
      })
    }
  ngOnInit(): void {
    this.getPets();
  }

  getPets(){
    this._service.GetPets().subscribe(
        data => {
        this.listaPets = data;
      }
    );
  }

  addPet(){
    this._service.AddPet(this.petForm.value).subscribe(
      data => {
        this.getPets();
      }
    );
  }

  delPet(id: number){
    console.log(id);

    this._service.DelPet(id).subscribe(
      data => {
        this.getPets();
      }
    );
  }
}
