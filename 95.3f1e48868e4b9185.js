"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[95],{9095:(O,h,n)=>{n.r(h),n.d(h,{BuyerModule:()=>b});var p=n(6895),f=n(8598),x=n(3559),y=n(1162),m=n(6096),e=n(4650),v=n(5556),B=n(7009),C=n(7789),g=n(9116),d=n(8255),l=n(4006),c=n(9650);const T=function(){return["/buyer"]},Z=function(){return["/seller"]},r=function(){return{standalone:!0}};let M=(()=>{class u{constructor(o,t,a,i,w,U,J){this._LocalStorageService=o,this._snackBar=t,this._ExchangeService=a,this._ConfigService=i,this._NotifierService=w,this._TelegramService=U,this.router=J,this.BuyData={QuantityIn:0,QuantityOut:0,Fee:0,TransHash:"",Type:1,Status:0},this.Config={}}openSnackBar(o,t){this._snackBar.open(o,t,{duration:1e3})}ngOnInit(){this._ConfigService.getAll().subscribe(o=>{this.Config=o[0],console.log(this.Config),this.BuyData.Fee=this.Config.BuyFee})}CreateBuy(o){o.Code=(0,y.d)(11),this._ExchangeService.createExchange(o).subscribe(t=>{this._TelegramService.createTelegram(`C\xf3 1 giao d\u1ecbch MUA m\u1edbi M\xe3 \u0111\u01a1n  ${t.Code}`).subscribe(),this._NotifierService.notify("success","Create Success"),this.router.navigate(["transfer",t.id])})}OnChange(){this.BuyData.QuantityOut=(this.BuyData.QuantityIn*this.Config.Buyprice*(1-this.BuyData.Fee/100)).toFixed()}}return u.\u0275fac=function(o){return new(o||u)(e.Y36(v.n),e.Y36(B.ux),e.Y36(f.O),e.Y36(x.E),e.Y36(C.lG),e.Y36(m.J),e.Y36(g.F0))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-buyer"]],decls:70,vars:31,consts:[[1,"max-w-3xl","flex","flex-col","space-y-4","py-12","px-6","h-full","m-auto"],[1,"flex","flex-row","space-x-4","justify-center"],[1,"p-4","rounded","text-white","bg-green-500",3,"routerLink"],[1,"p-4","rounded","text-white","bg-red-500",3,"routerLink"],[1,"flex","flex-col","space-y-4","bg-[#441E5B]","rounded","pb-2","p-8"],[1,"flex","flex-row","space-x-12","justify-between"],[1,"w-full","flex","flex-col"],["for","first_name",1,"block","mb-2","text-white"],["type","text",1,"w-full","p-3","bg-[#291038]","text-white","rounded",3,"ngModel","ngModelOptions","change","ngModelChange"],[1,"text-white","font-bold"],[1,"w-full"],[1,"block","mb-2","font-medium","text-white"],["type","text",1,"w-full","p-3","bg-[#291038]","text-white","rounded",3,"ngModel","ngModelOptions","ngModelChange"],[1,"flex","flex-row","justify-between","rounded","border","border-[#eab308]","mx-4","px-8","p-4"],[1,"text-white","italic","font-bold"],[1,"text-yellow-500","font-bold","text-xl"],[1,"text-white"],[1,"flex","flex-col","space-y-1"],["for","message",1,"block","mb-2","text-sm","font-medium","text-white"],["rows","3",1,"bg-[#291038]","text-white","rounded",3,"ngModel","ngModelOptions","ngModelChange"],[1,"flex","flex-row","justify-center","px-4"],["type","button",1,"text-white","bg-green-500","p-2","rounded",3,"click"],[1,"flex","flex-col","p-2","text-white","italic"],[1,"flex","flex-col","space-y-3","bg-[#441E5B]","rounded","p-8"],[1,"text-white","ml-4"],[1,"text-white","flex","flex-row","space-x-2","items-center"],[1,"!text-white","flex","flex-row","items-center",3,"matMenuTriggerFor"],[1,"material-icons"],["menu","matMenu"],["mat-menu-item",""],[1,"text-white","flex","flex-row","space-x-3","items-center"],["type","text",1,"w-1/2","p-3","bg-[#291038]","text-white","rounded",3,"ngModel","ngModelOptions","ngModelChange"]],template:function(o,t){if(1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3,"Mua Ngay"),e.qZA(),e.TgZ(4,"div",3),e._uU(5,"B\xe1n Ngay"),e.qZA()(),e.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),e._uU(10),e.ALo(11,"translate"),e.qZA(),e.TgZ(12,"input",8),e.NdJ("change",function(){return t.OnChange()})("ngModelChange",function(i){return t.BuyData.QuantityIn=i}),e.qZA(),e.TgZ(13,"span",9),e._uU(14),e.ALo(15,"translate"),e.qZA()(),e.TgZ(16,"div",10)(17,"label",11),e._uU(18,"*STK PiBank"),e.qZA(),e.TgZ(19,"input",12),e.NdJ("ngModelChange",function(i){return t.BuyData.CustomAccount1=i}),e.qZA()()(),e.TgZ(20,"div",5)(21,"div",10)(22,"label",11),e._uU(23,"*Email"),e.qZA(),e.TgZ(24,"input",12),e.NdJ("ngModelChange",function(i){return t.BuyData.Email=i}),e.qZA()(),e._UZ(25,"div",10),e.qZA(),e.TgZ(26,"div",13)(27,"div",14),e._uU(28,"T\u1ed5ng Gi\xe1 Tr\u1ecb Thanh To\xe1n : "),e.qZA(),e.TgZ(29,"div",15),e._uU(30),e.ALo(31,"number"),e.TgZ(32,"span",16),e._uU(33,"usdt"),e.qZA()()(),e.TgZ(34,"div",17)(35,"label",18),e._uU(36,"N\u1ed9i Dung Giao D\u1ecbch :"),e.qZA(),e.TgZ(37,"textarea",19),e.NdJ("ngModelChange",function(i){return t.BuyData.Note=i}),e.qZA()(),e.TgZ(38,"div",20)(39,"button",21),e.NdJ("click",function(){return t.CreateBuy(t.BuyData)}),e._uU(40,"X\xe1c Nh\u1eadn Giao D\u1ecbch"),e.qZA()(),e.TgZ(41,"div",22),e._uU(42," Ho\xe0n T\u1ea5t giao d\u1ecbch trong v\xf2ng 15 ph\xfat ho\u1eb7c \u0111\u01b0\u1ee3c ho\xe0n ti\u1ec1n "),e.qZA()(),e.TgZ(43,"div",23)(44,"div",24)(45,"span"),e._uU(46,"H\u01b0\u1edbng D\u1eabn Thanh To\xe1n"),e.qZA()(),e.TgZ(47,"div",16)(48,"span"),e._uU(49,"- Qu\xfd KH h\xe3y chuy\u1ec3n s\u1ed1 ti\u1ec1n 123usdt v\xe0o v\xed c\xf4ng ty theo \u0111\u1ecba ch\u1ec9 sau."),e.qZA()(),e.TgZ(50,"div",25)(51,"span"),e._uU(52,"- \u0110\u1ecba ch\u1ec9 v\xed PiBank c\u1ee7a C\xf4ng Ty: "),e.qZA(),e.TgZ(53,"div",26)(54,"span"),e._uU(55,"ETH"),e.qZA(),e.TgZ(56,"span",27),e._uU(57," expand_circle_down "),e.qZA()(),e.TgZ(58,"mat-menu",null,28)(60,"button",29),e._uU(61,"ETH"),e.qZA(),e.TgZ(62,"button",29),e._uU(63,"BSC"),e.qZA()(),e.TgZ(64,"span"),e._uU(65,"xxxxx xxx\xe1ddfsgsdf "),e.qZA()(),e.TgZ(66,"div",30)(67,"strong"),e._uU(68,"*TRANSATION HASH"),e.qZA(),e.TgZ(69,"input",31),e.NdJ("ngModelChange",function(i){return t.BuyData.TransHash=i}),e.qZA()()()()),2&o){const a=e.MAs(59);e.xp6(2),e.Q6J("routerLink",e.DdM(24,T)),e.xp6(2),e.Q6J("routerLink",e.DdM(25,Z)),e.xp6(6),e.Oqu(e.lcZ(11,17,"So_luong")),e.xp6(2),e.Q6J("ngModel",t.BuyData.QuantityIn)("ngModelOptions",e.DdM(26,r)),e.xp6(2),e.AsE("",e.lcZ(15,19,"Fee")," ",t.BuyData.Fee," usdt"),e.xp6(5),e.Q6J("ngModel",t.BuyData.CustomAccount1)("ngModelOptions",e.DdM(27,r)),e.xp6(5),e.Q6J("ngModel",t.BuyData.Email)("ngModelOptions",e.DdM(28,r)),e.xp6(6),e.hij("",e.xi3(31,21,t.BuyData.QuantityOut,"1.0-0")||"0"," "),e.xp6(7),e.Q6J("ngModel",t.BuyData.Note)("ngModelOptions",e.DdM(29,r)),e.xp6(16),e.Q6J("matMenuTriggerFor",a),e.xp6(16),e.Q6J("ngModel",t.BuyData.TransHash)("ngModelOptions",e.DdM(30,r))}},dependencies:[d.VK,d.OP,d.p6,l.Fj,l.JJ,l.On,g.rH,p.JJ,c.X$]}),u})();var E=n(3949),A=n(5325),D=n(529);let b=(()=>{class u{}return u.\u0275fac=function(o){return new(o||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[p.ez,E.q,l.u5,c.aw.forRoot({defaultLanguage:"en",loader:{provide:c.Zw,useFactory:A.g,deps:[D.eN]}}),l.UX,g.Bz.forChild([{path:"",component:M}])]}),u})()}}]);