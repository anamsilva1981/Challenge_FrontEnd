import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ProductService } from 'src/app/features/product/service/product.service';
import { Product, ProductResponse } from 'src/app/features/product/interface/product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [CommonModule, InputTextModule, FormsModule],
})
export class SearchComponent {
  public value: string = '';
  public products: Product[] = [];
  public allProducts: Product[] = [];

  constructor(private _productService: ProductService) {}

  public searchProduct(): void {
    const value = this.value.toLowerCase();
    console.log('Searching for:', value);

    this._productService.getProductsByTitle(value).subscribe(
      (response: ProductResponse) => {
        console.log('Response from API:', response);
        console.log('All Products:', this.allProducts);

        this.products = this.allProducts.filter(product => product.title.toLowerCase().includes(value));
        console.log('Filtered Products:', this.products);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
