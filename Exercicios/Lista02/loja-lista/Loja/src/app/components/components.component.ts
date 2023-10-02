import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent {
  Form: any;
  listaItens: any[] = [];

    constructor(private _service: ServicesService, public fb: FormBuilder) {
      this.Form = this.fb.group({
       id: '',
       nome: '',
       descricao: '',
       preco: ''
      })
    }
  ngOnInit(): void {
    this.getItens();
  }

  getItens(){
    this._service.getItens().subscribe(
        data => {
        this.listaItens= data;
      }
    );
  }
}
