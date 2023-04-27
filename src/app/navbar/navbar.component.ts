import { BehaviorSubject } from 'rxjs';
import { CartService } from '../cart.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userData = new BehaviorSubject(null);
  userName: string = '';
  userDataObj: any;
  isLogin: Boolean = false;
  itemNo: number = 0;

  constructor(private _AuthService: AuthService, private _CartService: CartService) {
    
    _CartService.itemsNumber.subscribe({
      next: () => {
        this.itemNo = _CartService.itemsNumber.getValue();
      }
    })

    _AuthService.userData.subscribe({
      next: () => {
        if (_AuthService.userData.getValue() !== null) {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      }
    })
  }

  ngOnInit(): void {
    this.getUserName();
  }

  getUserName() {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decoded: any = jwtDecode(encodedToken);
    this.userData.next(decoded);
    this.userDataObj = this.userData.getValue();
    console.log(this.userData.getValue());
    console.log(this.userDataObj.name);
    this.userName = this.userDataObj.name.split(' ').slice(0,1).join(' ');
    console.log(this.userName);
    
  }

  logout() {
    this._AuthService.logout();
  }
}


