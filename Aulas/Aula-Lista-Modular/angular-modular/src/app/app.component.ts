import { Component } from '@angular/core';
import { WishItem } from './shared/models/wishItem';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula-ang-01';

  items = [
    new WishItem('Coderbyte'),
    new WishItem('Docker'),
    new WishItem('Memoria Ram'),
    new WishItem('Sushi'),
    new WishItem('Java'),
    new WishItem('Php'),
    new WishItem('Crepe de Linguiça com Queijo'),
    new WishItem('Bolacha Trakinas de Morango', true),
    new WishItem('Dinheiro'),
    new WishItem('Gatos'),
    new WishItem('Emprego com c#'),
    new WishItem('Bolo de Morango'),
    new WishItem('Jujuba'),
    new WishItem('Laranjinha'),
    new WishItem('Cors Inexistente'),
    new WishItem('Viajar para o Japão'),
    new WishItem('RTX 4090'),
    new WishItem('Chá de Leite'),
    new WishItem('Paçoquinha')
  ];

  addWishToItem(wish:WishItem){
    this.items.push(wish)
  }
  
  filter: any = () => {};

  // get visibleItems(): WishItem[] {
  //   return this.items.filter(this.filter);
  // }

  // visibleItems: WishItem[] = this.items;
 
  // filterChanged(value: string): void {
  //   if (value === '0') this.visibleItems = this.items;
  //   else if (value === '1') this.visibleItems = this.items.filter(item => !item.isComplete);
  //   else this.visibleItems = this.items.filter(item => item.isComplete);
  // }

  // get visibleItems(): WishItem[] {
  //   let value = this.listFilter;
  //   if (value === '0') return this.items;
  //   else if (value === '1') return this.items.filter(item => !item.isComplete);
  //   else return this.items.filter(item => item.isComplete);
  // }


}
