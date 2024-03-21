import { Component } from '@angular/core';
import { ItemService } from './item.service';
import { CartItem } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-green-grocers';
  constructor(private readonly itemService: ItemService) { }

  cart = this.itemService.cart

  cartTotal() {
    return this.itemService.cartTotal()
  }

  decreaseItem(item : CartItem){
    const index = this.cart.findIndex(elm => elm.id == item.id);
    const elm = this.cart[index];
    elm.quantity--;

    if(elm.quantity == 0){
      this.cart.splice(index, 1);
    }
  }

  increaseItem(item : CartItem){
    const index = this.cart.findIndex(elm => elm.id == item.id);
    const elm = this.cart[index];
    elm.quantity++;
  }
}
