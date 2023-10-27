import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductResponse } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _http: HttpClient) {}

  public getAllProducts(): Observable<ProductResponse> {
    return this._http.get<ProductResponse>(`${environment.API}/products`);
  }

  public getProductById(id: string): Observable<ProductResponse> {
    return this._http.get<ProductResponse>(`${environment.API}/products/${id}`);
  }

  public getProductsByTitle(title: string): Observable<ProductResponse> {
    return this._http.get<ProductResponse>(`${environment.API}/products?title=${title}`);
  }
}
