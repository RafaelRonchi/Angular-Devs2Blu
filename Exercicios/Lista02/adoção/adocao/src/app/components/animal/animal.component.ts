import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  constructor(private service: ServiceService,  private route: ActivatedRoute){}
  animalId: any;
  animal: any;

  ngOnInit(): void {
    // Obtenha o valor do parâmetro ID da rota
    this.route.paramMap.subscribe(params => {
      this.animalId = params.get('id');
     this.getAnimal(this.animalId);
    });
  }

  getAnimal(id: number){
    this.service.getAdocaoById(id).subscribe((resposta: any) => {
     console.log(
      this.animal = resposta
      );
    })


  }

}
