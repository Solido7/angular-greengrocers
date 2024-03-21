import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from 'src/app/models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input('item') item : CartItem | null = null;
  @Output('remove') remove = new EventEmitter<CartItem>();
  @Output('add') add = new EventEmitter<CartItem>();

  removeItem(){
    if(!this.item){
      throw new Error("cannot remove null value from cart");
    }
    this.remove.emit(this.item);
  }

  addItem(){
    if(!this.item){
      throw new Error("cannot add null value to cart");
    }
    this.add.emit(this.item);
  }

}
