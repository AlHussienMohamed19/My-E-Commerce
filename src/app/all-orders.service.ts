import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllOrdersService {
  baseUrl: string = 'https://route-ecommerce.onrender.com/api/v1';

  constructor(private _HttpClient: HttpClient) { }

  getUserOrders(userId: String): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/orders/user/${userId}`)
  }
}
