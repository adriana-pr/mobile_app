"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7765],{7765:(v,u,c)=>{c.r(u),c.d(u,{Tab1PageModule:()=>O});var o=c(9810),s=c(6814),l=c(95),r=c(1837),t=c(9212),d=c(2333),p=c(3245);const f=n=>({category:n});function m(n,i){if(1&n&&(t.TgZ(0,"div",12)(1,"div",13)(2,"div",14),t._UZ(3,"img",15),t.qZA(),t.TgZ(4,"div",16)(5,"p"),t._uU(6),t.qZA()()()()),2&n){const e=i.$implicit;t.xp6(),t.Q6J("queryParams",t.VKq(4,f,e.category_name))("routerLink",e.category_id),t.xp6(2),t.s9C("alt",e.category_name),t.xp6(3),t.Oqu(e.category_name)}}function P(n,i){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,m,7,6,"div",11),t.qZA()),2&n){const e=t.oxw();t.xp6(),t.Q6J("ngForOf",e.categories)}}function b(n,i){if(1&n&&(t.TgZ(0,"div",17)(1,"h2"),t._uU(2),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Oqu(e.message)}}const h=()=>["/create-category"],x=()=>["/create-recipe"],M=[{path:"",component:(()=>{var n;class i{constructor(a,g){this.getToken=a,this.categoriesService=g}ngOnInit(){}ionViewWillEnter(){this.loadCategories()}loadCategories(){this.categoriesService.getCategories(this.getToken.getLogin()).subscribe(a=>{this.categories=a,(this.categories&&0===this.categories.length||null==this.categories)&&(this.message="\u0429\u0435 \u043d\u0435\u043c\u0430\u0454 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u0439")})}}return(n=i).\u0275fac=function(a){return new(a||n)(t.Y36(d.e),t.Y36(p.G))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-tab1"]],decls:18,vars:8,consts:[[3,"translucent"],["vertical","center","horizontal","end"],[1,"add"],["name","add"],[1,"list-items"],["side","bottom"],[3,"routerLink"],[3,"fullscreen"],["class","content",4,"ngIf"],["class","message",4,"ngIf"],[1,"content"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[1,"card-content",3,"queryParams","routerLink"],[1,"img"],["src","https://i.imgur.com/uQ3Ob8c.png",3,"alt"],[1,"title"],[1,"message"]],template:function(a,g){1&a&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3," \u041c\u043e\u0457 \u0440\u0435\u0446\u0435\u043f\u0442\u0438 "),t.qZA()(),t.TgZ(4,"ion-fab",1)(5,"ion-fab-button",2),t._UZ(6,"ion-icon",3),t.qZA(),t.TgZ(7,"div",4)(8,"ion-fab-list",5)(9,"ion-item")(10,"ion-label",6),t._uU(11,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044e"),t.qZA()(),t.TgZ(12,"ion-item")(13,"ion-label",6),t._uU(14,"\u0420\u0435\u0446\u0435\u043f\u0442"),t.qZA()()()()()(),t.TgZ(15,"ion-content",7),t.YNc(16,P,2,1,"div",8)(17,b,3,1,"div",9),t.qZA()),2&a&&(t.Q6J("translucent",!0),t.xp6(10),t.Q6J("routerLink",t.DdM(6,h)),t.xp6(3),t.Q6J("routerLink",t.DdM(7,x)),t.xp6(2),t.Q6J("fullscreen",!0),t.xp6(),t.Q6J("ngIf",!g.message),t.xp6(),t.Q6J("ngIf",g.message))},dependencies:[o.W2,o.IJ,o.W4,o.zq,o.Gu,o.gu,o.Ie,o.Q$,o.wd,o.sr,o.YI,s.sg,s.O5,r.rH],styles:["ion-fab-button[_ngcontent-%COMP%]{width:25px;height:25px;text-align:center;--background: rgb(50, 65, 27)}ion-fab[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]{position:relative}ion-fab[_ngcontent-%COMP%]   ion-fab-list[_ngcontent-%COMP%]{position:absolute;top:-28px;right:-5px}ion-fab[_ngcontent-%COMP%]   ion-fab-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background: rgb(50, 65, 27);color:#fff;width:120px}ion-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{margin-top:20px;display:flex;justify-content:space-around;flex-wrap:wrap}ion-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:40%;border-radius:10px;text-align:center;border:2px solid rgb(83,108,45);margin-bottom:20px}ion-content[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:130px;margin-top:20px}ion-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:#536c2d;color:#fff;font-weight:600;border-radius:0 0 8px 8px;height:50px;font-size:20px}ion-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-top:12px}ion-content[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{color:#425623;height:70vh;display:flex;align-items:center;justify-content:center}ion-content[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:28px}"]}),i})()}];let C=(()=>{var n;class i{}return(n=i).\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.Bz.forChild(M),r.Bz]}),i})(),O=(()=>{var n;class i{}return(n=i).\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[o.Pc,s.ez,l.u5,C]}),i})()}}]);