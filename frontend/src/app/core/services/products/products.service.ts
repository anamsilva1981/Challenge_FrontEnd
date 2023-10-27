import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductResponse } from '../../interfaces/product-response.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _http = inject(HttpClient);

  public getAllProducts(): Observable<ProductResponse> {
    return this._http.get<ProductResponse>(`${environment.API}/products`);
  }

  public getProductById(id: string): Observable<ProductResponse> {
    return this._http.get<ProductResponse>(`${environment.API}/products/${id}`);
  }

  public getProductByName(title: string): Observable<ProductResponse> {
    return this._http.get<ProductResponse>(`${environment.API}/products/${title}`);
  }

  public getProductsByCategory(category?: null | string): Observable<ProductResponse[]> {
    return category === null || undefined
      ? this._http.get<ProductResponse[]>(`${environment.API}/products`)
      : this._http.get<ProductResponse[]>(
          `${environment.API}/products?category_id=${category}`
        );
  }

}
