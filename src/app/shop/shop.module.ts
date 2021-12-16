import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';


@NgModule({
  declarations: [
    ShopComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProductCarouselComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
