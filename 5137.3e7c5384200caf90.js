"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[5137],{5137:(b,l,r)=>{r.r(l),r.d(l,{ItemsModule:()=>f});var i=r(6895),c=r(7905),t=r(1571),d=r(529);const u={headers:new d.WM({"Content-Type":"application/json"})};let p=(()=>{class e{constructor(n){this.http=n}getItems(n){return this.http.get(n,u)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(d.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function m(e,o){1&e&&(t.TgZ(0,"div")(1,"div",13)(2,"span",14),t._uU(3,"Loading..."),t.qZA()(),t.TgZ(4,"div",15)(5,"span",14),t._uU(6,"Loading..."),t.qZA()(),t.TgZ(7,"div",16)(8,"span",14),t._uU(9,"Loading..."),t.qZA()(),t.TgZ(10,"div",17)(11,"span",14),t._uU(12,"Loading..."),t.qZA()(),t.TgZ(13,"div",18)(14,"span",14),t._uU(15,"Loading..."),t.qZA()(),t.TgZ(16,"div",19)(17,"span",14),t._uU(18,"Loading..."),t.qZA()(),t.TgZ(19,"div",20)(20,"span",14),t._uU(21,"Loading..."),t.qZA()()())}function g(e,o){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA()()),2&e){const n=o.$implicit;t.xp6(2),t.Oqu(n.name),t.xp6(2),t.Oqu(n.username),t.xp6(2),t.Oqu(n.email)}}function h(e,o){if(1&e&&(t.TgZ(0,"div",21)(1,"table",22)(2,"thead")(3,"tr")(4,"th",23),t._uU(5,"name"),t.qZA(),t.TgZ(6,"th",23),t._uU(7,"username"),t.qZA(),t.TgZ(8,"th",23),t._uU(9,"email"),t.qZA()()(),t.TgZ(10,"tbody"),t.YNc(11,g,7,3,"tr",24),t.qZA()()()),2&e){const n=t.oxw();t.xp6(11),t.Q6J("ngForOf",n.items)}}const v=[{path:"",component:(()=>{class e{constructor(n,s,a){this.itemsService=n,this.platformId=s,this.appId=a,this.loaded=!1}ngOnInit(){this.getUsers()}getUsers(){this.itemsService.getItems("https://jsonplaceholder.typicode.com/users").subscribe(n=>{const s=(0,i.NF)(this.platformId)?"in the browser":"on the server";console.log(`getUsers : Running ${s} with appId=${this.appId}`),this.loaded=!0,this.items=n})}resetUsers(){this.items=null,this.loaded=!0}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p),t.Y36(t.Lbi),t.Y36(t.AFp))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-items"]],decls:19,vars:2,consts:[[1,"container","py-5"],[1,"row","pb-4"],[1,"col-12","col-sm-12","col-md-3","col-lg-3","col-xl-3"],[1,"card",2,"width","18rem"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["type","button",1,"btn","btn-primary","mr-4",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],[4,"ngIf"],[1,"col-12","col-sm-12","col-md-8","col-lg-8","col-xl-8"],[1,"row"],["class","table-responsive httpclient-table blue-gradient",4,"ngIf"],["role","status",1,"spinner-grow","text-primary"],[1,"sr-only"],["role","status",1,"spinner-grow","text-secondary"],["role","status",1,"spinner-grow","text-success"],["role","status",1,"spinner-grow","text-danger"],["role","status",1,"spinner-grow","text-warning"],["role","status",1,"spinner-grow","text-info"],["role","status",1,"spinner-grow","text-dark"],[1,"table-responsive","httpclient-table","blue-gradient"],[1,"table","table-hover","table-striped","table-responsive-md"],["scope","col"],[4,"ngFor","ngForOf"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",1)(4,"div",3)(5,"div",4)(6,"h5",5),t._uU(7,"Feature : HttpClient"),t.qZA(),t._UZ(8,"hr"),t.TgZ(9,"p",6),t._uU(10,"Use HtppClient"),t.qZA(),t.TgZ(11,"button",7),t.NdJ("click",function(){return s.getUsers()}),t._uU(12,"Get"),t.qZA(),t.TgZ(13,"button",8),t.NdJ("click",function(){return s.resetUsers()}),t._uU(14,"Reset"),t.qZA()()(),t.YNc(15,m,22,0,"div",9),t.qZA()(),t.TgZ(16,"div",10)(17,"div",11),t.YNc(18,h,12,1,"div",12),t.qZA()()()()),2&n&&(t.xp6(15),t.Q6J("ngIf",!s.loaded),t.xp6(3),t.Q6J("ngIf",s.loaded))},dependencies:[i.sg,i.O5],styles:[".httpclient-table[_ngcontent-%COMP%]{border-radius:10px}.httpclient-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{color:#fff}.httpclient-table.blue-gradient[_ngcontent-%COMP%]{background:linear-gradient(40deg,#45cafc,#5664bd)!important}"]}),e})()}];let Z=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(v),c.Bz]}),e})(),f=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[p],imports:[i.ez,Z]}),e})()}}]);