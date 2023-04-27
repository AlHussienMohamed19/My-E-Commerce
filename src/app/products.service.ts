import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl:string = 'https://route-ecommerce.onrender.com/api/v1';

  constructor(private _HttpClient: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/products`);
  }

  getProductById(id: string): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/products/${id}`);
  }
}
