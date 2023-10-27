import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { Product } from '../../../core/interfaces/product.interface';
import { ProductsService } from '../../../core/services/products/products.service';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    standalone: true,
    imports: [
        DataViewModule,
        SharedModule,
        RatingModule,
        FormsModule,
        TagModule,
        ButtonModule,
        CardModule,
    ],
})
export class ProductComponent implements OnInit{
  private readonly productsService = inject(ProductsService);
  public layout: 'list' | 'grid' = 'grid';
  public products!: Product[];

  public ngOnInit(): void {
    this.getAllProducts();
  }

  public getAllProducts(): void {
    this.productsService.getAllProducts().subscribe({
      next: (productsList) => {
        productsList.products.forEach(product => {
          if (product.stock > 0) product.inventoryStatus = 'In Stock';
          if (product.stock < 1) product.inventoryStatus = 'Out Of Stock';
        })
        this.products = productsList.products;
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  public getSeverity(stock: number): string | undefined {
    return stock >= 1 ? 'sucess' : 'danger';
  };
}
