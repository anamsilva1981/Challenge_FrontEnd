import { AsyncPipe, NgClass, NgIf, TitleCasePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { take } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product.interface';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  template: `
    <div class="card flex justify-content-center">
      <div class="product-detail" *ngIf="product">
        <div class="card flex justify-content-center mt-8">
          <p-card header="{{ product.title }}" [style]="{ width: '40rem' }">
            <ng-template pTemplate="header">
              <img
                alt="image product"
                src="{{ product.thumbnail }}"
                style="width: 40rem"
              />
            </ng-template>
            <p>{{ product.description }}</p>
          </p-card>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    AsyncPipe,
    TitleCasePipe,
    CarouselModule,
    ButtonModule,
    TagModule,
    CardModule,
    DataViewModule,
    RatingModule,
    FormsModule,
  ],
})
export class ProductDetailComponent implements OnInit {
  public product!: Product;
  public responsiveOptions: any[] | undefined;
  public id!: string | null;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productsService = inject(ProductsService);

  public ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.productsService
        .getProductById(Number(this.id))
        .pipe(take(1))
        .subscribe((product) => {
          this.product = product;
        });
    }
  }

  public getSeverity(
    product: Product
  ): string | 'success' | 'warning' | 'danger' | undefined {
    const stock = product.stock;

    if (stock == 0) {
      return 'danger';
    }
    if (stock <= 5) {
      return 'warning';
    } else {
      return 'sucess';
    }
  }
}
