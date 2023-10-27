import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ProductService } from 'src/app/features/product/service/product.service';
import { Product } from 'src/app/features/product/interface/product';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, InputTextModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],

})
export class SearchComponent {
  public value!: string;
  public products!: Product[];
  public allProducts: Product[] = [];

  private _productService = inject(ProductService);

  public searchProduct(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.products = this.allProducts.filter((product) =>
      product.title.toLowerCase().includes(value)
    );
  }

}
