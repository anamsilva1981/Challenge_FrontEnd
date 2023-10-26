import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';

import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';


@NgModule({
    imports: [CommonModule, FormsModule, ProductRoutingModule, ProductComponent],
    exports: [ProductComponent],
})
export class ProductModule {}
