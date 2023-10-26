import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit{
  private readonly productService = inject(ProductService);
  public layout: 'list' | 'grid' = 'grid';
  public products!: Product[];

  constructor() {}

  public ngOnInit(): void {
    console.log('ngOnInit')
    this.getAllProductsService();
  }

  public getAllProductsService(): void {
    console.log('teste')
    this.productService.getAllProducts().subscribe({
      next: (productsList) => {
        this.products = productsList.products;
        console.log(productsList);
      },

      error: (error) => {
        console.log(error)
      }

    })

  }

  public getSeverity(stock: number): string | undefined {
    // const stock: any = product.stock;
    return stock >= 1 ? 'sucess' : 'danger';
  };
}

// ajustar o grid
// colocar a paginacao
// severety
// paginacao
// sort

// Detalhe do Products-
