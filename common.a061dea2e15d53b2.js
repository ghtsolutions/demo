"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[592],{3559:(u,l,e)=>{e.d(l,{E:()=>f});var c=e(1135),h=e(8505),i=e(4004),_=e(5698),r=e(3900),o=e(6497),a=e(4650),E=e(529);let f=(()=>{class s{constructor(t){this._httpClient=t,this.APIURL=o.N.APIURL,this._config=new c.X(null),this._configs=new c.X(null)}get configs$(){return this._configs.asObservable()}get config$(){return this._config.asObservable()}getByid(t){return this._httpClient.get(`${this.APIURL}/demo_config/id`).pipe((0,h.b)(n=>{this._config.next(n)}))}getAll(){return this._httpClient.get(`${this.APIURL}/demo_config`).pipe((0,h.b)(t=>(this._configs.next(t),t)))}createConfig(t){return console.log(t),this._httpClient.post(`${this.APIURL}/demo_config`,t).pipe((0,i.U)(n=>(this._configs.next(n),console.log(n),n)))}updateConfig(t){return this.configs$.pipe((0,_.q)(1),(0,r.w)(n=>this._httpClient.patch(`${this.APIURL}/demo_config/${t.id}`,t).pipe((0,i.U)(g=>{const d=n.findIndex(P=>P.id===g.id);return n[d]=g,this._configs.next(n),g}))))}deleteConfig(t){return this.configs$.pipe((0,_.q)(1),(0,r.w)(n=>this._httpClient.delete(`${this.APIURL}/demo_config/${t.id}`).pipe((0,i.U)(g=>{const d=n.filter(P=>P.id!=t.id);return this._configs.next(d),g}))))}}return s.\u0275fac=function(t){return new(t||s)(a.LFG(E.eN))},s.\u0275prov=a.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},5556:(u,l,e)=>{e.d(l,{n:()=>h});var c=e(4650);let h=(()=>{class i{constructor(){}setItem(r,o){localStorage.setItem(r,JSON.stringify(o))}getItem(r){const o=localStorage.getItem(r);return o?JSON.parse(o):null}removeItem(r){localStorage.removeItem(r)}clear(){localStorage.clear()}}return i.\u0275fac=function(r){return new(r||i)},i.\u0275prov=c.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},1162:(u,l,e)=>{function h(_){let r="";const o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=o.length;for(let E=0;E<_;E++)r+=o.charAt(Math.floor(Math.random()*a));return r}e.d(l,{dI:()=>h})},8598:(u,l,e)=>{e.d(l,{O:()=>f});var c=e(1135),h=e(8505),i=e(4004),_=e(5698),r=e(3900),o=e(6497),a=e(4650),E=e(529);let f=(()=>{class s{constructor(t){this._httpClient=t,this.APIURL=o.N.APIURL,this._exchange=new c.X(null),this._exchanges=new c.X(null)}get exchanges$(){return this._exchanges.asObservable()}get exchange$(){return this._exchange.asObservable()}getByid(t){return this._httpClient.get(`${this.APIURL}/demo_trans/${t}`).pipe((0,h.b)(n=>{this._exchange.next(n)}))}getAll(){return this._httpClient.get(`${this.APIURL}/demo_trans`).pipe((0,h.b)(t=>(this._exchanges.next(t),t)))}createExchange(t){return console.log(t),this._httpClient.post(`${this.APIURL}/demo_trans`,t).pipe((0,i.U)(n=>(this._exchanges.next(n),console.log(n),n)))}updateExchange(t){return this._httpClient.patch(`${this.APIURL}/demo_trans/${t.id}`,t).pipe((0,i.U)(n=>(this._exchange.next(n),n)))}deleteExchange(t){return this.exchanges$.pipe((0,_.q)(1),(0,r.w)(n=>this._httpClient.delete(`${this.APIURL}/demo_trans/${t.id}`).pipe((0,i.U)(g=>{const d=n.filter(P=>P.id!=t.id);return this._exchanges.next(d),g}))))}}return s.\u0275fac=function(t){return new(t||s)(a.LFG(E.eN))},s.\u0275prov=a.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);