import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../brands.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.css']
})
export class BrandDetailsComponent implements OnInit {
  brandId: string = '';
  brandDetails: any;
  constructor(private _BrandsService: BrandsService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.brandId = this._ActivatedRoute.snapshot.params['id'];
    console.log(this.brandId);

    this._BrandsService.displayBrand(this.brandId).subscribe({
      next: (response) => {
        this.brandDetails = response.data
        console.log(this.brandDetails);

      }
    })
  }
}
