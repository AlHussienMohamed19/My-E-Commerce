import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  baseUrl: string = 'https://route-ecommerce.onrender.com/api/v1';

  constructor(private _HttpClient: HttpClient) { }

  postWishList(id: string): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/wishlist`, { productId: id })
  }

  getWishList(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/wishlist`)
  }

  deleteFromWishList(id: string): Observable<any> {
    return this._HttpClient.delete(`${this.baseUrl}/wishlist/${id}`)
  }
}
