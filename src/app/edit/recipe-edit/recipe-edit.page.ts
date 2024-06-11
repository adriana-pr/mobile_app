import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/interfaces/Recipe';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.page.html',
  styleUrls: ['./recipe-edit.page.scss'],
})
export class RecipeEditPage implements OnInit {
  recipeForm!: FormGroup;
  errorMessage!: string;
  categories:any;
  token:any;
  categoryId:any;
  categoryName:any;
  recipeId!:any;
  recipe!:Recipe;
  isAlertOpen = false;
  alertButtons = [{
    cssClass: 'alert-button-confirm',
    text: 'Закрити',
    handler: () => {
      this.router.navigate(['']).then(e => {
        this.router.navigate(['myRecipes',this.categoryId], {
          queryParams: { category: this.categoryName.category_name }
        });
      })
    }
  }];


  constructor(
    private formBuilder: FormBuilder,
    private getToken: AuthService,
    private categoriesService: CategoriesService,
    private recipesService:RecipesService,
    private router: Router,
    private route:ActivatedRoute, 
  ) {}



  ngOnInit() {
    this.recipeForm = this.formBuilder.group({
      recipe_id: Number,
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
      // console.log(res);
      if (this.categories && this.categories.length !== 0 ) {
        this.categoriesService.setCategories(this.categories);
      }
     
    });
  }
  else{
    this.categories = this.categoriesService.getCategoriesFromLocalStorage();
  }
  this.recipeId = this.route.snapshot.paramMap.get('id');
  this.categoryId = this.route.snapshot.paramMap.get('category');
this.categoryName = this.categories.find((category: { category_id: number; }) => category.category_id == this.categoryId);

this.recipesService.getRecipe(this.recipeId).subscribe(
  (res)=>{
    this.setValueForm(res);

  }
)

  }
setValueForm(recipe: any){
  this.recipeForm.get('recipe_id')?.setValue(this.recipeId);
    this.recipeForm.get('title')?.setValue(recipe.name);
    this.recipeForm.get('photo')?.setValue(recipe.image_url);
    this.recipeForm.get('category')?.setValue(this.categoryId);
    this.recipeForm.get('ingredients')?.setValue(recipe.ingredients);
    this.recipeForm.get('preparation')?.setValue(recipe.preparation);
    this.recipeForm.get('show_to_others')?.setValue(recipe.show_to_others);
    this.recipeForm.get('user_token')?.setValue(this.token);

}

  onSubmit() {
    // this.categoriesService.removeCategories();
    if (!this.recipeForm.valid) {
      this.errorMessage = "Заповніть всі поля форми!";
      return;
    }
    this.recipeForm.patchValue({
      user_token: JSON.parse(this.token)
    });
    this.recipesService.uptadeRecipe(this.recipeForm.value).subscribe((data)=>{
      console.log(data);
    });
    // this.recipeForm.reset();
    this.setOpen(true);
}
onInputFocus() {
  this.errorMessage ='';
}
setOpen(isOpen: boolean) {
  this.isAlertOpen = isOpen;
}
reload(){
  // this.router.navigate(['']).then(e => {
  //   this.router.navigate(['myRecipes',this.categoryId], {
  //     queryParams: { category: this.categoryName.category_name }
  //   });
  // })
  this.router.navigate(['myRecipes',this.categoryId], {
    queryParams: { category: this.categoryName.category_name }
  });

}
}
