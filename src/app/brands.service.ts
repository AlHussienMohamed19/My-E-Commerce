import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  baseUrl: string = 'https://route-ecommerce.onrender.com/api/v1';
  constructor(private _HttpClient: HttpClient) { }

  displayAllBrands(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/brands`)
  }

  displayBrand(id:string): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/brands/${id}`)
  }
}
