import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})

export class CategoryDetailsComponent implements OnInit {
  CategoryId: string = '';
  categoryDetails: any;
  constructor(private _CategoriesService: CategoriesService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.CategoryId = this._ActivatedRoute.snapshot.params['id'];
    console.log(this.CategoryId);

    this._CategoriesService.getSpecificCategory(this.CategoryId).subscribe({
      next: (response) => {
        this.categoryDetails = response.data
        console.log(this.categoryDetails);
      }
    })

  }
}

