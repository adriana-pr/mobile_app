import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.page.html',
  styleUrls: ['./create-category.page.scss'],
})
export class CreateCategoryPage implements OnInit {

  categoryForm!: FormGroup;
  errorMessage!: string;
  messageAlert = "";
  token:any;
  isAlertOpen = false;
  alertButtons = [{
    cssClass: 'alert-button-confirm',
    text: 'Закрити',
    // handler: () => {
    //   window.location.reload();
    // }
    
  }];

  constructor(
    private formBuilder: FormBuilder,
    private getToken: AuthService,
    private categoriesService: CategoriesService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      title: ['', Validators.required],
      user_token: String
    });
    this.token = this.getToken.getLogin();
  }

  onSubmit() {
    if (!this.categoryForm.valid) {
      this.errorMessage = "Заповніть поле з назвою категорії!";
      return;
    }
    this.categoryForm.patchValue({
      user_token: JSON.parse(this.token)
    });

    this.categoriesService.insertCategory(this.categoryForm.value).pipe(
      catchError((error: HttpErrorResponse) => {
        // console.error('HTTP Error:', error);
        if (error.status === 404) {
          this.messageAlert = 'Категорія з такою назвою вже існує!';
          this.setOpen(true);
        } 
        return throwError(error);
      })
    )
    .subscribe(res=>{
      console.log(res);
    });
    // console.log(this.categoryForm.value);
    this.messageAlert = "Категорію успішно створено";
    this.categoriesService.removeCategories();
    this.categoryForm.reset();
    this.setOpen(true);

}
onInputFocus() {
  this.errorMessage ='';
}

setOpen(isOpen: boolean) {
  this.isAlertOpen = isOpen;
}
reload(){
  this.router.navigate(['']).then(e => {
    this.router.navigate(['myRecipes'])
  })
}
}