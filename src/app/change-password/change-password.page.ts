import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ResponseData } from '../interfaces/ResponseData';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  form!: FormGroup;
  isTypePassword: boolean = true;
  errorEmail!: string;
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
    this.authUser.changePassword(this.form.value).pipe(
      catchError((error: HttpErrorResponse) => {
        // console.error('HTTP Error:', error);
        if (error.status === 404) {
          this.errorEmail = 'Немає користувача з таким емайлом.';
        }  else {
          this.anotherError = 'Сталася помилка. Будь ласка, спробуйте ще раз.';
        }
        return throwError(error);
      })
    ).subscribe((data:ResponseData|any) => {
      this.authUser.logIn(data.token);
      this.form.reset();
      this.router.navigate(['/home']);
    });
  }
  
  onInputFocus() {
    this.errorEmail ='';
    this.anotherError ='';
  }

}