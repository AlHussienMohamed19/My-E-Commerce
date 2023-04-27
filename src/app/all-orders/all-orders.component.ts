import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AllOrdersService } from '../all-orders.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {
  userId:any;
  allOrders:any;
  // orderItems:any;
  constructor(private _AuthService: AuthService, private _AllOrdersService: AllOrdersService) { }

  ngOnInit(): void {

    this.userId = this._AuthService.userData.getValue();

    this._AllOrdersService.getUserOrders(this.userId.id).subscribe({
      next: (response) => {
        this.allOrders = response;
        // this.orderItems = response.cartItems;
        console.log(this.allOrders);
        // console.log(this.orderItems);

        // console.log(this.userId.id);
        
      }
    })
  }

}
