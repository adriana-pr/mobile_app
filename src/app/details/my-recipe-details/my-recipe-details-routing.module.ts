import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyRecipeDetailsPage } from './my-recipe-details.page';

const routes: Routes = [
  {
    path: '',
    component: MyRecipeDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyRecipeDetailsPageRoutingModule {}
