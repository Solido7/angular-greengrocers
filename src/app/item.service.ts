import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item, CartItem } from './models/item';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  http = inject(HttpClient);
  apiUrl = 'https://boolean-api-server.fly.dev/groceries'
  items: Promise<Item[]> = Promise.resolve(this.getItems())
  cart: Array<CartItem> = []
  
  async getItems(): Promise<Array<Item>> {
    return await firstValueFrom(this.http.get(this.apiUrl)) as Array<Item>;
  }

  addToCart(item: Item) {
    if (this.cart.some(elm => elm.id == item.id)) return;
    this.cart.push({ ...item, quantity: 1 })
  }

  cartTotal() {
    return this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }
}
