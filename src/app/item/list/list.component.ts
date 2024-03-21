import { Component } from '@angular/core';
import { ItemService } from 'src/app/item.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private readonly itemService: ItemService) { }

  items: Promise<Array<Item>> = this.itemService.items
}
