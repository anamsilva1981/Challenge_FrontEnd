import { Component, inject } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  public productService = inject(ProductService)
  products: Observable<Product[]> = this.productService.getAllProducts();
  
  public teste(){
    console.log(this.productService.getAllProducts())
  }

}
