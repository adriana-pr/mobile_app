import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { RecipesService } from 'src/app/services/recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.page.html',
  styleUrls: ['./create-recipe.page.scss'],
})
export class CreateRecipePage implements OnInit {
  recipeForm!: FormGroup;
  errorMessage!: string;
  categories:any;
  token:any;
  isAlertOpen = false;
  alertButtons = [{
    cssClass: 'alert-button-confirm',
    text: 'Закрити',
  }];


  constructor(
    private formBuilder: FormBuilder,
    private getToken: AuthService,
    private categoriesService: CategoriesService,
    private recipesService:RecipesService,
    private router: Router,
  ) {}



  ngOnInit() {
    this.recipeForm = this.formBuilder.group({
      title: ['', Validators.required],
      photo: ['', Validators.required],
      category: ['', Validators.required],
      ingredients: ['', Validators.required],
      preparation: ['', Validators.required],
      show_to_others: [0],
      user_token: String
    });

    this.token = this.getToken.getLogin();

    if(this.categoriesService.getCategoriesFromLocalStorage()==null){
    this.categoriesService.getCategories(this.token).subscribe(res => {
      this.categories = res;
      if (this.categories && this.categories.length !== 0 ) {
        this.categoriesService.setCategories(this.categories);
      }
     
    });
  }
  else{
    this.categories = this.categoriesService.getCategoriesFromLocalStorage();
  }
  }

  onSubmit() {
    if (!this.recipeForm.valid) {
      this.errorMessage = "Заповніть всі поля форми!";
      return;
    }
    this.recipeForm.patchValue({
      user_token: JSON.parse(this.token)
    });
    // console.log(this.recipeForm.value);
    this.recipesService.insertRecipe(this.recipeForm.value).subscribe((data)=>{
      console.log(data);
    });
    this.recipeForm.reset();
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