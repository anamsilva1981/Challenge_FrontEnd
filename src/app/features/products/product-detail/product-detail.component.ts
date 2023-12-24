import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncPipe, NgClass, NgIf, TitleCasePipe } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { take } from 'rxjs';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/core/interfaces/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
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
        .subscribe(product => {
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
