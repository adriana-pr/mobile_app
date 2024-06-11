import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.page.html',
  styleUrls: ['./category-edit.page.scss'],
})
export class CategoryEditPage implements OnInit {

  categoryForm!: FormGroup;
  errorMessage!: string;
  messageAlert = "";
  token:any;
  item:any;
  categoryName!:any;
  isAlertOpen = false;
  alertButtons = [{
    cssClass: 'alert-button-confirm',
    text: 'Закрити',
    handler: () => {
      this.router.navigate(['']).then(e => {
        this.router.navigate(['myRecipes'])
      })
    }
  }];

  constructor(
    private formBuilder: FormBuilder,
    private getToken: AuthService,
    private categoriesService: CategoriesService,
    private route:ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      category_id: Number,
      title: ['', Validators.required],
      user_token: String
    });
    this.token = this.getToken.getLogin();


    this.item = this.route.snapshot.paramMap.get('item');
   this.categoriesService.getCategory(this.item).subscribe(
      (data) => {
        this.categoryName = data;
        this.categoryForm.get('title')?.setValue(this.categoryName.category_name);
      }
      
    );
  }

  onSubmit() {
    if (!this.categoryForm.valid) {
      this.errorMessage = "Заповніть поле з назвою категорії!";
      return;
    }
    this.categoryForm.patchValue({
      user_token: JSON.parse(this.token)
    });

    this.categoryForm.get('category_id')?.setValue(this.item);

    this.categoriesService.uptadeCategory(this.categoryForm.value).pipe(
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
    this.messageAlert = "Категорію редаговано";
    // this.categoryForm.reset();
    this.setOpen(true);
    // window.location.reload();

}
onInputFocus() {
  this.errorMessage ='';
}

setOpen(isOpen: boolean) {
  this.isAlertOpen = isOpen;
}
}