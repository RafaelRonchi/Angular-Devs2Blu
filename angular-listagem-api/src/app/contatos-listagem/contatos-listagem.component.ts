import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {
  contatos: Array<any> | undefined;

  constructor(private contatosService: ContatoService){}
  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.contatosService.listar().subscribe(res => this.contatos = res); // Fix typo "subscrible" and use "res" instead of "dados"
  }
  
}
