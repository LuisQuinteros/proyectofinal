"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[4623],{4623:(y,r,o)=>{o.r(r),o.d(r,{ShowsImagesModule:()=>J});var m=o(6895),c=o(7905),d=o(7507),e=o(1571),h=o(1481),g=o(2274),p=o(341),u=o(2329),f=o(7747);function v(n,a){if(1&n&&(e.TgZ(0,"div",2)(1,"div",3),e._UZ(2,"app-search-result",4),e.qZA()()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("searchField",t.searchField)("found",t.found)("creation",t.creation)("link",t.link)}}function w(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",2)(1,"div",5)(2,"app-pagination",6),e.NdJ("changePage",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.onChangePage(i))}),e.qZA(),e._UZ(3,"app-grid-images",7),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(2),e.Q6J("count",t.itemsCount)("page",t.itemsPage)("perPage",t.itemsPerPage),e.xp6(1),e.Q6J("items",t.items)("columns",t.columns)("link",t.link)}}const S=[{path:"",component:(()=>{class n extends d._{constructor(t,s,i){super(i),this.meta=t,this.titleService=s}initialize(){this.endpoint="shows",this.link="shows",this.placeholder="shows...",this.results="Shows",this.found="shows",this.creation="Show",this.loaded=!1,this.icon="fas fa-laptop",this.itemsCount=0,this.itemsPerPage=24,this.linkRoute="shows-images",this.columns=[{name:"Id",field:"id",align:"left",color:"black",font:""},{name:"Name",field:"name",align:"left",color:"text-primary",font:"bold"},{name:"Date",field:"releaseDate",align:"center",color:"text-primary",font:""}],super.initialize()}ngOnInit(){this.titleService.setTitle("New TV Shows : angular.ganatan"),this.meta.addTag({name:"angular.ganatan",content:"danny ganatan"}),this.meta.updateTag({name:"description",content:"All the new TV Shows"})}selectItem(t){this.router.navigate(["/crud/"+this.link,t])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.h_),e.Y36(h.Dx),e.Y36(e.zs3))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-shows"]],features:[e.qOj],decls:3,vars:7,consts:[[3,"searchField","itemsCount","icon","results","placeholder","search"],["class","row",4,"ngIf"],[1,"row"],[1,"col"],[3,"searchField","found","creation","link"],[1,"col","mt-4"],[3,"count","page","perPage","changePage"],[3,"items","columns","link"]],template:function(t,s){1&t&&(e.TgZ(0,"app-search-bar",0),e.NdJ("search",function(l){return s.onSearch(l)}),e.qZA(),e.YNc(1,v,3,4,"div",1),e.YNc(2,w,4,6,"div",1)),2&t&&(e.Q6J("searchField",s.searchField)("itemsCount",s.itemsCount)("icon",s.icon)("results",s.results)("placeholder",s.placeholder),e.xp6(1),e.Q6J("ngIf",s.loaded&&0===s.itemsCount),e.xp6(1),e.Q6J("ngIf",s.loaded))},dependencies:[m.O5,g.T,p.Q,u.N,f.B]}),n})()}];let I=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.Bz.forChild(S),c.Bz]}),n})();var C=o(7538),T=o(3226),P=o(7550),F=o(5199);let J=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.ez,I,C.E,T.u,P.B,F.p]}),n})()}}]);