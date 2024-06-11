import { Component } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { ItemReorderEventDetail } from '@ionic/angular';
import { CategoriesService } from '../services/categories.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  recipes: any;
  token:any;
  searchTerm: string = '';
  filteredRecipes: any;

  constructor(private service: RecipesService,
    private categoriesService: CategoriesService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    // this.loadRecipes();
  }
  ionViewWillEnter(){
    this.loadRecipes();
}
loadRecipes(){
  this.service.getRecipes(this.authService.getLogin()).subscribe(res => {
    this.recipes = res;
    this.filteredRecipes = res;
  });
}

  replaceImageOnError(item:any): void {
    item.image_url = 'http://localhost:8888/serverPHP/img/recipe_1889972.png';
  }
  logout(){
    this.authService.deleteToken(this.authService.getLogin()).subscribe(
      ()=>{
        this.categoriesService.removeCategories();
        this.authService.logOut();
      }
    );
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    if (query !== '') {
      this.filteredRecipes = this.recipes.filter((recipe: any) =>
        recipe.name.toLowerCase().includes(query)
      );
    } else {
      this.filteredRecipes = this.recipes;
    }
  }

}
