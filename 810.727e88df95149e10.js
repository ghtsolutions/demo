"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[810],{6810:(pt,h,a)=>{a.r(h),a.d(h,{AdminModule:()=>ut});var f=a(6895),t=a(4650),p=a(9116),C=a(4859);const x=function(){return["config"]},y=function(){return["transaction"]};let v=(()=>{class n{constructor(e){this.router=e}ngOnInit(){}isActive(e){return this.router.url===e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-admin"]],decls:9,vars:6,consts:[[1,"flex","flex-col","w-full"],[1,"flex","flex-row","space-x-4","justify-center","p-3"],[3,"routerLink"],["mat-raised-button","",3,"color"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"a",2)(3,"button",3),t._uU(4," C\u1ea5u H\xecnh "),t.qZA()(),t.TgZ(5,"a",2)(6,"button",3),t._uU(7," Qu\u1ea3n L\xfd Giao D\u1ecbch "),t.qZA()()(),t._UZ(8,"router-outlet"),t.qZA()),2&e&&(t.xp6(2),t.Q6J("routerLink",t.DdM(4,x)),t.xp6(1),t.Q6J("color",i.isActive("/admin/config")?"primary":null),t.xp6(2),t.Q6J("routerLink",t.DdM(5,y)),t.xp6(1),t.Q6J("color",i.isActive("/admin/transaction")?"primary":null))},dependencies:[C.lW,p.lC,p.yS]}),n})();var M=a(3949),N=a(3559),_=a(5556),T=a(7789),u=a(9549),Z=a(4144),m=a(4006);const s=function(){return{standalone:!0}};let U=(()=>{class n{constructor(e,i,c,l){this._LocalStorageService=e,this._NotifierService=i,this.router=c,this._ConfigService=l,this.TransInit=[{type:1,Trangthai:0,Phiban:"10",Soluong:5e7,DVNhan:"45000000",TK2KH:"123456",TK1KH:"654321",TK1Cty:"789456",Noidungban:"B\xe1n"},{type:2,Trangthai:0,Phimua:"5",Soluong:1e7,DVTra:"9500000",TK1KH:"147258",Email:"abc@gmail.com",TK2Cty:"654321",Noidungmua:"Mua"}],this.ConfigInit={Sellprice:"21000",Buyprice:"19000",SellFee:"10",BuyFee:"5",Mintrade:"5000000",Maxtrade:"20000000",Totaltrade:"5000000000"},this.Config={},this.editableContent=""}ngOnInit(){this._ConfigService.getAll().subscribe(e=>{this.Config=e[0],console.log(e)})}LoadInit(){0==this.Config.length?this._ConfigService.createConfig(this.ConfigInit).subscribe(e=>this._NotifierService.notify("success","Create Success")):this._NotifierService.notify("success","Demo data has been loaded")}onContentChange(e,i){this.Config[i]=e.target.innerHTML}Update(e){this._ConfigService.updateConfig(e).subscribe(i=>this._NotifierService.notify("success","Update Success"))}ClearAll(){this._LocalStorageService.clear(),this._NotifierService.notify("success","Xo\xe1 Th\xe0nh C\xf4ng"),window.location.reload()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_.n),t.Y36(T.lG),t.Y36(p.F0),t.Y36(N.E))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-config"]],decls:78,vars:41,consts:[[1,"h-full","gradient-form","bg-gray-200","md:h-screen"],[1,"container","py-12","px-6","h-full","m-auto"],[1,"flex","justify-center","items-center","flex-wrap","h-full","g-6","text-gray-800"],[1,"xl:w-6/12","w-full"],[1,"block","bg-white","shadow-lg","rounded-lg"],[1,"lg:flex","lg:flex-wrap","g-0"],[1,"lg:w-full","px-4","md:px-0"],[1,"md:p-12","md:mx-6"],[1,"flex","flex-col","space-y-3","overflow-auto","max-h-screen"],[1,"flex","flex-col","justify-center","space-y-4","mx-auto","p-4","rounded-md","bg-white"],[1,"flex","lg:flex-row","flex-col","lg:space-x-4","text-sm"],[1,"flex","flex-col","space-y-3"],["appearance","outline"],["matInput","","placeholder","M\xf4 T\u1ea3",3,"ngModel","ngModelOptions","ngModelChange"],[1,"text-blue-500"],["matSuffix","",1,"material-icons","ml-2"],[1,"text-center","space-x-2"],["mat-raised-button","","color","primary",3,"click"],[1,"material-icons"]],template:function(e,i){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"div",10)(11,"div",11)(12,"mat-form-field",12)(13,"mat-label"),t._uU(14,"Gi\xe1 B\xe1n"),t.qZA(),t.TgZ(15,"input",13),t.NdJ("ngModelChange",function(l){return i.Config.Sellprice=l}),t.qZA(),t.TgZ(16,"mat-hint")(17,"span",14),t._uU(18),t.ALo(19,"number"),t.qZA()()(),t.TgZ(20,"mat-form-field",12)(21,"mat-label"),t._uU(22,"Gi\xe1 Mua"),t.qZA(),t.TgZ(23,"input",13),t.NdJ("ngModelChange",function(l){return i.Config.Buyprice=l}),t.qZA(),t.TgZ(24,"mat-hint")(25,"span",14),t._uU(26),t.ALo(27,"number"),t.qZA()()(),t.TgZ(28,"mat-form-field",12)(29,"mat-label"),t._uU(30,"Ph\xed B\xe1n"),t.qZA(),t.TgZ(31,"input",13),t.NdJ("ngModelChange",function(l){return i.Config.SellFee=l}),t.qZA(),t.TgZ(32,"span",15),t._uU(33,"%"),t.qZA()(),t.TgZ(34,"mat-form-field",12)(35,"mat-label"),t._uU(36,"Ph\xed Mua"),t.qZA(),t.TgZ(37,"input",13),t.NdJ("ngModelChange",function(l){return i.Config.BuyFee=l}),t.qZA(),t.TgZ(38,"span",15),t._uU(39,"%"),t.qZA()()(),t.TgZ(40,"div",11)(41,"mat-form-field",12)(42,"mat-label"),t._uU(43,"Min Giao D\u1ecbch"),t.qZA(),t.TgZ(44,"input",13),t.NdJ("ngModelChange",function(l){return i.Config.Mintrade=l}),t.qZA(),t.TgZ(45,"mat-hint")(46,"span",14),t._uU(47),t.ALo(48,"number"),t.qZA()()(),t.TgZ(49,"mat-form-field",12)(50,"mat-label"),t._uU(51,"Max Giao D\u1ecbch"),t.qZA(),t.TgZ(52,"input",13),t.NdJ("ngModelChange",function(l){return i.Config.Maxtrade=l}),t.qZA(),t.TgZ(53,"mat-hint")(54,"span",14),t._uU(55),t.ALo(56,"number"),t.qZA()()(),t.TgZ(57,"mat-form-field",12)(58,"mat-label"),t._uU(59,"T\u1ed5ng Giao D\u1ecbch"),t.qZA(),t.TgZ(60,"input",13),t.NdJ("ngModelChange",function(l){return i.Config.Totaltrade=l}),t.qZA(),t.TgZ(61,"mat-hint")(62,"span",14),t._uU(63),t.ALo(64,"number"),t.qZA()()()()(),t.TgZ(65,"div",16)(66,"a",17),t.NdJ("click",function(){return i.Update(i.Config)}),t._uU(67,"C\u1eadp Nh\u1eadt"),t.qZA(),t.TgZ(68,"a",17),t.NdJ("click",function(){return i.LoadInit()}),t.TgZ(69,"span",18),t._uU(70," file_upload "),t.qZA(),t.TgZ(71,"span"),t._uU(72," D\u1eef Li\u1ec7u Demo "),t.qZA()(),t.TgZ(73,"a",17),t.NdJ("click",function(){return i.ClearAll()}),t.TgZ(74,"span",18),t._uU(75," restart_alt "),t.qZA(),t.TgZ(76,"span"),t._uU(77," Xo\xe1 D\u1eef Li\u1ec7u "),t.qZA()()()()()()()()()()()()()),2&e&&(t.xp6(15),t.Q6J("ngModel",i.Config.Sellprice)("ngModelOptions",t.DdM(34,s)),t.xp6(3),t.hij("",t.xi3(19,19,i.Config.Sellprice,"1.0-0")||"0","\u0111"),t.xp6(5),t.Q6J("ngModel",i.Config.Buyprice)("ngModelOptions",t.DdM(35,s)),t.xp6(3),t.hij("",t.xi3(27,22,i.Config.Buyprice,"1.0-0")||"0","\u0111"),t.xp6(5),t.Q6J("ngModel",i.Config.SellFee)("ngModelOptions",t.DdM(36,s)),t.xp6(6),t.Q6J("ngModel",i.Config.BuyFee)("ngModelOptions",t.DdM(37,s)),t.xp6(7),t.Q6J("ngModel",i.Config.Mintrade)("ngModelOptions",t.DdM(38,s)),t.xp6(3),t.hij("",t.xi3(48,25,i.Config.Mintrade,"1.0-0")||"0","\u0111"),t.xp6(5),t.Q6J("ngModel",i.Config.Maxtrade)("ngModelOptions",t.DdM(39,s)),t.xp6(3),t.hij("",t.xi3(56,28,i.Config.Maxtrade,"1.0-0")||"0","\u0111"),t.xp6(5),t.Q6J("ngModel",i.Config.Totaltrade)("ngModelOptions",t.DdM(40,s)),t.xp6(3),t.hij("",t.xi3(64,31,i.Config.Totaltrade,"1.0-0")||"0","\u0111"))},dependencies:[C.zs,u.KE,u.bx,u.hX,u.R9,Z.Nt,m.Fj,m.JJ,m.On,f.JJ]}),n})();var A=a(8739),g=a(6308),r=a(3626),S=a(8598),D=a(455),d=a(9650);function w(n,o){1&n&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Type")," "))}function E(n,o){1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"translate"),t.BQk()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"SITE_BUY")," "))}function q(n,o){1&n&&(t._uU(0),t.ALo(1,"translate")),2&n&&t.hij(" ",t.lcZ(1,1,"SITE_SELL")," ")}function Q(n,o){if(1&n&&(t.TgZ(0,"td",33),t.YNc(1,E,3,3,"ng-container",34),t.YNc(2,q,2,3,"ng-template",null,35,t.W1O),t.qZA()),2&n){const e=o.$implicit,i=t.MAs(3);t.xp6(1),t.Q6J("ngIf",1==e.Type)("ngIfElse",i)}}function Y(n,o){1&n&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Quantity_In")," "))}function L(n,o){if(1&n&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"number"),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.QuantityIn,"1.0-0"),"\u0111 ")}}function j(n,o){1&n&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Fee")," "))}function b(n,o){if(1&n&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"number"),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.Fee,"1.0-0"),"\u0111 ")}}function J(n,o){1&n&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Quantity_Out")," "))}function B(n,o){if(1&n&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"number"),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.QuantityOut,"1.0-0"),"\u0111 ")}}function F(n,o){1&n&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.hij("",t.lcZ(2,1,"Company_Account1")," "))}function O(n,o){if(1&n&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",e.CompanyAccount1," ")}}function I(n,o){1&n&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Company_Account1")," "))}function $(n,o){if(1&n&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",e.CompanyAccount2," ")}}function G(n,o){1&n&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Custom_Account1")," "))}function k(n,o){if(1&n&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",e.CustomAccount1," ")}}function H(n,o){1&n&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Custom_Account2")," "))}function K(n,o){if(1&n&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",e.CustomAccount2," ")}}function R(n,o){1&n&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Email")," "))}function X(n,o){if(1&n&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",e.Email," ")}}function z(n,o){1&n&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Content")," "))}function P(n,o){if(1&n&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",e.Content," ")}}function W(n,o){1&n&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Note")," "))}function V(n,o){if(1&n&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",e.Note," ")}}function tt(n,o){1&n&&(t.TgZ(0,"th",32),t._uU(1," Tr\u1ea1ng Th\xe1i "),t.qZA())}function nt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"td",33)(1,"mat-slide-toggle",36),t.NdJ("change",function(){const l=t.CHM(e).$implicit,st=t.oxw();return t.KtG(st.UpdateTT(l))}),t._uU(2),t.qZA()()}if(2&n){const e=o.$implicit;t.xp6(2),t.hij(" ",0==e.Status?"Waiting":"Done"," ")}}function et(n,o){1&n&&t._UZ(0,"tr",37)}function ot(n,o){1&n&&t._UZ(0,"tr",38),2&n&&t.Tol(1==o.$implicit.Type?"!bg-red-200 ":"!bg-green-200")}function it(n,o){if(1&n&&(t.TgZ(0,"tr",39)(1,"td",40),t._uU(2),t.qZA()()),2&n){t.oxw();const e=t.MAs(13);t.xp6(2),t.hij('No data matching the filter "',e.value,'"')}}const at=function(){return[5,10,25,100]};let lt=(()=>{class n{constructor(e,i,c){this._LocalStorageService=e,this._ExchangeService=i,this._NotifierService=c,this.data=[],this.displayedColumns=["Type","QuantityIn","Fee","QuantityOut","CompanyAccount1","CompanyAccount2","CustomAccount1","CustomAccount2","Email","Content","Note","Status"],this._ExchangeService.getAll().subscribe(l=>{this.dataSource=new r.by(l),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort})}ngOnInit(){}applyFilter(e){this.dataSource.filter=e.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}UpdateTT(e){e.Status=!e.Status,this._ExchangeService.updateExchange(e).subscribe(i=>this._NotifierService.notify("success","Update Success"))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_.n),t.Y36(S.O),t.Y36(T.lG))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-transaction"]],viewQuery:function(e,i){if(1&e&&(t.Gf(A.NW,5),t.Gf(g.YE,5)),2&e){let c;t.iGM(c=t.CRH())&&(i.paginator=c.first),t.iGM(c=t.CRH())&&(i.sort=c.first)}},decls:59,vars:11,consts:[[1,"h-full","gradient-form","bg-gray-200","md:h-screen"],[1,"container","py-12","px-6","h-full","m-auto"],[1,"flex","justify-center","items-center","flex-wrap","h-full","g-6","text-gray-800"],[1,"w-full","h-full"],[1,"block","bg-white","shadow-lg","rounded-lg"],[1,"lg:flex","lg:flex-wrap","g-0"],[1,"flex","flex-col","justify-center","space-y-4","lg:w-full","px-4","md:px-0"],[1,"flex","flex-col","w-full","p-4","rounded","shadow-lg","bg-white"],["appearance","outline",1,"w-full","text-xs"],["matInput","",1,"w-full",3,"placeholder","keyup"],["input",""],["matPrefix","",1,"material-icons","mr-2"],[1,"mat-elevation-z8","w-full"],["mat-table","","matSort","",1,"w-full",3,"dataSource"],["matColumnDef","Type"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","QuantityIn"],["matColumnDef","Fee"],["matColumnDef","QuantityOut"],["matColumnDef","CompanyAccount1"],["matColumnDef","CompanyAccount2"],["matColumnDef","CustomAccount1"],["matColumnDef","CustomAccount2"],["matColumnDef","Email"],["matColumnDef","Content"],["matColumnDef","Note"],["matColumnDef","Status"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"class",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[4,"ngIf","ngIfElse"],["elseTemplate",""],["color","primary",1,"text-xs",3,"change"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(e,i){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"mat-form-field",8)(9,"mat-label"),t._uU(10),t.ALo(11,"translate"),t.qZA(),t.TgZ(12,"input",9,10),t.NdJ("keyup",function(l){return i.applyFilter(l)}),t.ALo(14,"translate"),t.qZA(),t.TgZ(15,"span",11),t._uU(16,"search"),t.qZA()(),t.TgZ(17,"div",12)(18,"table",13),t.ynx(19,14),t.YNc(20,w,3,3,"th",15),t.YNc(21,Q,4,2,"td",16),t.BQk(),t.ynx(22,17),t.YNc(23,Y,3,3,"th",15),t.YNc(24,L,3,4,"td",16),t.BQk(),t.ynx(25,18),t.YNc(26,j,3,3,"th",15),t.YNc(27,b,3,4,"td",16),t.BQk(),t.ynx(28,19),t.YNc(29,J,3,3,"th",15),t.YNc(30,B,3,4,"td",16),t.BQk(),t.ynx(31,20),t.YNc(32,F,3,3,"th",15),t.YNc(33,O,2,1,"td",16),t.BQk(),t.ynx(34,21),t.YNc(35,I,3,3,"th",15),t.YNc(36,$,2,1,"td",16),t.BQk(),t.ynx(37,22),t.YNc(38,G,3,3,"th",15),t.YNc(39,k,2,1,"td",16),t.BQk(),t.ynx(40,23),t.YNc(41,H,3,3,"th",15),t.YNc(42,K,2,1,"td",16),t.BQk(),t.ynx(43,24),t.YNc(44,R,3,3,"th",15),t.YNc(45,X,2,1,"td",16),t.BQk(),t.ynx(46,25),t.YNc(47,z,3,3,"th",15),t.YNc(48,P,2,1,"td",16),t.BQk(),t.ynx(49,26),t.YNc(50,W,3,3,"th",15),t.YNc(51,V,2,1,"td",16),t.BQk(),t.ynx(52,27),t.YNc(53,tt,2,0,"th",15),t.YNc(54,nt,3,1,"td",16),t.BQk(),t.YNc(55,et,1,0,"tr",28),t.YNc(56,ot,1,3,"tr",29),t.YNc(57,it,3,1,"tr",30),t.qZA(),t._UZ(58,"mat-paginator",31),t.qZA()()()()()()()()()),2&e&&(t.xp6(10),t.Oqu(t.lcZ(11,6,"Search")),t.xp6(2),t.s9C("placeholder",t.lcZ(14,8,"Search")),t.xp6(6),t.Q6J("dataSource",i.dataSource),t.xp6(37),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(10,at)))},dependencies:[f.O5,u.KE,u.hX,u.qo,Z.Nt,A.NW,D.Rr,g.YE,g.nU,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,r.Ee,f.JJ,d.X$]}),n})();var ct=a(529),rt=a(5325);let ut=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[f.ez,M.q,m.u5,m.UX,d.aw.forRoot({defaultLanguage:"en",loader:{provide:d.Zw,useFactory:rt.g,deps:[ct.eN]}}),p.Bz.forChild([{path:"",redirectTo:"config",pathMatch:"full"},{path:"",component:v,children:[{path:"transaction",component:lt},{path:"config",component:U}]}])]}),n})()}}]);