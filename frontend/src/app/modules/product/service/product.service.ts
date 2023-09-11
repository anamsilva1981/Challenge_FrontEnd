import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface/product';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.API}/products`);
  }
}
