import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData = new BehaviorSubject(null);
  userName = new BehaviorSubject(null);
  userDataObj: any;

  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('userToken') !== null) {
      this.decodeUserToken()
    } else {
      this._Router.navigate(['/login']);
    }
  };

  register(data: FormGroup): Observable<any> {
    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signup', data)
  }

  login(data: FormGroup): Observable<any> {
    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signin', data)
  }

  decodeUserToken() {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decoded: any = jwtDecode(encodedToken);
    this.userData.next(decoded);
    this.userDataObj = this.userData.getValue();
    console.log(this.userData.getValue());
    console.log(this.userDataObj.name);
  }

  logout() {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login']);
  }
}
