import { Component, OnInit } from '@angular/core';
import { ServiceService } from './services/service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'corretora';
  form: any;

  listImo: any[] = [];
  constructor(public fb:FormBuilder, private service:ServiceService) {

    this.form = this.fb.group({
      id: [''],
      nome: [''],
      codigo: [''],
      logo: ['']
    })
  }

  ngOnInit(): void {
    this.getImos();
  }


  addImo(){
    this.service.addImo(this.form.value).subscribe(res => {
      alert('Imobiliária cadastrada com sucesso!')
      this.getImos();
    })
  }

  delImo(id: any){
    this.service.delImo(id).subscribe(res => {
      alert('Imobiliária deletada com sucesso!')
      this.getImos();
    })
  }


  updateImo(id:number){
    this.service.updateImo(id, this.form.value).subscribe(res => {
      alert('Imobiliária atualizada com sucesso!')
      this.getImos();
    }
      )
  }

  getImos(){
    this.service.getImo().subscribe(res => {
      this.listImo = res
    })
  }
}
