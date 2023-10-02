import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-adocao',
  templateUrl: './adocao.component.html',
  styleUrls: ['./adocao.component.css']
})
export class AdocaoComponent implements OnInit {
  constructor(private service: ServiceService){}

  listaAdocao: any[] = []
  ngOnInit(): void {
    this.service.getAdocao().subscribe((resposta: any) => {
      this.listaAdocao = resposta
    })
  }
}
