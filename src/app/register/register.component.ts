import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  errorMessage: string = '';
  isLoading: boolean = false;
  constructor(private _AuthService: AuthService, private _Router: Router) { }

  matchPassword(form: any) {
    let pass = form.get('password');
    let rePass = form.get('rePassword');

    if (pass?.value === rePass?.value) {
      return null;
    } else {
      return rePass?.setErrors({ match: 'Not Matched With Password' })
    }
  }

  registerForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  }, { validators: this.matchPassword });

  regiserUser(data: FormGroup) {

    this.isLoading = true;
    this._AuthService.register(data.value).subscribe({
      next: (response) => {
        this._Router.navigate(['/login'])
        console.log(response);
      },
      error: (myError) => {
        console.log(myError.error.errors.msg);
        this.errorMessage = myError.error.errors.msg;
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }

}
