import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  customOptions: OwlOptions = {
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    loop: true,
    margin: 10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  ProductId: string = '';
  productDetails: any;
  cartData:any;
  constructor(private _ProductsService: ProductsService, private _ActivatedRoute: ActivatedRoute, private _CartService: CartService, private _ToastrService: ToastrService) { }

  ngOnInit(): void {
    this.ProductId = this._ActivatedRoute.snapshot.params['id'];
    console.log(this.ProductId);

    this._ProductsService.getProductById(this.ProductId).subscribe({
      next: (response) => {
        console.log(response.data);
        this.productDetails = response.data;
      }
    })

  }

  addToCart(id: string) {
    console.log(id);
    this._CartService.addToCart(id).subscribe({
      next: (response) => {
        this.cartData = response
        console.log(response);
      }, error: () => {

      },
      complete: () => {
        this._ToastrService.success(this.cartData.message);
      }
    })
  }
}
