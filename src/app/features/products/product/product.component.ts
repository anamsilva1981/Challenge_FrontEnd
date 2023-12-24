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
import { Observable, Subscription } from 'rxjs';
import { ProductResponse } from 'src/app/core/interfaces/product-response.interface';
import { Router } from '@angular/router';


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
  private router = inject(Router);

  public readonly products$: Observable<ProductResponse> = this.productsService.products$;
  public subscription!: Subscription;

  public layout: 'list' | 'grid' = 'grid';
  public products!: Product[];


  public ngOnInit(): void {
    this.subscription = this.products$.subscribe((productList) => {
      productList.products.forEach(product => {
        if (product.stock > 0) product.inventoryStatus = 'In Stock';
        if (product.stock < 1) product.inventoryStatus = 'Out Of Stock';
      })
      this.products = productList.products;
    });
    this.productsService.getAllProducts();
  }

  public getSeverity(stock: number): string | undefined {
    return stock >= 1 ? 'success' : 'danger';
  };

   public goToDetails(id: number): void {
    this.router.navigateByUrl(`products/detail/${id}`);
  }
}
