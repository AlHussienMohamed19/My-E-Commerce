import { Component } from '@angular/core';
import { LoadingScreenService } from '../loading-screen.service';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent {
  constructor(public _LoadingScreenService: LoadingScreenService) { }
}
