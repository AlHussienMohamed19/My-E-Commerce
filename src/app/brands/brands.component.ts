import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})

export class BrandsComponent implements OnInit {
  allBrands: any;
  constructor(private _BrandsService: BrandsService) { }

  ngOnInit(): void {
    this._BrandsService.displayAllBrands().subscribe({
      next: (response) => {
        this.allBrands = response.data
        console.log(this.allBrands);

      }
    })
  }
}
