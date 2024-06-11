import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyRecipeDetailsPageRoutingModule } from './my-recipe-details-routing.module';

import { MyRecipeDetailsPage } from './my-recipe-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyRecipeDetailsPageRoutingModule
  ],
  declarations: [MyRecipeDetailsPage]
})
export class MyRecipeDetailsPageModule {}
