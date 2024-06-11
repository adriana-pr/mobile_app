import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ResponseData } from '../interfaces/ResponseData';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})

export class SignInPage implements OnInit {
  form!: FormGroup;
  isTypePassword: boolean = true;
  errorEmail!: string;
  errorPassword!: string;
  anotherError!: string;

  constructor(private authUser: AuthService,
    private router: Router) {
    this.initForm();
  }
  ngOnInit() {

  }

  initForm() {
    this.form = new FormGroup({
      email: new FormControl('', 
        {validators: [Validators.required, Validators.email]}
      ),
      password: new FormControl('', 
        {validators: [Validators.required, Validators.minLength(8)]}
      ),
    });
  }

  onChange() {
    this.isTypePassword = !this.isTypePassword;
  }

  onSubmit() {
    if (!this.form.valid) return;
    this.authUser.getUser(this.form.value).pipe(
      catchError((error: HttpErrorResponse) => {
        // console.error('HTTP Error:', error);
        if (error.status === 404) {
          this.errorEmail = 'Немає користувача з таким емайлом.';
        } else if (error.status === 401) {
          this.errorPassword = 'Неправильний пароль.';
        } else {
          this.anotherError = 'Сталася помилка. Будь ласка, спробуйте ще раз.';
        }
        return throwError(error);
      })
    ).subscribe((data:ResponseData|any) => {
      // console.log(data);
      this.authUser.logIn(data.token);
      this.form.reset();
      this.router.navigate(['/home']);
    });
  }
  
  onInputFocus() {
    this.errorEmail ='';
    this.errorPassword ='';
    this.anotherError ='';
  }

}


