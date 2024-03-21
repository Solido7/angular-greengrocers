import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './item/list/list.component';
import { ItemComponent } from './item/item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './item/cart/cart.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ListComponent, ItemComponent, CartComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
