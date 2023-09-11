import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { PrimeNGModule } from 'src/app/prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, PrimeNGModule, FormsModule],
  exports: [ProductComponent],
})
export class ProductModule {}
