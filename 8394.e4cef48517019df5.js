"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8394],{8394:(b,d,a)=>{a.r(d),a.d(d,{MyRecipeDetailsPageModule:()=>v});var g=a(6814),u=a(95),r=a(9810),c=a(1837),e=a(9212),h=a(6955),m=a(2333),M=a(3245);function C(t,o){if(1&t&&(e.TgZ(0,"ion-title"),e._uU(1),e.qZA()),2&t){const i=e.oxw();e.xp6(),e.Oqu(i.categoryName)}}const f=(t,o)=>["/myRecipes",t,o];function P(t,o){if(1&t){const i=e.EpF();e.TgZ(0,"div",12)(1,"div",13)(2,"div",14)(3,"img",15),e.NdJ("error",function(){const l=e.CHM(i).$implicit,p=e.oxw(2);return e.KtG(p.replaceImageOnError(l))}),e.qZA()(),e.TgZ(4,"div",16)(5,"p"),e._uU(6),e.qZA()()()()}if(2&t){const i=o.$implicit,n=e.oxw(2);e.xp6(),e.Q6J("routerLink",e.WLB(4,f,i.id,n.id)),e.xp6(2),e.s9C("src",i.image_url,e.LSH),e.s9C("alt",i.name),e.xp6(3),e.Oqu(i.name)}}function O(t,o){if(1&t&&(e.TgZ(0,"div",10),e.YNc(1,P,7,7,"div",11),e.qZA()),2&t){const i=e.oxw();e.xp6(),e.Q6J("ngForOf",i.recipes)}}function _(t,o){if(1&t&&(e.TgZ(0,"div",17)(1,"h2"),e._uU(2),e.qZA()()),2&t){const i=e.oxw();e.xp6(2),e.Oqu(i.message)}}const x=[{path:"",component:(()=>{var t;class o{constructor(n,s,l,p,R,D){this.route=n,this.recipesService=s,this.getToken=l,this.router=p,this.alertController=R,this.categoriesService=D,this.requestData={id_category:"",token:""},this.messageAlert="",this.isAlertOpen=!1,this.alertButtons=[{cssClass:"alert-button-confirm",text:"\u0417\u0430\u043a\u0440\u0438\u0442\u0438",handler:()=>{this.router.navigate([""]).then(A=>{this.router.navigate(["myRecipes"])})}}],this.actionSheetButtons=[{text:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044e",role:"edit",handler:()=>{this.router.navigate(["/category-edit",{item:this.id}])}},{text:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044e",cssClass:"alert-button-delete",role:"delete",handler:()=>{this.presentConfirmationAlert()}},{text:"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438",role:"cancel",handler:()=>{}}]}ngOnInit(){}ionViewWillEnter(){this.loadRecipes()}loadRecipes(){this.id=this.route.snapshot.paramMap.get("id"),this.categoryName=this.route.snapshot.queryParams.category,this.token=this.getToken.getLogin(),[this.requestData.id_category,this.requestData.token]=[this.id,JSON.parse(this.token)],this.recipesService.getRecipesFromCategory(this.requestData).subscribe(n=>{this.recipes=n,(this.recipes&&0===this.recipes.length||null==this.recipes)&&(this.message="\u0429\u0435 \u043d\u0435\u043c\u0430\u0454 \u0440\u0435\u0446\u0435\u043f\u0442\u0456\u0432")})}presentConfirmationAlert(){this.alertController.create({header:"\u0412\u0438 \u0432\u043f\u0435\u0432\u043d\u0435\u043d\u0456?",message:"\u0426\u044f \u0434\u0456\u044f \u043d\u0435 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u0441\u043a\u0430\u0441\u043e\u0432\u0430\u043d\u0430.",cssClass:"alert",buttons:[{text:"\u041d\u0456",role:"cancel",cssClass:"cancel alert-button-confirm ",handler:()=>{}},{text:"\u0422\u0430\u043a",cssClass:"delete alert-button-confirm ",handler:()=>{this.deleteCategory()}}]}).then(s=>s.present())}deleteCategory(){this.categoriesService.deleteCategory(this.requestData).subscribe(n=>{"success"==n.message&&(this.messageAlert="\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044e \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e!",this.categoriesService.removeCategories(),this.setOpen(!0))})}setOpen(n){this.isAlertOpen=n}replaceImageOnError(n){n.image_url="/assets/icon/recipe_1889972.png"}}return(t=o).\u0275fac=function(n){return new(n||t)(e.Y36(c.gz),e.Y36(h.v),e.Y36(m.e),e.Y36(c.F0),e.Y36(r.Br),e.Y36(M.G))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-my-recipe-details"]],decls:11,vars:9,consts:[[3,"translucent"],[4,"ngIf"],["slot","start"],["text","","defaultHref","/myRecipes"],["id","open-action-sheet","slot","end","name","ellipsis-horizontal-outline"],[3,"fullscreen"],["trigger","open-action-sheet",1,"my-custom-class",3,"buttons"],["subHeader","","message","",1,"alert",3,"isOpen","header","buttons","didDismiss"],["class","content",4,"ngIf"],["class","message",4,"ngIf"],[1,"content"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[1,"card-content",3,"routerLink"],[1,"img"],[3,"src","alt","error"],[1,"title"],[1,"message"]],template:function(n,s){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar"),e.YNc(2,C,2,1,"ion-title",1),e.TgZ(3,"ion-buttons",2),e._UZ(4,"ion-back-button",3),e.qZA(),e._UZ(5,"ion-icon",4),e.qZA()(),e.TgZ(6,"ion-content",5),e._UZ(7,"ion-action-sheet",6),e.TgZ(8,"ion-alert",7),e.NdJ("didDismiss",function(){return s.setOpen(!1)}),e.qZA(),e.YNc(9,O,2,1,"div",8)(10,_,3,1,"div",9),e.qZA()),2&n&&(e.Q6J("translucent",!0),e.xp6(2),e.Q6J("ngIf",s.categoryName),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(),e.Q6J("buttons",s.actionSheetButtons),e.xp6(),e.s9C("header",s.messageAlert),e.Q6J("isOpen",s.isAlertOpen)("buttons",s.alertButtons),e.xp6(),e.Q6J("ngIf",!s.message),e.xp6(),e.Q6J("ngIf",s.message))},dependencies:[g.sg,g.O5,r.uo,r.Ge,r.Sm,r.W2,r.Gu,r.gu,r.wd,r.sr,r.oU,r.YI,c.rH],styles:["ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%]{color:#333}ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{font-size:20px}ion-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:30px;color:#333;padding-right:10px}ion-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{margin-top:20px;display:flex;justify-content:space-around;flex-wrap:wrap}ion-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:40%;border-radius:10px;text-align:center;margin-bottom:20px}ion-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]{height:100%;padding:0;margin:0}ion-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{position:relative;z-index:0;border:2px solid rgb(83,108,45);border-radius:10px 10px 0 0}ion-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:10px;height:130px}ion-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:#536c2d;color:#fff;font-weight:600;border-radius:0 0 8px 8px;float:inline-end;width:100%;text-align:center}ion-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:10px 0}ion-content[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{color:#425623;height:70vh;display:flex;align-items:center;justify-content:center}ion-content[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:28px}"]}),o})()}];let y=(()=>{var t;class o{}return(t=o).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(x),c.Bz]}),o})(),v=(()=>{var t;class o{}return(t=o).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.ez,u.u5,r.Pc,y]}),o})()}}]);