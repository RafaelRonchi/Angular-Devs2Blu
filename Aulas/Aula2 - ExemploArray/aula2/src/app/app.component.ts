import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tipoInput = "checkbox"
  estiloBoot = "btn btn-primary"

  items : WishItem[] = [
    new WishItem('Coderbyte'),
    new WishItem('Docker'),
    new WishItem('Memoria Ram'),
    new WishItem('Sushi'),
    new WishItem('Java'),
    new WishItem('Php',true),
    new WishItem('Crepe de Linguiça com Queijo'),
    new WishItem('Bolacha Trakinas de Morango'),
    new WishItem('Dinheiro'),
    new WishItem('Gatos'),
    new WishItem('Emprego com c#'),
    new WishItem('Bolo de Murango'),
    new WishItem('Jujuba'),
    new WishItem('Laranjinha'),
    new WishItem('Cors Inexistente'),
    new WishItem('Viajar para o Japão'),
    new WishItem('RTX 4090'),
    new WishItem('Chá de Leite'),
    new WishItem('Paçoquinha',true),
    new WishItem('Sorvete'),
    new WishItem('Kombi azul calcinha com cortina amarela de flor <3')
  ]
  title = 'Minha Lista de Desejos';
  newWishText = ""
  visibleItens : WishItem[] = this.items

  addNewWish(){
    this.items.push(new WishItem(this.newWishText))
    this.newWishText = ''
  }
  toggleItem(item:WishItem){
    item.isComplete = !item.isComplete
  }

  listFilter: String = ""
  onFilterChange(value: any){
    this.listFilter = value
    if (value === '0'){
      this.visibleItens = this.items
    }
    else if (value === '1'){
      this.visibleItens = this.items.filter(item => !item.isComplete)
    }
    else{
      this.visibleItens = this.items.filter(item => item.isComplete)
    }
  }

}
