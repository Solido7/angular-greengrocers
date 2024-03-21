import { Component, Input } from '@angular/core';
import { ItemService } from 'src/app/item.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  constructor(private readonly itemService: ItemService) { }

  @Input('item') item: Item | null = null

  addToCart() {
    if (this.item) this.itemService.addToCart(this.item)
  }
}
