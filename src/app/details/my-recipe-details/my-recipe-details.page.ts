import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-my-recipe-details',
  templateUrl: './my-recipe-details.page.html',
  styleUrls: ['./my-recipe-details.page.scss'],
})
export class MyRecipeDetailsPage implements OnInit {

  recipes:any;
  requestData = {id_category:"",token:""};
  id!:any;
  categoryName:any;
  token:any;
  message!: string;
  messageAlert = "";
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

  public actionSheetButtons = [
    {
      text: 'Редагувати категорію',
      role: 'edit',
      handler: () => {
        // console.log(this.id);
        this.router.navigate(['/category-edit', { item: this.id}]);
      }
    },
    {
      text: 'Видалити категорію',
      cssClass: 'alert-button-delete',
      role: 'delete',
      handler: () => {
        this.presentConfirmationAlert(); 
      }
    },
    {
      text: 'Скасувати',
      role: 'cancel',
      handler: () => {
        // console.log("Скасувати");
      }
    },
  ];

  constructor(private route:ActivatedRoute,
    private recipesService:RecipesService,
    private getToken: AuthService,
    private router: Router,
    private alertController: AlertController,
    private categoriesService: CategoriesService,

  ) { }
  ngOnInit() {
    // this.loadRecipes();
  }
  ionViewWillEnter(){
    this.loadRecipes();
}
loadRecipes(){
  this.id = this.route.snapshot.paramMap.get('id');
  this.categoryName = this.route.snapshot.queryParams['category'];
  this.token = this.getToken.getLogin();
  [this.requestData.id_category, this.requestData.token] =[this.id, JSON.parse(this.token)];
  // console.log(this.requestData);

  this.recipesService.getRecipesFromCategory(this.requestData)
  .subscribe(res=>{
    this.recipes = res;
    // console.log(res);
    if (this.recipes && this.recipes.length === 0 || this.recipes == null) {
      this.message = "Ще немає рецептів";
    }
    
  })
}

presentConfirmationAlert() {
  const alert = this.alertController.create({
    header: 'Ви впевнені?',
    message: 'Ця дія не може бути скасована.',
    cssClass: 'alert',
    buttons: [
      {
        text: 'Ні',
        role: 'cancel',
        cssClass: 'cancel alert-button-confirm ',
        handler: () => {
          // console.log('Відміна видалення');
        }
      }, {
        text: 'Так',
        cssClass: 'delete alert-button-confirm ',
        handler: () => {
          this.deleteCategory();
          // Додайте код для виконання видалення тут
        }
      }
    ]
  }).then(alert => alert.present());
}
deleteCategory(){
  // console.log(this.requestData)
  this.categoriesService.deleteCategory(this.requestData).subscribe(
    (data:any)=>{
      if(data.message == "success"){
      this.messageAlert = "Категорію видалено!";
      this.categoriesService.removeCategories();
      this.setOpen(true);
      }
    }
  )
}
setOpen(isOpen: boolean) {
  this.isAlertOpen = isOpen;
}
replaceImageOnError(item:any): void {
  item.image_url = '/assets/icon/recipe_1889972.png';
}
}
