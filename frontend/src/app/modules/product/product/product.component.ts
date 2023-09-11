import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../interface/product';
import { take } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit{
  private readonly productService = inject(ProductService); 
  public layout: 'list' | 'grid' = 'grid';
  public product!: Product[];

  constructor() {
    this.productService.getAllProducts();
  }

  public ngOnInit(): void {
    this.getAllProductsService();
  }

  public getAllProductsService(): void {
    this.productService.getAllProducts().pipe().subscribe( product => { console.log(product); this.product = product})
    
  }

  public getSeverity(product: Product): string | undefined {
    const stock: any = product.stock;
    return stock >= 1 ? 'sucess' : 'danger';
};
}