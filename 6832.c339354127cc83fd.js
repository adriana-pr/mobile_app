"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6832],{6832:(Z,l,u)=>{u.r(l),u.d(l,{ChangePasswordPageModule:()=>v});var g=u(6814),r=u(95),s=u(9810),c=u(1837),d=u(6306),m=u(8504),n=u(9212),p=u(2333);function h(o,i){1&o&&(n.TgZ(0,"ion-text",17)(1,"p",18),n._uU(2,"*\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443"),n.qZA()())}function P(o,i){if(1&o&&(n.TgZ(0,"ion-text",17)(1,"p",18),n._uU(2),n.qZA()()),2&o){const e=n.oxw();n.xp6(2),n.hij("*",e.errorEmail,"")}}function f(o,i){1&o&&(n.TgZ(0,"p",18),n._uU(1," *\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c "),n.qZA())}function C(o,i){1&o&&(n.TgZ(0,"p",18),n._uU(1," *\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0448\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432 "),n.qZA())}function w(o,i){if(1&o&&(n.TgZ(0,"ion-text",17),n.YNc(1,f,2,0,"p",19)(2,C,2,0,"p",19),n.qZA()),2&o){const e=n.oxw();n.xp6(),n.Q6J("ngIf",e.form.get("password").invalid&&(null==e.form.get("password").errors?null:e.form.get("password").errors.required)),n.xp6(),n.Q6J("ngIf",e.form.get("password").dirty)}}function _(o,i){if(1&o&&(n.TgZ(0,"ion-text",20)(1,"p",18),n._uU(2),n.qZA()()),2&o){const e=n.oxw();n.xp6(2),n.hij("*",e.anotherError,"")}}const M=[{path:"",component:(()=>{var o;class i{constructor(t,a){this.authUser=t,this.router=a,this.isTypePassword=!0,this.initForm()}ngOnInit(){}initForm(){this.form=new r.cw({email:new r.NI("",{validators:[r.kI.required,r.kI.email]}),password:new r.NI("",{validators:[r.kI.required,r.kI.minLength(8)]})})}onChange(){this.isTypePassword=!this.isTypePassword}onSubmit(){this.form.valid&&this.authUser.changePassword(this.form.value).pipe((0,d.K)(t=>(404===t.status?this.errorEmail="\u041d\u0435\u043c\u0430\u0454 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0437 \u0442\u0430\u043a\u0438\u043c \u0435\u043c\u0430\u0439\u043b\u043e\u043c.":this.anotherError="\u0421\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430. \u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437.",(0,m._)(t)))).subscribe(t=>{this.authUser.logIn(t.token),this.form.reset(),this.router.navigate(["/home"])})}onInputFocus(){this.errorEmail="",this.anotherError=""}}return(o=i).\u0275fac=function(t){return new(t||o)(n.Y36(p.e),n.Y36(c.F0))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-change-password"]],decls:22,vars:9,consts:[[3,"fullscreen"],[1,"circleBase","type2","circle1"],[1,"circleBase","type1"],[1,"circleBase","type2","circle2"],["routerLink","/sign-in",1,"welcomeMessage"],["name","arrow-back-outline",1,"backButton"],["color","white"],[3,"formGroup"],["lines","none",1,"ion-margin","ion-padding","ion-text-center"],[1,"ion-margin-vertical"],["name","mail-outline","slot","end","color","medium"],["formControlName","email","placeholder","\u0412\u0432\u0435\u0434\u0456\u0442\u044c email"],["class","ion-text-left","color","danger",4,"ngIf"],["slot","end",3,"name","color","click"],["formControlName","password","placeholder","\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u043e\u0432\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",3,"type"],["shape","round",1,"change",3,"click"],["class","another-error","color","danger",4,"ngIf"],["color","danger",1,"ion-text-left"],[1,"error"],["class","error",4,"ngIf"],["color","danger",1,"another-error"]],template:function(t,a){1&t&&(n.TgZ(0,"ion-content",0),n._UZ(1,"div",1)(2,"div",2)(3,"div",3),n.TgZ(4,"ion-label",4),n._UZ(5,"ion-icon",5),n.TgZ(6,"ion-text",6),n._uU(7," \u0423\u0432\u0456\u0439\u0442\u0438! "),n.qZA()(),n.TgZ(8,"form",7)(9,"ion-list",8)(10,"ion-item",9),n._UZ(11,"ion-icon",10)(12,"ion-input",11),n.qZA(),n.YNc(13,h,3,0,"ion-text",12)(14,P,3,1,"ion-text",12),n.TgZ(15,"ion-item",9)(16,"ion-icon",13),n.NdJ("click",function(){return a.onChange()}),n.qZA(),n._UZ(17,"ion-input",14),n.qZA(),n.YNc(18,w,3,2,"ion-text",12),n.TgZ(19,"ion-button",15),n.NdJ("click",function(){return a.onSubmit()}),n._uU(20,"\u0417\u043c\u0456\u043d\u0438\u0442\u0438"),n.qZA(),n.YNc(21,_,3,1,"ion-text",16),n.qZA()()()),2&t&&(n.Q6J("fullscreen",!0),n.xp6(8),n.Q6J("formGroup",a.form),n.xp6(5),n.Q6J("ngIf",!a.form.get("email").valid&&a.form.get("email").touched),n.xp6(),n.Q6J("ngIf",a.errorEmail),n.xp6(2),n.Q6J("name",a.isTypePassword?"lock-closed-outline":"lock-open-outline")("color",a.isTypePassword?"medium":"primary"),n.xp6(),n.Q6J("type",a.isTypePassword?"password":"text"),n.xp6(),n.Q6J("ngIf",!a.form.get("password").valid&&a.form.get("password").touched),n.xp6(3),n.Q6J("ngIf",a.anotherError))},dependencies:[g.O5,r._Y,r.JJ,r.JL,r.sg,r.u,s.YG,s.W2,s.gu,s.pK,s.Ie,s.Q$,s.q_,s.yW,s.j9,s.YI,c.rH],styles:["[_ngcontent-%COMP%]::-webkit-scrollbar, *[_ngcontent-%COMP%]::-webkit-scrollbar{display:none;overflow:hidden}ion-content[_ngcontent-%COMP%]{overflow:hidden;--overflow: hidden}ion-content[_ngcontent-%COMP%]   .change[_ngcontent-%COMP%]{margin-bottom:20px}.scroll-content[_ngcontent-%COMP%]{overflow:hidden}ion-list[_ngcontent-%COMP%]{background:transparent;transform:translateY(20vh)}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{border:1px solid var(--ion-color-medium);border-radius:10px}ion-list[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{margin-bottom:5vh}ion-list[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:30vh;margin:auto}ion-list[_ngcontent-%COMP%]   .alignItems[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%], ion-list[_ngcontent-%COMP%]   .alignItems[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}ion-list[_ngcontent-%COMP%]   .alignItems[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{margin-right:1vw;--size: 1.1rem}ion-list[_ngcontent-%COMP%]   .signup[_ngcontent-%COMP%]{margin-top:5vh;font-size:.8rem}ion-list[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{font-size:.85rem}ion-list[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--background: rgb(50, 65, 27)}.welcomeMessage[_ngcontent-%COMP%]{color:#fff;display:flex;align-items:center;font-size:20px;left:30px;top:80px}.welcomeMessage[_ngcontent-%COMP%]   .backButton[_ngcontent-%COMP%]{color:#32411b;padding-right:10px}"]}),i})()}];let x=(()=>{var o;class i{}return(o=i).\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[c.Bz.forChild(M),c.Bz]}),i})(),v=(()=>{var o;class i{}return(o=i).\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[g.ez,r.u5,r.UX,s.Pc,x]}),i})()}}]);