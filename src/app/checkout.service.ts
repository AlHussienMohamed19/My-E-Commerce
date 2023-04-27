import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  baseUrl: string = 'https://route-ecommerce.onrender.com/api/v1';
  constructor(private _HttpClient: HttpClient) { }

  cashPayment(cartId: string, data: FormGroup): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      { shippingAddress: data })
  }

  onlinePayment(cartId: string, data: FormGroup): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/orders/${cartId}`,
      { shippingAddress: data })
  }
}
