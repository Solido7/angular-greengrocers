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
  sortBy: string = "none"

  cartTotal() {
    return this.itemService.cartTotal()
  }

  decreaseItem(item : CartItem){
    const index = this.cart.findIndex(elm => elm.id == item.id)
    const elm = this.cart[index]
    elm.quantity--

    if(elm.quantity == 0){
      this.cart.splice(index, 1)
    }
  }

  increaseItem(item : CartItem){
    const index = this.cart.findIndex(elm => elm.id == item.id)
    const elm = this.cart[index]
    elm.quantity++
  }

  async sortItems(){
    if (this.sortBy == "name"){
      (await this.itemService.items).sort(function(a, b){return a.name.localeCompare(b.name)})
    }
    else if(this.sortBy == "price"){
      (await this.itemService.items).sort(function(a, b){return a.price - b.price})
    } else {
      (await this.itemService.items).sort(function(a, b){return Number(a.id.split('-')[0]) - Number(b.id.split('-')[0])})
    } 
  }
}
