import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductResponse } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
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

}
