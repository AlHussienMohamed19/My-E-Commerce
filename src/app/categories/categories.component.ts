import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  allCatrgories: any;
  constructor(private _CategoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.displayAllCategories();
  }

  displayAllCategories() {
    this._CategoriesService.getCategories().subscribe({
      next: (response) => {
        this.allCatrgories = response.data
        console.log(this.allCatrgories);
      }
    })
  }

  displayCategory(id: string) {
    this._CategoriesService.getSpecificCategory(id).subscribe({
      next: (response) => {
        console.log(response);

      }
    })
  }

}
