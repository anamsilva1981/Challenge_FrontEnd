import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { Observable, Subscription } from 'rxjs';
import { ProductResponse } from 'src/app/core/interfaces/product-response.interface';
import { Product } from '../../../core/interfaces/product.interface';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-product',
  template: `
    <div class="card">
      <div
        class="flex flex-wrap md:justify-content-between justify-content-center"
      >
        <div
          class="text-blue-700 w-full h-6rem surface-overlay font-bold m-2 flex align-items-center justify-content-center"
        >
          <h1>Lista de Produtos</h1>
        </div>
      </div>
      <p-dataView
        #dv
        [value]="products"
        layout="grid"
        [paginator]="true"
        [rows]="8"
      >
        <ng-template let-product pTemplate="gridItem">
          <div class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
            <div class="p-4 border-1 surface-border surface-card border-round">
              <div
                class="flex flex-wrap align-items-center justify-content-between gap-2"
              >
                <span class="flex align-items-center gap-2">
                  <i class="pi pi-tag"></i>
                  <span class="font-semibold">{{ product.category }}</span>
                </span>
                <p-tag
                  [value]="product.inventoryStatus"
                  [severity]="getSeverity(product.stock)"
                ></p-tag>
              </div>
              <div class="flex flex-column align-items-center gap-3 py-5">
                <img
                  class="w-9 shadow-2 border-round"
                  [src]="product.thumbnail"
                  [alt]="product.title"
                  style="height: 12rem"
                />
                <div class="text-2xl font-bold">{{ product.title }}</div>
                <p-rating
                  [ngModel]="product.rating"
                  [readonly]="true"
                  [cancel]="false"
                ></p-rating>
              </div>
              <div class="flex align-items-center justify-content-between">
                <span class="text-2xl font-semibold">{{
                  '$' + product.price
                }}</span>
                <button
                  pButton
                  icon="pi pi-search"
                  class="p-button-rounded"
                  (click)="goToDetails(product.id)"
                ></button>
              </div>
            </div>
          </div>
        </ng-template>
      </p-dataView>
    </div>
  `,
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
export class ProductComponent implements OnInit {
  private readonly productsService = inject(ProductsService);
  private router = inject(Router);

  public readonly products$: Observable<ProductResponse> =
    this.productsService.products$;
  public subscription!: Subscription;

  public layout: 'list' | 'grid' = 'grid';
  public products!: Product[];

  public ngOnInit(): void {
    this.subscription = this.products$.subscribe((productList) => {
      productList.products.forEach((product) => {
        if (product.stock > 0) product.inventoryStatus = 'In Stock';
        if (product.stock < 1) product.inventoryStatus = 'Out Of Stock';
      });
      this.products = productList.products;
    });
    this.productsService.getAllProducts();
  }

  public getSeverity(stock: number): string | undefined {
    return stock >= 1 ? 'success' : 'danger';
  }

  public goToDetails(id: number): void {
    this.router.navigateByUrl(`products/detail/${id}`);
  }
}
