import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routerProduct: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },

];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routerProduct)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}