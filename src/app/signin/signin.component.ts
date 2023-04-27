import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
Router
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent {

  constructor(private _AuthService: AuthService, private _Router: Router) { }
  isLoading: boolean = false;
  errorMessage: string = '';
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)])
  })

  loginUser(loginForm: FormGroup) {
    this.isLoading = true;
    console.log(loginForm);
    this._AuthService.login(loginForm.value).subscribe({
      next: (response) => {
        localStorage.setItem('userToken',response.token);
        this._AuthService.decodeUserToken();
        this._Router.navigate(['/home']);
        console.log(response);
      },
      error: (myErrors) => {
        this.errorMessage = myErrors.error.errors.msg;
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }
}
