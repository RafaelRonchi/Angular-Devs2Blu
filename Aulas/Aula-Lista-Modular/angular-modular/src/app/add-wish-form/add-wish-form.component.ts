import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css']
})
export class AddWishFormComponent implements OnInit{

  @Output() addWish = new EventEmitter<WishItem>();

  constructor(){}

  ngOnInit(): void {
    
  }

  newWishText: string = '';
  addNewWish(): void {
    // this.items.push();
    this.addWish.emit(new WishItem(this.newWishText))
    this.newWishText= '';
  }
}