import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CarroService } from './services/carro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prj-carro';

  carroForm: any
  listaCarros: any[] = []
  tipo:string = "Cadastrar"
  constructor(public fb:FormBuilder, private _carroService:CarroService,){
    this.carroForm = this.fb.group({
      id:'',
      modelo:'',
      marca:'',
      ano:''
    })
  }
  ngOnInit(): void {
    this.pegarCarros()
    
    
  }


  cadastrarCarro(){
    if(this.tipo == 'Atualizar'){
      this._carroService.AtualizarCarro(this.carroForm.value,this.carroForm.value.id)
      .subscribe({
        next:()=>{
          alert('Carro atualizado com Sucesso')
          this.pegarCarros()
        }
      })
      this.tipo = 'Cadastrar'
      this.carroForm.reset()
    }else{
      this._carroService.AdicionarCarro(this.carroForm.value).subscribe({
        next:()=>{
          alert('Carro Adicionado com Sucesso')
          this.pegarCarros()
        }
      })
    }   
  }
  pegarCarros(){
    this._carroService.PegarTodosCarros().subscribe({
      next:(res)=>{
        this.listaCarros = res
        console.log(this.listaCarros)
      }
    })
  }
  atualizar(data:any){
    this.carroForm.patchValue(data)
    this.tipo = 'Atualizar'
  }
  deletar(id:number){
    this._carroService.DeletarCarro(id).subscribe({
      next:()=>{
        alert('Carro excluído com sucesso!')
        this.pegarCarros()
      }
    })
  }
}
