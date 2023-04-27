import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CheckoutService } from '../checkout.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
  cartId: string = '';
  successMsg:any;
  constructor(private _CheckoutService: CheckoutService, private _ActivatedRoute: ActivatedRoute, private _ToastrService: ToastrService) { }

  ngOnInit(): void {
    this.cartId = this._ActivatedRoute.snapshot.params['id']
  }
  shippingAdress = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null),
  })

  cashPayment(data: FormGroup) {
    console.log(data.value);
    this._CheckoutService.cashPayment(this.cartId, data.value).subscribe({
      next: (response) => {
        console.log(response);
        this.successMsg = response;
        this._ToastrService.success(this.successMsg.status);
        // window.location.href = response.session.url;
      }, error: () => {

      }, complete: () => {
        window.location.href = 'http://localhost:4200/home';

      }
    })
  }

  onlinePayment(data: FormGroup) {
    console.log(data.value);
    this._CheckoutService.onlinePayment(this.cartId, data.value).subscribe({
      next: (response) => {
        console.log(response.session.url);
        window.location.href = response.session.url;
      }
    })
  }
}
