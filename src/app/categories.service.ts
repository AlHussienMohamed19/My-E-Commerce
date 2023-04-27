import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  baseUrl: string = 'https://route-ecommerce.onrender.com/api/v1';
  constructor(private _HttpClient: HttpClient) { }

  getCategories(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/categories`);
  }

  getSpecificCategory(id: string): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/categories/${id}`);
  }
}
