import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { LoadingScreenService } from './../loading-screen.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartData: any;
  constructor(private _CartService: CartService, private _LoadingScreenService:LoadingScreenService) { }

  ngOnInit(): void {
    this.displayUserCart();
  }

  displayUserCart() {
    this._LoadingScreenService.isLoading.next(true);
    this._CartService.displayUserCart().subscribe({
      next: (response) => {
        console.log(response);
        this.cartData = response.data;
      }, error: () => {

      }, complete: () => {
        this._LoadingScreenService.isLoading.next(false);
      }
    })
  }

  updateCount(id: string, count: number) {
    this._LoadingScreenService.isLoading.next(true);

    this._CartService.updateCountOfItem(id, count).subscribe({
      next: (response) => {
        console.log(response);
        this.cartData = response.data;

      }, error: () => {

      }, complete: () => {
        this._LoadingScreenService.isLoading.next(false);

      }
    })
  }

  deleteItem(id: string) {
    this._LoadingScreenService.isLoading.next(true);
    this._CartService.removeItemFromUserCart(id).subscribe({
      next: (response) => {
        console.log(response);
        this.cartData = response.data;
      }, error: () => {

      }, complete: () => {
        this._LoadingScreenService.isLoading.next(false);
      }
    })
  }
}
