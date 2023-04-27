import { ToastrService } from 'ngx-toastr';
import { WishlistService } from './../wishlist.service';
import { Component, OnInit } from '@angular/core';
import { LoadingScreenService } from './../loading-screen.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})

export class WishlistComponent implements OnInit {
  constructor(private _WishlistService: WishlistService, private toastr: ToastrService, public _LoadingScreenService: LoadingScreenService) { }
  products: any[] = [];
  wishListResponse: any;
  ngOnInit(): void {
    this.addInWishList();
  }

  addInWishList() {
    this._LoadingScreenService.isLoading.next(true);
    this._WishlistService.getWishList().subscribe({
      next: (response) => {
        this.products = response.data;
        // console.log(this.products);
        // this.wishListResponse = response;
      },
      error: () => {

      },
      complete: () => {
        // this.toastr.success(this.wishListResponse.message);
        // this.addInWishList();
        this._LoadingScreenService.isLoading.next(false);
      }
    })
  }

  removeFromWishList(id: string) {
    this._LoadingScreenService.isLoading.next(true);
    this._WishlistService.deleteFromWishList(id).subscribe({
      next: (response) => {
        console.log(response);
        this.wishListResponse = response;
      },
      error: () => {

      },
      complete: () => {
        this.toastr.success(this.wishListResponse.message);
        this.addInWishList();
        this._LoadingScreenService.isLoading.next(false);

      }
    })
  }

}
