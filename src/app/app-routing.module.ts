import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthService]
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./details/home-details/home-details.module').then( m => m.HomeDetailsPageModule),
    canActivate: [AuthService]
  },
  {
    path: 'myRecipes/:id',
    loadChildren: () => import('./details/my-recipe-details/my-recipe-details.module').then( m => m.MyRecipeDetailsPageModule),
    canActivate: [AuthService]
  },

  {
    path: 'myRecipes/:id/:secondId',
    loadChildren: () => import('./details/home-details/home-details.module').then( m => m.HomeDetailsPageModule),
    canActivate: [AuthService]
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'create-recipe',
    loadChildren: () => import('./create/CreateRecipe/create-recipe/create-recipe.module').then( m => m.CreateRecipePageModule),
    canActivate: [AuthService]
  },
  {
    path: 'create-category',
    loadChildren: () => import('./create/CreateCategory/create-category/create-category.module').then( m => m.CreateCategoryPageModule),
    canActivate: [AuthService]
  },
  {
    path: 'category-edit',
    loadChildren: () => import('./edit/category-edit/category-edit.module').then( m => m.CategoryEditPageModule),
    canActivate: [AuthService]
  },
  {
    path: 'recipe-edit/:id',
    loadChildren: () => import('./edit/recipe-edit/recipe-edit.module').then( m => m.RecipeEditPageModule),
    canActivate: [AuthService]
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
