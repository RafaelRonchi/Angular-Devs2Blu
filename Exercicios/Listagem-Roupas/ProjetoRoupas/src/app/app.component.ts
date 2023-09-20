import { roupa } from './../shared/models/roupa';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetoRoupas';
  roupa: roupa;


  roupas : roupa[];
  roupasFiltro : roupa[];
  filtro: string = "todos";
  constructor(){
    this.roupa = new roupa();
    this.roupas = [];
    this.roupasFiltro = this.roupas;
  }

  addRoupas(){
    // console.log(this.roupa.nome);
    // console.log(this.roupa.categoria);

    // Quero que faça uma validação antes de colocar no array pra ver se não tem valores vazios
     if (this.roupa.nome == undefined || this.roupa.categoria == undefined || this.roupa.nome == "" || this.roupa.categoria == ""){
       alert("Preencha todos os campos");
       return;
     }
    this.roupas.push(this.roupa);
    this.roupa = new roupa();

  }

  listarRoupas(){
    console.log(this.filtro);

     if (this.filtro == "calca"){

      this.roupasFiltro = this.roupas.filter((roupa) => roupa.categoria == "calca");
     } else if (this.filtro == "camisa"){
      this.roupasFiltro = this.roupas.filter((roupa) => roupa.categoria == "camisa");
     } else if (this.filtro == "casaco"){
      this.roupasFiltro = this.roupas.filter((roupa) => roupa.categoria == "casaco");
     } else{
      this.roupasFiltro = this.roupas;
     }
}
}
