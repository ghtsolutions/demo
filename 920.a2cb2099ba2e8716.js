"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[920],{3920:(Nt,v,u)=>{u.r(v),u.d(v,{AdminModule:()=>yt});var g=u(6895),y=u(1135),f=u(8505),C=u(4004),N=u(5698),M=u(3900),E=u(6497),t=u(4650),S=u(529);let U=(()=>{class n{constructor(e){this._httpClient=e,this.APIURL=E.N.APIURL,this._cauhinh=new y.X(null),this._cauhinhs=new y.X(null)}get cauhinhs$(){return this._cauhinhs.asObservable()}get cauhinh$(){return this._cauhinh.asObservable()}getByid(e){return this._httpClient.get(`${this.APIURL}/demo_cauhinh/id`).pipe((0,f.b)(i=>{this._cauhinh.next(i)}))}getByslug(e){return this._httpClient.get(`${this.APIURL}/demo_cauhinh/slug/${e}`).pipe((0,f.b)(i=>{this._cauhinh.next(i)}))}getAll(){return this._httpClient.get(`${this.APIURL}/demo_cauhinh`).pipe((0,f.b)(e=>(this._cauhinhs.next(e),e)))}createCauhinh(e){return console.log(e),this._httpClient.post(`${this.APIURL}/demo_cauhinh`,e).pipe((0,C.U)(i=>(this._cauhinhs.next(i),console.log(i),i)))}updateCauhinh(e){return this.cauhinhs$.pipe((0,N.q)(1),(0,M.w)(i=>this._httpClient.patch(`${this.APIURL}/demo_cauhinh/${e.id}`,e).pipe((0,C.U)(a=>{const l=i.findIndex(h=>h.id===a.id);return i[l]=a,this._cauhinhs.next(i),a}))))}deleteCauhinh(e){return this.cauhinhs$.pipe((0,N.q)(1),(0,M.w)(i=>this._httpClient.delete(`${this.APIURL}/demo_cauhinh/${e.id}`).pipe((0,C.U)(a=>{const l=i.filter(h=>h.id!=e.id);return this._cauhinhs.next(l),a}))))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(S.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var d=u(5938),_=u(7789),m=u(9116),w=u(4859),r=u(9549),T=u(4144),Z=u(3267),s=u(4006);const q=["drawer"],Y=function(n){return[n]};function j(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",8),t.NdJ("click",function(){t.CHM(e),t.oxw();const a=t.MAs(2);return t.KtG(a.open())}),t.TgZ(1,"div",9)(2,"div",10)(3,"span"),t._uU(4),t.qZA()()()()}if(2&n){const e=o.$implicit;t.Q6J("routerLink",t.VKq(2,Y,e.Slug)),t.xp6(4),t.hij("",e.Title," ")}}const D=function(){return{standalone:!0}};function Q(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",11)(1,"div",12),t._uU(2,"Th\xeam M\u1edbi"),t.qZA(),t.TgZ(3,"div",13)(4,"div",14)(5,"mat-form-field",15)(6,"mat-label"),t._uU(7,"Ti\xeau \u0110\u1ec1"),t.qZA(),t.TgZ(8,"input",16),t.NdJ("ngModelChange",function(a){t.CHM(e);const l=t.oxw();return t.KtG(l.Detail.Title=a)}),t.qZA()(),t.TgZ(9,"mat-form-field",15)(10,"mat-label"),t._uU(11,"Slug"),t.qZA(),t.TgZ(12,"input",17),t.NdJ("ngModelChange",function(a){t.CHM(e);const l=t.oxw();return t.KtG(l.Detail.Slug=a)}),t.qZA()()()(),t.TgZ(13,"div",18)(14,"button",19),t._uU(15,"Hu\u1ef7"),t.qZA(),t.TgZ(16,"button",20),t._uU(17,"\u0110\u1ed3ng \xdd"),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(8),t.Q6J("ngModel",e.Detail.Title)("ngModelOptions",t.DdM(4,D)),t.xp6(4),t.Q6J("ngModel",e.Detail.Slug)("ngModelOptions",t.DdM(5,D))}}let J=(()=>{class n{constructor(e,i,a,l){this.dialog=e,this._Notification=i,this.router=a,this._CauhinhService=l,this.Detail={},this.Lists=[{id:1,Title:"C\u1ea5u H\xecnh Chung",Slug:"cauhinh"},{id:1,Title:"N\u1ed9i Dung",Slug:"noidung"},{id:1,Title:"Ng\xf4n Ng\u1eef",Slug:"ngonngu"},{id:1,Title:"Giao D\u1ecbch",Slug:"transaction"}],this.FilterLists=[{id:1,Title:"C\u1ea5u H\xecnh Chung",Slug:"cauhinh"},{id:1,Title:"N\u1ed9i Dung",Slug:"noidung"},{id:1,Title:"Ng\xf4n Ng\u1eef",Slug:"ngonngu"},{id:1,Title:"Giao D\u1ecbch",Slug:"transaction"}],this.Sitemap={loc:"",priority:""}}ngOnInit(){}isActive(e){return this.router.url===e}applyFilter(e){const i=e.target.value;i.length>2&&(this.Lists=this.Lists.filter(a=>a.Hoten.toLowerCase().includes(i)||a.SDT.toLowerCase().includes(i)))}openDialog(e){this.dialog.open(e,{}).afterClosed().subscribe(a=>{a&&this._CauhinhService.createCauhinh(this.Detail).subscribe(l=>this._Notification.notify("success","Th\xeam m\u1edbi th\xe0nh c\xf4ng"))})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.uw),t.Y36(_.lG),t.Y36(m.F0),t.Y36(U))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-admin"]],viewQuery:function(e,i){if(1&e&&t.Gf(q,7),2&e){let a;t.iGM(a=t.CRH())&&(i.drawer=a.first)}},decls:11,vars:1,consts:[["autosize","",1,"example-container","w-full","h-full"],["mode","side","position","end",1,"!flex","flex-col","w-3/4","flex-auto","relative","h-full"],["drawer",""],[1,"relative","flex","flex-col","h-full","w-full","overflow-auto"],[1,"!flex","flex-col","w-1/4","flex-auto","relative","bg-white","!h-[100vh]"],[1,"flex","flex-col"],["routerLinkActive","router-link-active","class","flex flex-row justify-between items-center p-4 hover:bg-gray-200",3,"routerLink","click",4,"ngFor","ngForOf"],["dialogTemplate",""],["routerLinkActive","router-link-active",1,"flex","flex-row","justify-between","items-center","p-4","hover:bg-gray-200",3,"routerLink","click"],[1,"flex","flex-row","space-x-2","items-center","justify-between","w-full"],[1,"flex","flex-col","space-y-2"],[1,"min-w-[672px]"],["mat-dialog-title",""],["mat-dialog-content",""],[1,"flex","flex-col","w-full","space-y-4","p-4"],["appearance","outline",1,"w-full"],["matInput","","placeholder","Ti\xeau \u0110\u1ec1",3,"ngModel","ngModelOptions","ngModelChange"],["matInput","","placeholder","Slug",3,"ngModel","ngModelOptions","ngModelChange"],["mat-dialog-actions","",1,"justify-center"],["mat-button","","mat-dialog-close","false",1,"bg-red-400","hover:bg-red-600","text-white"],["mat-button","","mat-dialog-close","true",1,"bg-blue-400","hover:bg-blue-600","text-white"]],template:function(e,i){1&e&&(t.TgZ(0,"mat-drawer-container",0)(1,"mat-drawer",1,2)(3,"div",3),t._UZ(4,"router-outlet"),t.qZA()(),t.TgZ(5,"mat-drawer-content",4)(6,"div",3)(7,"div",5),t.YNc(8,j,5,4,"div",6),t.qZA()()()(),t.YNc(9,Q,18,6,"ng-template",null,7,t.W1O)),2&e&&(t.xp6(8),t.Q6J("ngForOf",i.FilterLists))},dependencies:[g.sg,w.lW,d.ZT,d.uh,d.xY,d.H8,r.KE,r.hX,T.Nt,Z.jA,Z.kh,Z.LW,s.Fj,s.JJ,s.On,m.lC,m.rH,m.Od]}),n})();var O=u(3949),F=u(3559),L=u(5556);const p=function(){return{standalone:!0}};let B=(()=>{class n{constructor(e,i,a,l){this._LocalStorageService=e,this._NotifierService=i,this.router=a,this._ConfigService=l,this.TransInit=[{type:1,Trangthai:0,Phiban:"10",Soluong:5e7,DVNhan:"45000000",TK2KH:"123456",TK1KH:"654321",TK1Cty:"789456",Noidungban:"B\xe1n"},{type:2,Trangthai:0,Phimua:"5",Soluong:1e7,DVTra:"9500000",TK1KH:"147258",Email:"abc@gmail.com",TK2Cty:"654321",Noidungmua:"Mua"}],this.ConfigInit={Sellprice:"21000.00",Buyprice:"8700.00",SellFee:"10.00",BuyFee:"20.00",Mintrade:"5000000.00",Maxtrade:"100000.00",Totaltrade:"99999999.99",Note:"",Type:1,Ordering:1,Status:0},this.Config={},this.editableContent=""}ngOnInit(){this._ConfigService.getAll().subscribe(e=>{this.Config=e[0],console.log(e)})}LoadInit(){0==this.Config.length?this._ConfigService.createConfig(this.ConfigInit).subscribe(e=>this._NotifierService.notify("success","Create Success")):this._NotifierService.notify("success","Demo data has been loaded")}onContentChange(e,i){this.Config[i]=e.target.innerHTML}Update(e){this._ConfigService.updateConfig(e).subscribe(i=>this._NotifierService.notify("success","Update Success"))}ClearAll(){this._LocalStorageService.clear(),this._NotifierService.notify("success","Xo\xe1 Th\xe0nh C\xf4ng"),window.location.reload()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(L.n),t.Y36(_.lG),t.Y36(m.F0),t.Y36(F.E))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-config"]],decls:78,vars:41,consts:[[1,"h-full","gradient-form","bg-gray-200","md:h-screen"],[1,"container","py-12","px-6","h-full","m-auto"],[1,"flex","justify-center","items-center","flex-wrap","h-full","g-6","text-gray-800"],[1,"w-full"],[1,"block","bg-white","shadow-lg","rounded-lg"],[1,"lg:flex","lg:flex-wrap","g-0"],[1,"lg:w-full","px-4","md:px-0"],[1,"md:p-12","md:mx-6"],[1,"flex","flex-col","space-y-3","overflow-auto","max-h-screen"],[1,"flex","flex-col","justify-center","space-y-4","mx-auto","p-4","rounded-md","bg-white"],[1,"flex","lg:flex-row","flex-col","lg:space-x-4","text-sm"],[1,"flex","flex-col","space-y-3"],["appearance","outline"],["matInput","","placeholder","M\xf4 T\u1ea3",3,"ngModel","ngModelOptions","ngModelChange"],[1,"text-blue-500"],["matSuffix","",1,"material-icons","ml-2"],[1,"text-center","space-x-2"],["mat-raised-button","","color","primary",3,"click"],[1,"material-icons"]],template:function(e,i){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"div",10)(11,"div",11)(12,"mat-form-field",12)(13,"mat-label"),t._uU(14,"Gi\xe1 B\xe1n"),t.qZA(),t.TgZ(15,"input",13),t.NdJ("ngModelChange",function(l){return i.Config.Sellprice=l}),t.qZA(),t.TgZ(16,"mat-hint")(17,"span",14),t._uU(18),t.ALo(19,"number"),t.qZA()()(),t.TgZ(20,"mat-form-field",12)(21,"mat-label"),t._uU(22,"Gi\xe1 Mua"),t.qZA(),t.TgZ(23,"input",13),t.NdJ("ngModelChange",function(l){return i.Config.Buyprice=l}),t.qZA(),t.TgZ(24,"mat-hint")(25,"span",14),t._uU(26),t.ALo(27,"number"),t.qZA()()(),t.TgZ(28,"mat-form-field",12)(29,"mat-label"),t._uU(30,"Ph\xed B\xe1n"),t.qZA(),t.TgZ(31,"input",13),t.NdJ("ngModelChange",function(l){return i.Config.SellFee=l}),t.qZA(),t.TgZ(32,"span",15),t._uU(33,"%"),t.qZA()(),t.TgZ(34,"mat-form-field",12)(35,"mat-label"),t._uU(36,"Ph\xed Mua"),t.qZA(),t.TgZ(37,"input",13),t.NdJ("ngModelChange",function(l){return i.Config.BuyFee=l}),t.qZA(),t.TgZ(38,"span",15),t._uU(39,"%"),t.qZA()()(),t.TgZ(40,"div",11)(41,"mat-form-field",12)(42,"mat-label"),t._uU(43,"Min Giao D\u1ecbch"),t.qZA(),t.TgZ(44,"input",13),t.NdJ("ngModelChange",function(l){return i.Config.Mintrade=l}),t.qZA(),t.TgZ(45,"mat-hint")(46,"span",14),t._uU(47),t.ALo(48,"number"),t.qZA()()(),t.TgZ(49,"mat-form-field",12)(50,"mat-label"),t._uU(51,"Max Giao D\u1ecbch"),t.qZA(),t.TgZ(52,"input",13),t.NdJ("ngModelChange",function(l){return i.Config.Maxtrade=l}),t.qZA(),t.TgZ(53,"mat-hint")(54,"span",14),t._uU(55),t.ALo(56,"number"),t.qZA()()(),t.TgZ(57,"mat-form-field",12)(58,"mat-label"),t._uU(59,"T\u1ed5ng Giao D\u1ecbch"),t.qZA(),t.TgZ(60,"input",13),t.NdJ("ngModelChange",function(l){return i.Config.Totaltrade=l}),t.qZA(),t.TgZ(61,"mat-hint")(62,"span",14),t._uU(63),t.ALo(64,"number"),t.qZA()()()()(),t.TgZ(65,"div",16)(66,"a",17),t.NdJ("click",function(){return i.Update(i.Config)}),t._uU(67,"C\u1eadp Nh\u1eadt"),t.qZA(),t.TgZ(68,"a",17),t.NdJ("click",function(){return i.LoadInit()}),t.TgZ(69,"span",18),t._uU(70," file_upload "),t.qZA(),t.TgZ(71,"span"),t._uU(72," D\u1eef Li\u1ec7u Demo "),t.qZA()(),t.TgZ(73,"a",17),t.NdJ("click",function(){return i.ClearAll()}),t.TgZ(74,"span",18),t._uU(75," restart_alt "),t.qZA(),t.TgZ(76,"span"),t._uU(77," Xo\xe1 D\u1eef Li\u1ec7u "),t.qZA()()()()()()()()()()()()()),2&e&&(t.xp6(15),t.Q6J("ngModel",i.Config.Sellprice)("ngModelOptions",t.DdM(34,p)),t.xp6(3),t.hij("",t.xi3(19,19,i.Config.Sellprice,"1.0-0")||"0","\u0111"),t.xp6(5),t.Q6J("ngModel",i.Config.Buyprice)("ngModelOptions",t.DdM(35,p)),t.xp6(3),t.hij("",t.xi3(27,22,i.Config.Buyprice,"1.0-0")||"0","\u0111"),t.xp6(5),t.Q6J("ngModel",i.Config.SellFee)("ngModelOptions",t.DdM(36,p)),t.xp6(6),t.Q6J("ngModel",i.Config.BuyFee)("ngModelOptions",t.DdM(37,p)),t.xp6(7),t.Q6J("ngModel",i.Config.Mintrade)("ngModelOptions",t.DdM(38,p)),t.xp6(3),t.hij("",t.xi3(48,25,i.Config.Mintrade,"1.0-0")||"0","\u0111"),t.xp6(5),t.Q6J("ngModel",i.Config.Maxtrade)("ngModelOptions",t.DdM(39,p)),t.xp6(3),t.hij("",t.xi3(56,28,i.Config.Maxtrade,"1.0-0")||"0","\u0111"),t.xp6(5),t.Q6J("ngModel",i.Config.Totaltrade)("ngModelOptions",t.DdM(40,p)),t.xp6(3),t.hij("",t.xi3(64,31,i.Config.Totaltrade,"1.0-0")||"0","\u0111"))},dependencies:[w.zs,r.KE,r.bx,r.hX,r.R9,T.Nt,s.Fj,s.JJ,s.On,g.JJ]}),n})();var b=u(8739),x=u(6308),c=u(3626),I=u(8598),$=u(455),A=u(9650);function G(n,o){1&n&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Type")," "))}function R(n,o){1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"translate"),t.BQk()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"SITE_BUY")," "))}function H(n,o){1&n&&(t._uU(0),t.ALo(1,"translate")),2&n&&t.hij(" ",t.lcZ(1,1,"SITE_SELL")," ")}function k(n,o){if(1&n&&(t.TgZ(0,"td",33),t.YNc(1,R,3,3,"ng-container",34),t.YNc(2,H,2,3,"ng-template",null,35,t.W1O),t.qZA()),2&n){const e=o.$implicit,i=t.MAs(3);t.xp6(1),t.Q6J("ngIf",1==e.Type)("ngIfElse",i)}}function K(n,o){1&n&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Quantity_In")," "))}function P(n,o){if(1&n&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"number"),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.QuantityIn,"1.0-0"),"\u0111 ")}}function X(n,o){1&n&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Fee")," "))}function z(n,o){if(1&n&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"number"),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.Fee,"1.0-0"),"\u0111 ")}}function W(n,o){1&n&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Quantity_Out")," "))}function V(n,o){if(1&n&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"number"),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.QuantityOut,"1.0-0"),"\u0111 ")}}function tt(n,o){1&n&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.hij("",t.lcZ(2,1,"Company_Account1")," "))}function nt(n,o){if(1&n&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",e.CompanyAccount1," ")}}function et(n,o){1&n&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Company_Account1")," "))}function it(n,o){if(1&n&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",e.CompanyAccount2," ")}}function ot(n,o){1&n&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Custom_Account1")," "))}function at(n,o){if(1&n&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",e.CustomAccount1," ")}}function lt(n,o){1&n&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Custom_Account2")," "))}function ut(n,o){if(1&n&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",e.CustomAccount2," ")}}function ct(n,o){1&n&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Email")," "))}function rt(n,o){if(1&n&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",e.Email," ")}}function st(n,o){1&n&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Content")," "))}function pt(n,o){if(1&n&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",e.Content," ")}}function gt(n,o){1&n&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Note")," "))}function mt(n,o){if(1&n&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",e.Note," ")}}function dt(n,o){1&n&&(t.TgZ(0,"th",32),t._uU(1," Tr\u1ea1ng Th\xe1i "),t.qZA())}function ht(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"td",33)(1,"mat-slide-toggle",36),t.NdJ("change",function(){const l=t.CHM(e).$implicit,h=t.oxw();return t.KtG(h.UpdateTT(l))}),t._uU(2),t.qZA()()}if(2&n){const e=o.$implicit;t.xp6(2),t.hij(" ",0==e.Status?"Waiting":"Done"," ")}}function ft(n,o){1&n&&t._UZ(0,"tr",37)}function Ct(n,o){1&n&&t._UZ(0,"tr",38),2&n&&t.Tol(1==o.$implicit.Type?"!bg-red-200 ":"!bg-green-200")}function _t(n,o){if(1&n&&(t.TgZ(0,"tr",39)(1,"td",40),t._uU(2),t.qZA()()),2&n){t.oxw();const e=t.MAs(13);t.xp6(2),t.hij('No data matching the filter "',e.value,'"')}}const Tt=function(){return[5,10,25,100]};let Zt=(()=>{class n{constructor(e,i,a){this._LocalStorageService=e,this._ExchangeService=i,this._NotifierService=a,this.data=[],this.displayedColumns=["Type","QuantityIn","Fee","QuantityOut","CompanyAccount1","CompanyAccount2","CustomAccount1","CustomAccount2","Email","Content","Note","Status"],this._ExchangeService.getAll().subscribe(l=>{this.dataSource=new c.by(l),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort})}ngOnInit(){}applyFilter(e){this.dataSource.filter=e.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}UpdateTT(e){e.Status=!e.Status,this._ExchangeService.updateExchange(e).subscribe(i=>this._NotifierService.notify("success","Update Success"))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(L.n),t.Y36(I.O),t.Y36(_.lG))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-transaction"]],viewQuery:function(e,i){if(1&e&&(t.Gf(b.NW,5),t.Gf(x.YE,5)),2&e){let a;t.iGM(a=t.CRH())&&(i.paginator=a.first),t.iGM(a=t.CRH())&&(i.sort=a.first)}},decls:59,vars:11,consts:[[1,"h-full","gradient-form","bg-gray-200","md:h-screen"],[1,"container","py-12","px-6","h-full","m-auto"],[1,"flex","justify-center","items-center","flex-wrap","h-full","g-6","text-gray-800"],[1,"w-full","h-full"],[1,"block","bg-white","shadow-lg","rounded-lg"],[1,"lg:flex","lg:flex-wrap","g-0"],[1,"flex","flex-col","justify-center","space-y-4","lg:w-full","px-4","md:px-0"],[1,"flex","flex-col","w-full","p-4","rounded","shadow-lg","bg-white"],["appearance","outline",1,"w-full","text-xs"],["matInput","",1,"w-full",3,"placeholder","keyup"],["input",""],["matPrefix","",1,"material-icons","mr-2"],[1,"mat-elevation-z8","w-full"],["mat-table","","matSort","",1,"w-full",3,"dataSource"],["matColumnDef","Type"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","QuantityIn"],["matColumnDef","Fee"],["matColumnDef","QuantityOut"],["matColumnDef","CompanyAccount1"],["matColumnDef","CompanyAccount2"],["matColumnDef","CustomAccount1"],["matColumnDef","CustomAccount2"],["matColumnDef","Email"],["matColumnDef","Content"],["matColumnDef","Note"],["matColumnDef","Status"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"class",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[4,"ngIf","ngIfElse"],["elseTemplate",""],["color","primary",1,"text-xs",3,"change"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(e,i){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"mat-form-field",8)(9,"mat-label"),t._uU(10),t.ALo(11,"translate"),t.qZA(),t.TgZ(12,"input",9,10),t.NdJ("keyup",function(l){return i.applyFilter(l)}),t.ALo(14,"translate"),t.qZA(),t.TgZ(15,"span",11),t._uU(16,"search"),t.qZA()(),t.TgZ(17,"div",12)(18,"table",13),t.ynx(19,14),t.YNc(20,G,3,3,"th",15),t.YNc(21,k,4,2,"td",16),t.BQk(),t.ynx(22,17),t.YNc(23,K,3,3,"th",15),t.YNc(24,P,3,4,"td",16),t.BQk(),t.ynx(25,18),t.YNc(26,X,3,3,"th",15),t.YNc(27,z,3,4,"td",16),t.BQk(),t.ynx(28,19),t.YNc(29,W,3,3,"th",15),t.YNc(30,V,3,4,"td",16),t.BQk(),t.ynx(31,20),t.YNc(32,tt,3,3,"th",15),t.YNc(33,nt,2,1,"td",16),t.BQk(),t.ynx(34,21),t.YNc(35,et,3,3,"th",15),t.YNc(36,it,2,1,"td",16),t.BQk(),t.ynx(37,22),t.YNc(38,ot,3,3,"th",15),t.YNc(39,at,2,1,"td",16),t.BQk(),t.ynx(40,23),t.YNc(41,lt,3,3,"th",15),t.YNc(42,ut,2,1,"td",16),t.BQk(),t.ynx(43,24),t.YNc(44,ct,3,3,"th",15),t.YNc(45,rt,2,1,"td",16),t.BQk(),t.ynx(46,25),t.YNc(47,st,3,3,"th",15),t.YNc(48,pt,2,1,"td",16),t.BQk(),t.ynx(49,26),t.YNc(50,gt,3,3,"th",15),t.YNc(51,mt,2,1,"td",16),t.BQk(),t.ynx(52,27),t.YNc(53,dt,2,0,"th",15),t.YNc(54,ht,3,1,"td",16),t.BQk(),t.YNc(55,ft,1,0,"tr",28),t.YNc(56,Ct,1,3,"tr",29),t.YNc(57,_t,3,1,"tr",30),t.qZA(),t._UZ(58,"mat-paginator",31),t.qZA()()()()()()()()()),2&e&&(t.xp6(10),t.Oqu(t.lcZ(11,6,"Search")),t.xp6(2),t.s9C("placeholder",t.lcZ(14,8,"Search")),t.xp6(6),t.Q6J("dataSource",i.dataSource),t.xp6(37),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(10,Tt)))},dependencies:[g.O5,r.KE,r.hX,r.qo,T.Nt,b.NW,$.Rr,x.YE,x.nU,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,c.Ee,g.JJ,A.X$]}),n})();var xt=u(5325);let At=(()=>{class n{constructor(e){this._CauhinhService=e,this.Data={}}ngOnInit(){this._CauhinhService.getByslug("ngonngu").subscribe(e=>{console.log(e),this.Data=e})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(U))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-ngonngu"]],decls:9,vars:7,consts:[[1,"flex","flex-col"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div"),t._uU(2),t.qZA(),t.TgZ(3,"div"),t._uU(4),t.ALo(5,"json"),t.qZA(),t.TgZ(6,"div"),t._uU(7),t.ALo(8,"json"),t.qZA()()),2&e&&(t.xp6(2),t.Oqu(i.Data.languages),t.xp6(2),t.Oqu(t.lcZ(5,3,i.Data.keys)),t.xp6(3),t.Oqu(t.lcZ(8,5,i.Data.translations)))},dependencies:[g.Ts]}),n})(),vt=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-noidung"]],decls:2,vars:0,template:function(e,i){1&e&&(t.TgZ(0,"p"),t._uU(1," noidung works!\n"),t.qZA())}}),n})(),yt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.ez,O.q,s.u5,s.UX,A.aw.forRoot({defaultLanguage:"en",loader:{provide:A.Zw,useFactory:xt.g,deps:[S.eN]}}),m.Bz.forChild([{path:"",redirectTo:"cauhinh",pathMatch:"full"},{path:"",component:J,children:[{path:"cauhinh",component:B},{path:"transaction",component:Zt},{path:"ngonngu",component:At},{path:"noidung",component:vt}]}])]}),n})()}}]);