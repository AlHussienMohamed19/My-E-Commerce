import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl: string = 'https://route-ecommerce.onrender.com/api/v1';
  itemsNumber = new BehaviorSubject (0);

  constructor(private _HttpClient: HttpClient) {
    this.displayUserCart().subscribe({
      next:(response)=>{
        console.log(response);
        this.itemsNumber.next(response.numOfCartItems);
      }
    })
  }

  addToCart(id: string): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/cart`, { productId: id })
  }

  displayUserCart(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/cart`)
  }

  updateCountOfItem(id: String, count: number): Observable<any> {
    return this._HttpClient.put(`${this.baseUrl}/cart/${id}`, { count: count })
  }

  removeItemFromUserCart(id: String): Observable<any> {
    return this._HttpClient.delete(`${this.baseUrl}/cart/${id}`)
  }
}
