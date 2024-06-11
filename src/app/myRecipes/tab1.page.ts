import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CategoriesService } from '../services/categories.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  categories: any;
  message!: string;
  constructor(
    private getToken: AuthService,
    private categoriesService: CategoriesService,
  ) {}

  ngOnInit() {
    // this.loadCategories();
  }
  ionViewWillEnter(){
    this.loadCategories();
}

  loadCategories(){
    this.categoriesService.getCategories(this.getToken.getLogin()).subscribe(res => {
      this.categories = res;
      // console.log(this.categories);
      if (this.categories && this.categories.length === 0|| this.categories == null) {
        this.message = "Ще немає категорій";
      }
    });
  }

}
