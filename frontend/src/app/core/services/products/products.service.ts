import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductResponse } from '../../interfaces/product-response.interface';

const productResponse = {
  products: [],
  total: 100,
  skip: 0,
  limit: 30
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _http = inject(HttpClient);
  private _productsSubject$ = new BehaviorSubject<ProductResponse>(productResponse);

  public readonly products$: Observable<ProductResponse> = this._productsSubject$.asObservable();


  public getAllProducts(): void {
    this._http.get<ProductResponse>(`${environment.API}/products`).pipe(take(1))
    .subscribe(response => {
      this._productsSubject$.next(response);
    });
  }

  public getProductById(id: string): Observable<ProductResponse> {
    return this._http.get<ProductResponse>(`${environment.API}/products/${id}`);
  }

  public getProductByFilter(filter: string): void {
    this._http.get<ProductResponse>(`${environment.API}/products/search?q=${filter}`).pipe(take(1))
    .subscribe(response => {
      this._productsSubject$.next(response);
    });
  }
}
