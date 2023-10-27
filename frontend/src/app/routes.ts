import { Routes } from "@angular/router";
import { ProductComponent } from "./features/products/product/product.component";
import { ProductDetailComponent } from "./features/products/product-detail/product-detail.component";

export const productRoutes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent,
  },
];
