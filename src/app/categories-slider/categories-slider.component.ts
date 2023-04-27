import { Category } from './../product';
import { CategoriesService } from './../categories.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories-slider',
  templateUrl: './categories-slider.component.html',
  styleUrls: ['./categories-slider.component.css']
})
export class CategoriesSliderComponent implements OnInit {
  categories: Category[] = [];

  constructor(private _CategoriesService: CategoriesService) { }

  ngOnInit(): void {
    this._CategoriesService.getCategories().subscribe({
      next: (response) => {
        this.categories = response.data; 
        console.log(this.categories);
        
      }
    })
  }

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
        items: 3
      },
      740: {
        items: 5
      },
      940: {
        items: 7
      }
    },
    nav: false
  }
}
