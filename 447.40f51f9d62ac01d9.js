"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[447],{4447:(Lt,b,r)=>{r.r(b),r.d(b,{AdminModule:()=>Dt});var m=r(6895),x=r(1135),h=r(8505),f=r(4004),Z=r(5698),A=r(3900),D=r(6497),t=r(4650),N=r(529);let F=(()=>{class e{constructor(n){this._httpClient=n,this.APIURL=D.N.APIURL,this._cauhinh=new x.X(null),this._cauhinhs=new x.X(null)}get cauhinhs$(){return this._cauhinhs.asObservable()}get cauhinh$(){return this._cauhinh.asObservable()}getByid(n){return this._httpClient.get(`${this.APIURL}/demo_cauhinh/id`).pipe((0,h.b)(i=>{this._cauhinh.next(i)}))}getByslug(n){return this._httpClient.get(`${this.APIURL}/demo_cauhinh/slug/${n}`).pipe((0,h.b)(i=>{this._cauhinh.next(i)}))}getAll(){return this._httpClient.get(`${this.APIURL}/demo_cauhinh`).pipe((0,h.b)(n=>(this._cauhinhs.next(n),n)))}createCauhinh(n){return console.log(n),this._httpClient.post(`${this.APIURL}/demo_cauhinh`,n).pipe((0,f.U)(i=>(this._cauhinhs.next(i),console.log(i),i)))}updateCauhinh(n){return this.cauhinhs$.pipe((0,Z.q)(1),(0,A.w)(i=>this._httpClient.patch(`${this.APIURL}/demo_cauhinh/${n.id}`,n).pipe((0,f.U)(a=>{const l=i.findIndex(u=>u.id===a.id);return i[l]=a,this._cauhinhs.next(i),a}))))}deleteCauhinh(n){return this.cauhinhs$.pipe((0,Z.q)(1),(0,A.w)(i=>this._httpClient.delete(`${this.APIURL}/demo_cauhinh/${n.id}`).pipe((0,f.U)(a=>{const l=i.filter(u=>u.id!=n.id);return this._cauhinhs.next(l),a}))))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(N.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var T=r(5938),v=r(7789),_=r(9116),M=r(4859),c=r(9549),y=r(4144),w=r(3267),p=r(4006);const J=["drawer"],O=function(e){return[e]};function I(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",8),t.NdJ("click",function(){t.CHM(n),t.oxw();const a=t.MAs(2);return t.KtG(a.open())}),t.TgZ(1,"div",9)(2,"div",10)(3,"span"),t._uU(4),t.qZA()()()()}if(2&e){const n=o.$implicit;t.Q6J("routerLink",t.VKq(2,O,n.Slug)),t.xp6(4),t.hij("",n.Title," ")}}const L=function(){return{standalone:!0}};function Q(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",11)(1,"div",12),t._uU(2,"Th\xeam M\u1edbi"),t.qZA(),t.TgZ(3,"div",13)(4,"div",14)(5,"mat-form-field",15)(6,"mat-label"),t._uU(7,"Ti\xeau \u0110\u1ec1"),t.qZA(),t.TgZ(8,"input",16),t.NdJ("ngModelChange",function(a){t.CHM(n);const l=t.oxw();return t.KtG(l.Detail.Title=a)}),t.qZA()(),t.TgZ(9,"mat-form-field",15)(10,"mat-label"),t._uU(11,"Slug"),t.qZA(),t.TgZ(12,"input",17),t.NdJ("ngModelChange",function(a){t.CHM(n);const l=t.oxw();return t.KtG(l.Detail.Slug=a)}),t.qZA()()()(),t.TgZ(13,"div",18)(14,"button",19),t._uU(15,"Hu\u1ef7"),t.qZA(),t.TgZ(16,"button",20),t._uU(17,"\u0110\u1ed3ng \xdd"),t.qZA()()()}if(2&e){const n=t.oxw();t.xp6(8),t.Q6J("ngModel",n.Detail.Title)("ngModelOptions",t.DdM(4,L)),t.xp6(4),t.Q6J("ngModel",n.Detail.Slug)("ngModelOptions",t.DdM(5,L))}}let $=(()=>{class e{constructor(n,i,a,l){this.dialog=n,this._Notification=i,this.router=a,this._CauhinhService=l,this.Detail={},this.Lists=[{id:1,Title:"C\u1ea5u H\xecnh Chung",Slug:"cauhinh"},{id:1,Title:"N\u1ed9i Dung",Slug:"noidung"},{id:1,Title:"Ng\xf4n Ng\u1eef",Slug:"ngonngu"},{id:1,Title:"Giao D\u1ecbch",Slug:"transaction"}],this.FilterLists=[{id:1,Title:"C\u1ea5u H\xecnh Chung",Slug:"cauhinh"},{id:1,Title:"N\u1ed9i Dung",Slug:"noidung"},{id:1,Title:"Ng\xf4n Ng\u1eef",Slug:"ngonngu"},{id:1,Title:"Giao D\u1ecbch",Slug:"transaction"}],this.Sitemap={loc:"",priority:""}}ngOnInit(){}isActive(n){return this.router.url===n}applyFilter(n){const i=n.target.value;i.length>2&&(this.Lists=this.Lists.filter(a=>a.Hoten.toLowerCase().includes(i)||a.SDT.toLowerCase().includes(i)))}openDialog(n){this.dialog.open(n,{}).afterClosed().subscribe(a=>{a&&this._CauhinhService.createCauhinh(this.Detail).subscribe(l=>this._Notification.notify("success","Th\xeam m\u1edbi th\xe0nh c\xf4ng"))})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(T.uw),t.Y36(v.lG),t.Y36(_.F0),t.Y36(F))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-admin"]],viewQuery:function(n,i){if(1&n&&t.Gf(J,7),2&n){let a;t.iGM(a=t.CRH())&&(i.drawer=a.first)}},decls:11,vars:1,consts:[["autosize","",1,"example-container","w-full","h-full"],["mode","side","opened","","position","end",1,"!flex","flex-col","w-3/4","flex-auto","relative","h-full"],["drawer",""],[1,"relative","flex","flex-col","h-full","w-full","overflow-auto"],[1,"!flex","flex-col","w-1/4","flex-auto","relative","bg-white","!h-[100vh]"],[1,"flex","flex-col"],["routerLinkActive","router-link-active","class","flex flex-row justify-between items-center p-4 hover:bg-gray-200",3,"routerLink","click",4,"ngFor","ngForOf"],["dialogTemplate",""],["routerLinkActive","router-link-active",1,"flex","flex-row","justify-between","items-center","p-4","hover:bg-gray-200",3,"routerLink","click"],[1,"flex","flex-row","space-x-2","items-center","justify-between","w-full"],[1,"flex","flex-col","space-y-2"],[1,"min-w-[672px]"],["mat-dialog-title",""],["mat-dialog-content",""],[1,"flex","flex-col","w-full","space-y-4","p-4"],["appearance","outline",1,"w-full"],["matInput","","placeholder","Ti\xeau \u0110\u1ec1",3,"ngModel","ngModelOptions","ngModelChange"],["matInput","","placeholder","Slug",3,"ngModel","ngModelOptions","ngModelChange"],["mat-dialog-actions","",1,"justify-center"],["mat-button","","mat-dialog-close","false",1,"bg-red-400","hover:bg-red-600","text-white"],["mat-button","","mat-dialog-close","true",1,"bg-blue-400","hover:bg-blue-600","text-white"]],template:function(n,i){1&n&&(t.TgZ(0,"mat-drawer-container",0)(1,"mat-drawer",1,2)(3,"div",3),t._UZ(4,"router-outlet"),t.qZA()(),t.TgZ(5,"mat-drawer-content",4)(6,"div",3)(7,"div",5),t.YNc(8,I,5,4,"div",6),t.qZA()()()(),t.YNc(9,Q,18,6,"ng-template",null,7,t.W1O)),2&n&&(t.xp6(8),t.Q6J("ngForOf",i.FilterLists))},dependencies:[m.sg,M.lW,T.ZT,T.uh,T.xY,T.H8,c.KE,c.hX,y.Nt,w.jA,w.kh,w.LW,p.Fj,p.JJ,p.On,_.lC,_.rH,_.Od]}),e})();var j=r(7596),B=r(3559),E=r(5556);const d=function(){return{standalone:!0}};let k=(()=>{class e{constructor(n,i,a,l){this._LocalStorageService=n,this._NotifierService=i,this.router=a,this._ConfigService=l,this.TransInit=[{type:1,Trangthai:0,Phiban:"10",Soluong:5e7,DVNhan:"45000000",TK2KH:"123456",TK1KH:"654321",TK1Cty:"789456",Noidungban:"B\xe1n"},{type:2,Trangthai:0,Phimua:"5",Soluong:1e7,DVTra:"9500000",TK1KH:"147258",Email:"abc@gmail.com",TK2Cty:"654321",Noidungmua:"Mua"}],this.ConfigInit={Sellprice:"21000.00",Buyprice:"8700.00",SellFee:"10.00",BuyFee:"20.00",Mintrade:"5000000.00",Maxtrade:"100000.00",Totaltrade:"99999999.99",Note:"",Type:1,Ordering:1,Status:0},this.Config={},this.editableContent=""}ngOnInit(){this._ConfigService.getAll().subscribe(n=>{this.Config=n[0],console.log(n)})}LoadInit(){0==this.Config.length?this._ConfigService.createConfig(this.ConfigInit).subscribe(n=>this._NotifierService.notify("success","Create Success")):this._NotifierService.notify("success","Demo data has been loaded")}onContentChange(n,i){this.Config[i]=n.target.innerHTML}Update(n){this._ConfigService.updateConfig(n).subscribe(i=>this._NotifierService.notify("success","Update Success"))}ClearAll(){this._LocalStorageService.clear(),this._NotifierService.notify("success","Xo\xe1 Th\xe0nh C\xf4ng"),window.location.reload()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(E.n),t.Y36(v.lG),t.Y36(_.F0),t.Y36(B.E))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-config"]],decls:73,vars:41,consts:[[1,"h-full","gradient-form","bg-gray-200","md:h-screen"],[1,"container","py-12","px-6","h-full","m-auto"],[1,"flex","justify-center","items-center","flex-wrap","h-full","g-6","text-gray-800"],[1,"w-full"],[1,"block","bg-white","shadow-lg","rounded-lg"],[1,"lg:flex","lg:flex-wrap","g-0"],[1,"lg:w-full","px-4","md:px-0"],[1,"md:p-12","md:mx-6"],[1,"flex","flex-col","space-y-3","overflow-auto","max-h-screen"],[1,"flex","flex-col","justify-center","space-y-4","mx-auto","p-4","rounded-md","bg-white"],[1,"flex","lg:flex-row","flex-col","lg:space-x-4"],[1,"flex","flex-col","space-y-3"],["appearance","outline"],["matInput","","placeholder","M\xf4 T\u1ea3",3,"ngModel","ngModelOptions","ngModelChange"],[1,"text-blue-500"],["matSuffix","",1,"material-icons","ml-2"],["matInput","","placeholder","T\u1ed4NG QU\u1ef8 JPY C\xd3 TH\u1ec2 MUA",3,"ngModel","ngModelOptions","ngModelChange"],["matInput","","placeholder","T\u1ed4NG QU\u1ef8 JPY C\xd3 TH\u1ec2 B\xc1N",3,"ngModel","ngModelOptions","ngModelChange"],["matInput","","placeholder","T\u1ed5ng Giao D\u1ecbch",3,"ngModel","ngModelOptions","ngModelChange"],[1,"text-center","space-x-2"],["mat-raised-button","","color","primary",3,"click"],[1,"material-icons"]],template:function(n,i){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"div",10)(11,"div",11)(12,"mat-form-field",12)(13,"mat-label"),t._uU(14,"Gi\xe1 B\xe1n"),t.qZA(),t.TgZ(15,"input",13),t.NdJ("ngModelChange",function(l){return i.Config.Sellprice=l}),t.qZA(),t.TgZ(16,"mat-hint")(17,"span",14),t._uU(18),t.ALo(19,"number"),t.qZA()()(),t.TgZ(20,"mat-form-field",12)(21,"mat-label"),t._uU(22,"Gi\xe1 Mua"),t.qZA(),t.TgZ(23,"input",13),t.NdJ("ngModelChange",function(l){return i.Config.Buyprice=l}),t.qZA(),t.TgZ(24,"mat-hint")(25,"span",14),t._uU(26),t.ALo(27,"number"),t.qZA()()(),t.TgZ(28,"mat-form-field",12)(29,"mat-label"),t._uU(30,"Ph\xed B\xe1n"),t.qZA(),t.TgZ(31,"input",13),t.NdJ("ngModelChange",function(l){return i.Config.SellFee=l}),t.qZA(),t.TgZ(32,"span",15),t._uU(33,"%"),t.qZA()(),t.TgZ(34,"mat-form-field",12)(35,"mat-label"),t._uU(36,"Ph\xed Mua"),t.qZA(),t.TgZ(37,"input",13),t.NdJ("ngModelChange",function(l){return i.Config.BuyFee=l}),t.qZA(),t.TgZ(38,"span",15),t._uU(39,"%"),t.qZA()()(),t.TgZ(40,"div",11)(41,"mat-form-field",12)(42,"mat-label"),t._uU(43,"T\u1ed4NG QU\u1ef8 JPY C\xd3 TH\u1ec2 MUA"),t.qZA(),t.TgZ(44,"input",16),t.NdJ("ngModelChange",function(l){return i.Config.Mintrade=l}),t.qZA(),t.TgZ(45,"mat-hint")(46,"span",14),t._uU(47),t.ALo(48,"number"),t.qZA()()(),t.TgZ(49,"mat-form-field",12)(50,"mat-label"),t._uU(51,"T\u1ed4NG QU\u1ef8 JPY C\xd3 TH\u1ec2 B\xc1N"),t.qZA(),t.TgZ(52,"input",17),t.NdJ("ngModelChange",function(l){return i.Config.Maxtrade=l}),t.qZA(),t.TgZ(53,"mat-hint")(54,"span",14),t._uU(55),t.ALo(56,"number"),t.qZA()()(),t.TgZ(57,"mat-form-field",12)(58,"mat-label"),t._uU(59,"T\u1ed5ng Giao D\u1ecbch"),t.qZA(),t.TgZ(60,"input",18),t.NdJ("ngModelChange",function(l){return i.Config.Totaltrade=l}),t.qZA(),t.TgZ(61,"mat-hint")(62,"span",14),t._uU(63),t.ALo(64,"number"),t.qZA()()()()(),t.TgZ(65,"div",19)(66,"a",20),t.NdJ("click",function(){return i.Update(i.Config)}),t._uU(67,"C\u1eadp Nh\u1eadt"),t.qZA(),t.TgZ(68,"a",20),t.NdJ("click",function(){return i.LoadInit()}),t.TgZ(69,"span",21),t._uU(70," file_upload "),t.qZA(),t.TgZ(71,"span"),t._uU(72," D\u1eef Li\u1ec7u Demo "),t.qZA()()()()()()()()()()()()()),2&n&&(t.xp6(15),t.Q6J("ngModel",i.Config.Sellprice)("ngModelOptions",t.DdM(34,d)),t.xp6(3),t.hij("",t.xi3(19,19,i.Config.Sellprice,"1.0-0")||"0","\u0111"),t.xp6(5),t.Q6J("ngModel",i.Config.Buyprice)("ngModelOptions",t.DdM(35,d)),t.xp6(3),t.hij("",t.xi3(27,22,i.Config.Buyprice,"1.0-0")||"0","\u0111"),t.xp6(5),t.Q6J("ngModel",i.Config.SellFee)("ngModelOptions",t.DdM(36,d)),t.xp6(6),t.Q6J("ngModel",i.Config.BuyFee)("ngModelOptions",t.DdM(37,d)),t.xp6(7),t.Q6J("ngModel",i.Config.Mintrade)("ngModelOptions",t.DdM(38,d)),t.xp6(3),t.hij("",t.xi3(48,25,i.Config.Mintrade,"1.0-0")||"0","\u0111"),t.xp6(5),t.Q6J("ngModel",i.Config.Maxtrade)("ngModelOptions",t.DdM(39,d)),t.xp6(3),t.hij("",t.xi3(56,28,i.Config.Maxtrade,"1.0-0")||"0","\u0111"),t.xp6(5),t.Q6J("ngModel",i.Config.Totaltrade)("ngModelOptions",t.DdM(40,d)),t.xp6(3),t.hij("",t.xi3(64,31,i.Config.Totaltrade,"1.0-0")||"0","\u0111"))},dependencies:[M.zs,c.KE,c.bx,c.hX,c.R9,y.Nt,p.Fj,p.JJ,p.On,m.JJ]}),e})();var Y=r(8739),U=r(6308),s=r(3626),G=r(8598),R=r(455),S=r(9650);function P(e,o){1&e&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Type")," "))}function K(e,o){1&e&&(t.ynx(0),t._uU(1),t.ALo(2,"translate"),t.BQk()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"SITE_BUY")," "))}function H(e,o){1&e&&(t._uU(0),t.ALo(1,"translate")),2&e&&t.hij(" ",t.lcZ(1,1,"SITE_SELL")," ")}function X(e,o){if(1&e&&(t.TgZ(0,"td",33),t.YNc(1,K,3,3,"ng-container",34),t.YNc(2,H,2,3,"ng-template",null,35,t.W1O),t.qZA()),2&e){const n=o.$implicit,i=t.MAs(3);t.xp6(1),t.Q6J("ngIf",1==n.Type)("ngIfElse",i)}}function z(e,o){1&e&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Quantity_In")," "))}function W(e,o){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,n.QuantityIn,"1.0-0"),"\u0111 ")}}function V(e,o){1&e&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Fee")," "))}function tt(e,o){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,n.Fee,"1.0-0"),"\u0111 ")}}function nt(e,o){1&e&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Quantity_Out")," "))}function et(e,o){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,n.QuantityOut,"1.0-0"),"\u0111 ")}}function it(e,o){1&e&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij("",t.lcZ(2,1,"Company_Account1")," "))}function ot(e,o){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.CompanyAccount1," ")}}function at(e,o){1&e&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Company_Account1")," "))}function lt(e,o){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.CompanyAccount2," ")}}function rt(e,o){1&e&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Custom_Account1")," "))}function ut(e,o){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.CustomAccount1," ")}}function st(e,o){1&e&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Custom_Account2")," "))}function ct(e,o){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.CustomAccount2," ")}}function pt(e,o){1&e&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Email")," "))}function gt(e,o){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.Email," ")}}function dt(e,o){1&e&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Content")," "))}function mt(e,o){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.Content," ")}}function ht(e,o){1&e&&(t.TgZ(0,"th",32),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Note")," "))}function ft(e,o){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.Note," ")}}function _t(e,o){1&e&&(t.TgZ(0,"th",32),t._uU(1," Tr\u1ea1ng Th\xe1i "),t.qZA())}function Ct(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"td",33)(1,"mat-slide-toggle",36),t.NdJ("change",function(){const l=t.CHM(n).$implicit,u=t.oxw();return t.KtG(u.UpdateTT(l))}),t._uU(2),t.qZA()()}if(2&e){const n=o.$implicit;t.xp6(2),t.hij(" ",0==n.Status?"Waiting":"Done"," ")}}function Tt(e,o){1&e&&t._UZ(0,"tr",37)}function xt(e,o){1&e&&t._UZ(0,"tr",38),2&e&&t.Tol(1==o.$implicit.Type?"!bg-red-200 ":"!bg-green-200")}function Zt(e,o){if(1&e&&(t.TgZ(0,"tr",39)(1,"td",40),t._uU(2),t.qZA()()),2&e){t.oxw();const n=t.MAs(13);t.xp6(2),t.hij('No data matching the filter "',n.value,'"')}}const At=function(){return[5,10,25,100]};let vt=(()=>{class e{constructor(n,i,a){this._LocalStorageService=n,this._ExchangeService=i,this._NotifierService=a,this.data=[],this.displayedColumns=["Type","QuantityIn","Fee","QuantityOut","CompanyAccount1","CompanyAccount2","CustomAccount1","CustomAccount2","Email","Content","Note","Status"],this._ExchangeService.getAll().subscribe(l=>{this.dataSource=new s.by(l),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort})}ngOnInit(){}applyFilter(n){this.dataSource.filter=n.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}UpdateTT(n){n.Status=!n.Status,this._ExchangeService.updateExchange(n).subscribe(i=>this._NotifierService.notify("success","Update Success"))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(E.n),t.Y36(G.O),t.Y36(v.lG))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-transaction"]],viewQuery:function(n,i){if(1&n&&(t.Gf(Y.NW,5),t.Gf(U.YE,5)),2&n){let a;t.iGM(a=t.CRH())&&(i.paginator=a.first),t.iGM(a=t.CRH())&&(i.sort=a.first)}},decls:59,vars:11,consts:[[1,"h-full","gradient-form","bg-gray-200","md:h-screen"],[1,"container","py-12","px-6","h-full","m-auto"],[1,"flex","justify-center","items-center","flex-wrap","h-full","g-6","text-gray-800"],[1,"w-full","h-full"],[1,"block","bg-white","shadow-lg","rounded-lg"],[1,"lg:flex","lg:flex-wrap","g-0"],[1,"flex","flex-col","justify-center","space-y-4","lg:w-full","px-4","md:px-0"],[1,"flex","flex-col","w-full","p-4","rounded","shadow-lg","bg-white"],["appearance","outline",1,"w-full","text-xs"],["matInput","",1,"w-full",3,"placeholder","keyup"],["input",""],["matPrefix","",1,"material-icons","mr-2"],[1,"mat-elevation-z8","w-full","overflow-auto"],["mat-table","","matSort","",1,"w-full",3,"dataSource"],["matColumnDef","Type"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","QuantityIn"],["matColumnDef","Fee"],["matColumnDef","QuantityOut"],["matColumnDef","CompanyAccount1"],["matColumnDef","CompanyAccount2"],["matColumnDef","CustomAccount1"],["matColumnDef","CustomAccount2"],["matColumnDef","Email"],["matColumnDef","Content"],["matColumnDef","Note"],["matColumnDef","Status"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"class",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[4,"ngIf","ngIfElse"],["elseTemplate",""],["color","primary",1,"text-xs",3,"change"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(n,i){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"mat-form-field",8)(9,"mat-label"),t._uU(10),t.ALo(11,"translate"),t.qZA(),t.TgZ(12,"input",9,10),t.NdJ("keyup",function(l){return i.applyFilter(l)}),t.ALo(14,"translate"),t.qZA(),t.TgZ(15,"span",11),t._uU(16,"search"),t.qZA()(),t.TgZ(17,"div",12)(18,"table",13),t.ynx(19,14),t.YNc(20,P,3,3,"th",15),t.YNc(21,X,4,2,"td",16),t.BQk(),t.ynx(22,17),t.YNc(23,z,3,3,"th",15),t.YNc(24,W,3,4,"td",16),t.BQk(),t.ynx(25,18),t.YNc(26,V,3,3,"th",15),t.YNc(27,tt,3,4,"td",16),t.BQk(),t.ynx(28,19),t.YNc(29,nt,3,3,"th",15),t.YNc(30,et,3,4,"td",16),t.BQk(),t.ynx(31,20),t.YNc(32,it,3,3,"th",15),t.YNc(33,ot,2,1,"td",16),t.BQk(),t.ynx(34,21),t.YNc(35,at,3,3,"th",15),t.YNc(36,lt,2,1,"td",16),t.BQk(),t.ynx(37,22),t.YNc(38,rt,3,3,"th",15),t.YNc(39,ut,2,1,"td",16),t.BQk(),t.ynx(40,23),t.YNc(41,st,3,3,"th",15),t.YNc(42,ct,2,1,"td",16),t.BQk(),t.ynx(43,24),t.YNc(44,pt,3,3,"th",15),t.YNc(45,gt,2,1,"td",16),t.BQk(),t.ynx(46,25),t.YNc(47,dt,3,3,"th",15),t.YNc(48,mt,2,1,"td",16),t.BQk(),t.ynx(49,26),t.YNc(50,ht,3,3,"th",15),t.YNc(51,ft,2,1,"td",16),t.BQk(),t.ynx(52,27),t.YNc(53,_t,2,0,"th",15),t.YNc(54,Ct,3,1,"td",16),t.BQk(),t.YNc(55,Tt,1,0,"tr",28),t.YNc(56,xt,1,3,"tr",29),t.YNc(57,Zt,3,1,"tr",30),t.qZA(),t._UZ(58,"mat-paginator",31),t.qZA()()()()()()()()()),2&n&&(t.xp6(10),t.Oqu(t.lcZ(11,6,"Search")),t.xp6(2),t.s9C("placeholder",t.lcZ(14,8,"Search")),t.xp6(6),t.Q6J("dataSource",i.dataSource),t.xp6(37),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(10,At)))},dependencies:[m.O5,c.KE,c.hX,c.qo,y.Nt,Y.NW,R.Rr,U.YE,U.nU,s.BZ,s.fO,s.as,s.w1,s.Dz,s.nj,s.ge,s.ev,s.XQ,s.Gk,s.Ee,m.JJ,S.X$]}),e})();var yt=r(1589);let Nt=(()=>{class e{constructor(n){this._httpClient=n,this.APIURL=D.N.APIURL,this._lang=new x.X(null),this._langs=new x.X(null)}get langs$(){return this._langs.asObservable()}get lang$(){return this._lang.asObservable()}getByid(n){return this._httpClient.get(`${this.APIURL}/demo_lang/id`).pipe((0,h.b)(i=>{this._lang.next(i)}))}getByslug(n){return this._httpClient.get(`${this.APIURL}/demo_lang/slug/${n}`).pipe((0,h.b)(i=>{this._lang.next(i)}))}getAll(){return this._httpClient.get(`${this.APIURL}/demo_lang`).pipe((0,h.b)(n=>(this._langs.next(n),n)))}createLang(n){return console.log(n),this._httpClient.post(`${this.APIURL}/demo_lang`,n).pipe((0,f.U)(i=>(this._langs.next(i),console.log(i),i)))}updateLang(n){return this.langs$.pipe((0,Z.q)(1),(0,A.w)(i=>this._httpClient.patch(`${this.APIURL}/demo_lang/${n.id}`,n).pipe((0,f.U)(a=>{const l=i.findIndex(u=>u.id===a.id);return i[l]=a,this._langs.next(i),a}))))}deleteLang(n){return this.langs$.pipe((0,Z.q)(1),(0,A.w)(i=>this._httpClient.delete(`${this.APIURL}/demo_lang/${n.id}`).pipe((0,f.U)(a=>{const l=i.filter(u=>u.id!=n.id);return this._langs.next(l),a}))))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(N.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var q=r(3848);function Mt(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",9)(1,"mat-form-field",10)(2,"mat-label"),t._uU(3),t.qZA(),t.TgZ(4,"input",11),t.NdJ("change",function(a){const u=t.CHM(n).$implicit,g=t.oxw().$implicit,C=t.oxw();return t.KtG(C.Change(a,C.translate,g,u))}),t.qZA()()()}if(2&e){const n=o.$implicit,i=t.oxw().$implicit,a=t.oxw();t.xp6(3),t.Oqu(n.key_name),t.xp6(1),t.Q6J("value",a.GetTranslate(a.translate,i,n))("placeholder",a.GetTranslate(a.translate,i,n))}}function wt(e,o){if(1&e&&(t.TgZ(0,"mat-tab",6)(1,"div",7),t.YNc(2,Mt,5,3,"div",8),t.qZA()()),2&e){const n=o.$implicit,i=t.oxw();t.s9C("label",n.name),t.xp6(2),t.Q6J("ngForOf",i.keys)}}const Ut=function(){return{standalone:!0}};let St=(()=>{class e{constructor(n,i){this._LangService=n,this._NotifierService=i,this.Data={},this.lang=[],this.keys=[],this.translate=[]}ngOnInit(){this.NewKey="",this._LangService.getAll().subscribe(n=>{this.Data=n,console.log(n),this.lang=this.Data[0].lang,this.keys=this.Data[0].keys,this.translate=this.Data[0].translate})}Change(n,i,a,l){const u=i.find(g=>g.language_id===a.id&&g.key_id===l.key_id);if(u){const g=i.map(C=>C.translation_id===u.translation_id?{...C,translation_text:n.target.value}:C);this.Data[0].translate=g,this._LangService.updateLang(this.Data[0]).subscribe(()=>this._NotifierService.notify("success","C\u1eadp Nh\u1eadt Th\xe0nh C\xf4ng"))}else this.Data[0].translate.push({translation_id:i.length+1,language_id:a.id,key_id:l.key_id,translation_text:n.target.value}),this._LangService.updateLang(this.Data[0]).subscribe(()=>this._NotifierService.notify("success","C\u1eadp Nh\u1eadt Th\xe0nh C\xf4ng"))}createKey(n){if(this.NewKey){const i={};i.key_id=this.keys.length+1,i.key_name=n,this.Data[0].keys.push(i),this._LangService.updateLang(this.Data[0]).subscribe(()=>this.ngOnInit())}}GetTranslate(n,i,a){const l=n.find(g=>g.language_id===i.id&&g.key_id===a.key_id);return l?l.translation_text:""}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(Nt),t.Y36(v.lG))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ngonngu"]],decls:10,vars:5,consts:[[1,"flex","flex-row","space-x-4","p-3"],["appearance","outline"],["type","text","matInput","",1,"px-3","py-2","border","border-gray-200","rounded",3,"ngModel","ngModelOptions","placeholder","keydown.enter","ngModelChange"],["mat-raised-button","",3,"click"],["mat-stretch-tabs","false","mat-align-tabs","center"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"grid","grid-cols-4"],["class","p-4",4,"ngFor","ngForOf"],[1,"p-4"],["appearance","outline",1,"w-full","items-center"],["type","text","matInput","",1,"w-full","px-3","py-2","border","border-gray-200","rounded",3,"value","placeholder","change"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"mat-form-field",1)(2,"mat-label"),t._uU(3,"Ti\xeau \u0110\u1ec1"),t.qZA(),t.TgZ(4,"input",2),t.NdJ("keydown.enter",function(){return i.createKey(i.NewKey)})("ngModelChange",function(l){return i.NewKey=l}),t.qZA()(),t.TgZ(5,"div")(6,"button",3),t.NdJ("click",function(){return i.createKey(i.NewKey)}),t._uU(7,"Th\xeam Key"),t.qZA()()(),t.TgZ(8,"mat-tab-group",4),t.YNc(9,wt,3,2,"mat-tab",5),t.qZA()),2&n&&(t.xp6(4),t.Q6J("ngModel",i.NewKey)("ngModelOptions",t.DdM(4,Ut))("placeholder","T\xecm ki\u1ebfm b\xe0i vi\u1ebft"),t.xp6(5),t.Q6J("ngForOf",i.lang))},dependencies:[m.sg,M.lW,c.KE,c.hX,y.Nt,q.SP,q.uX,p.Fj,p.JJ,p.On]}),e})(),bt=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-noidung"]],decls:2,vars:0,template:function(n,i){1&n&&(t.TgZ(0,"p"),t._uU(1," noidung works!\n"),t.qZA())}}),e})(),Dt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.ez,j.q,p.u5,p.UX,S.aw.forRoot({defaultLanguage:"en",loader:{provide:S.Zw,useFactory:yt.g,deps:[N.eN]}}),_.Bz.forChild([{path:"",redirectTo:"cauhinh",pathMatch:"full"},{path:"",component:$,children:[{path:"cauhinh",component:k},{path:"transaction",component:vt},{path:"ngonngu",component:St},{path:"noidung",component:bt}]}])]}),e})()}}]);