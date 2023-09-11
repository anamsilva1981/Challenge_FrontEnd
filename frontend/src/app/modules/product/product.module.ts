import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { PrimeNGModule } from 'src/app/prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';


@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, PrimeNGModule, FormsModule, ProductRoutingModule],
  exports: [ProductComponent],
})
export class ProductModule {}
