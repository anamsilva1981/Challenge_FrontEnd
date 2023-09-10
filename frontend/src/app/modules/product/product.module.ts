import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { PrimeNGModule } from 'src/app/prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule, PrimeNGModule
  ],
  exports: [ProductComponent]
})
export class ProductModule { 
  
}
