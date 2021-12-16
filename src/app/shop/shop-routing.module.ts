import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      { path: 'product-details', component: ProductDetailsComponent },
      { path: 'product-list/:page', component: ProductListComponent },
      { path: 'product-list/:marca/:page', component: ProductListComponent },
      { path: 'product-list/:area/:page', component: ProductListComponent },
      { path: '**', redirectTo: 'shop' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
