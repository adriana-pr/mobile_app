import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.page.html',
  styleUrls: ['./home-details.page.scss'],
})
export class HomeDetailsPage implements OnInit {
  recipe:any;
  categoryId:any;
  deleteData = {id_recipe:"",token:""};
  id!:any;
  token:any;
  menu = false;
  notFound = false;
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

  public actionSheetButtonsRecipe = [
    {
      text: 'Редагувати рецепт',
      role: 'edit',
      handler: () => {
        // console.log(this.id);
        this.router.navigate(['/recipe-edit', this.id, { category: this.categoryId}]);
      }
    },
    {
      text: 'Видалити рецепт',
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
    private service:RecipesService,
    private router: Router,
    private alertController: AlertController,
    private getToken: AuthService,) { }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id'); 
    // console.log(id);
    this.service.getRecipe(this.id).subscribe(res=>{
      this.recipe = res;
      // console.log(this.recipe);
    })
  }
  ionViewWillEnter(){
    this.categoryId = this.route.snapshot.paramMap.get('secondId');
    if(this.categoryId !=null) {
      this.menu = true;
    }
    else{
      this.menu = false;
    }
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
          }
        }
      ]
    }).then(alert => alert.present());
  }
  deleteCategory(){
    this.token = this.getToken.getLogin();
    [this.deleteData.id_recipe, this.deleteData.token] =[this.id, JSON.parse(this.token)];
    this.service.deleteRecipe(this.deleteData).subscribe(
      (data:any)=>{
        if(data.message == "success"){
        this.messageAlert = "Рецепт видалено!";
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
  
