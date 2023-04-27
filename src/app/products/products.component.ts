import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private _ProductsService: ProductsService) {}

  products:Product[] = [];
  
  ngOnInit(): void {
    
    this._ProductsService.getAllProducts().subscribe({
      next: (response)=> {
        this.products = response.data;
        console.log(this.products);
      }
    })
    
  }
}
