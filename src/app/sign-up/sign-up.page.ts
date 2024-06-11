import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ResponseData } from '../interfaces/ResponseData';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  signupForm!: FormGroup;
  isTypePassword: boolean = true;
  errorMessage!: string;

  constructor(private authUser: AuthService,
    private router: Router) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.signupForm = new FormGroup({
      username: new FormControl('', 
        {validators: [Validators.required]}
      ),
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
    if(!this.signupForm.valid) return;
    this.authUser.insertUser(this.signupForm.value).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('HTTP Error:', error);
        this.errorMessage = 'Користувач з таким емайлом існує.';
        return throwError(error);
      })
    ).subscribe((data:ResponseData|any) => {
      this.authUser.logIn(data.token);
      this.signupForm.reset();
      this.router.navigate(['/home']);
    });
  }
  onInputFocus() {
    this.errorMessage = '';
  }
}
