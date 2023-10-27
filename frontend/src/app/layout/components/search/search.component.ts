import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Product } from 'src/app/core/interfaces/product.interface';
import { ProductsService } from 'src/app/core/services/products/products.service';

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

  private _ProductsService = inject(ProductsService);

  public searchProduct(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.products = this.allProducts.filter((product) =>
      product.title.toLowerCase().includes(value)
    );
  }

}
