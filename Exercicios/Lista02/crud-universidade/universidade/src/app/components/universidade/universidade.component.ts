import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-universidade',
  templateUrl: './universidade.component.html',
  styleUrls: ['./universidade.component.css']
})
export class UniversidadeComponent implements OnInit{
  form: any;
  listaCursos: any[] = [ ];
  constructor(public fb: FormBuilder, private _service: ServiceService){
    this.form = this.fb.group({
      nome: '',
      descricao: '',
      valor: '',
      alunos: ''
    });
  }
  ngOnInit(): void {
    this.getCursos();
  }

  addCurso(){
    this._service.addCurso(this.form.value).subscribe(res => {
      console.log(res);
      alert('Curso adicionado com sucesso!');
      this.getCursos();
    });
  }

  getCursos(){
    this._service.getCursos().subscribe(res => {
      this.listaCursos = res;
    });
  }

  deleteCurso(id: number){
    this._service.deleteCurso(id).subscribe(res => {
      console.log(res);
      alert('Curso deletado com sucesso!');
      this.getCursos();
    });
  }

  updateCurso(id: number){
    this._service.updateCurso(this.form.value, id).subscribe(res => {
      console.log(res);
      alert('Curso atualizado com sucesso!');
      this.getCursos();
    });
  }
}
