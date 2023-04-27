import { WishlistService } from './../wishlist.service';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  isLiked: boolean = false;
  productTitle: string = '';
  cartData:any;

  constructor(private _ProductsService: ProductsService, private _WishlistService: WishlistService, private _CartService: CartService
    , private _ToastrService: ToastrService) { }

  products: Product[] = [];
  ngOnInit(): void {

    this._ProductsService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response.data;
        console.log(this.products);
      }
    })

  }


  addToWishList(id: string) {
    this.isLiked = !this.isLiked;
    console.log(id);
    this._WishlistService.postWishList(id).subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }

  addToCart(id: string) {
    console.log(id);
    this._CartService.addToCart(id).subscribe({
      next: (response) => {
        this.cartData = response
        console.log(response);
      },error:()=>{

      },
      complete:()=>{
        this._ToastrService.success(this.cartData.message);
      }
    })
  }

}
