"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[1914],{2956:(x,v,s)=>{s.r(v),s.d(v,{ShowsFormModule:()=>i});var h=s(6895),a=s(433),m=s(7905),g=s(8433),e=s(1571);function Z(t,r){if(1&t&&e._UZ(0,"img",47),2&t){const o=e.oxw();e.s9C("src",o.form.value.image,e.LSH)}}const f=[{path:"",component:(()=>{class t extends g.i{constructor(o){super(o)}initialize(){this.endpoint="shows",this.titleForm="Show Form",this.icon="fas fa-laptop",super.initialize()}createForm(){this.form=this.fb.group({id:null,name:[null,[a.kI.required]],wikipediaLink:null,releaseDate:null,image:null,show:null,movie:null,fileName:null}),super.createForm()}resetForm(){this.item.id=null,this.item.name=null,this.item.wikipediaLink=null,this.item.fileName=null,this.item.image=null,this.item.show=!0,this.item.movie=!1,this.item.releaseDate=null,super.resetForm()}setFormValue(o){this.form.controls.id=o.id,this.form.controls.name=o.name,this.form.controls.wikipediaLink=o.wikipediaLink,this.form.controls.fileName=o.fileName,this.form.controls.image=o.image,this.form.controls.show=o.show,this.form.controls.movie=o.movie,this.form.controls.releaseDate=o.releaseDate,super.setFormValue(o)}get name(){return this.form.get("name")}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(e.zs3))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-shows-form"]],features:[e.qOj],decls:66,vars:3,consts:[[1,"col"],[1,"card","card-nga-form"],[1,"card-body"],[1,"row"],[1,"col-12","col-md-8","text-center","mb-4"],[1,"fas","fa-laptop","text-primary","me-1"],[1,"text-primary","fw-bold"],[1,"fas","fa-database","text-danger","ms-4","me-1"],[1,"text-danger","me-2"],[1,"col-12","col-md-4","text-center","mb-4"],["role","group","aria-label","",1,"btn-group"],["type","button",1,"btn","btn-nga-primary","btn-sm","btn-nga","me-2"],["aria-hidden","true",1,"fas","fa-plus","fa-lg"],["aria-hidden","true",1,"fas","fa-save","fa-lg"],["aria-hidden","true",1,"fas","fa-copy","fa-lg"],["aria-hidden","true",1,"fas","fa-trash-alt","fa-lg"],[1,"col-12","col-sm-12","col-md-8","col-lg-8","col-xl-8"],[1,"row","g-3",3,"formGroup"],[1,"col-md-2"],["for","id",1,"form-label"],["type","text","id","id","formControlName","id",1,"form-control"],[1,"col-md-10"],["for","name",1,"form-label"],["type","text","id","name","formControlName","name",1,"form-control"],[1,"col-8"],["for","fileName",1,"form-label"],["type","text","id","fileName","placeholder","","formControlName","fileName",1,"form-control"],[1,"col-4"],["for","releaseDate",1,"form-label"],["type","text","id","releaseDate","placeholder","","formControlName","releaseDate",1,"form-control"],[1,"col-md-12"],[1,"form-row"],[1,"form-group","col-md-12"],["for","wikipediaLink",1,"text-success"],[1,"input-group"],[1,"input-group-prepend"],["id","wikipediaLinkGroupPrepend",1,"input-group-text"],[3,"href"],[1,"text-success","fab","fa-wikipedia-w"],["type","text","formControlName","wikipediaLink","placeholder","","id","wikipediaLink","aria-describedby","wikipediaLinkGroupPrepend",1,"text-success","form-control"],[1,"form-check"],["type","checkbox","id","movie","formControlName","movie",1,"form-check-input"],["for","movie",1,"form-check-label"],["type","checkbox","id","show","formControlName","show",1,"form-check-input"],["for","show",1,"form-check-label"],[1,"col-12","col-sm-12","col-md-4","col-lg-4","col-xl-4","text-center"],["class","img-fluid shadow-lg rounded img-thumbnail",3,"src",4,"ngIf"],[1,"img-fluid","shadow-lg","rounded","img-thumbnail",3,"src"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"i",5),e.TgZ(6,"span",6),e._uU(7,"Movie"),e.qZA(),e._UZ(8,"i",7),e.TgZ(9,"span",8),e._uU(10,"DataSource :"),e.qZA(),e.TgZ(11,"span",8),e._uU(12,"LOCAL JSON (no crud)"),e.qZA()(),e.TgZ(13,"div",9)(14,"div",10)(15,"button",11),e._UZ(16,"i",12),e.qZA(),e.TgZ(17,"button",11),e._UZ(18,"i",13),e.qZA(),e.TgZ(19,"button",11),e._UZ(20,"i",14),e.qZA(),e.TgZ(21,"button",11),e._UZ(22,"i",15),e.qZA()()()(),e.TgZ(23,"div",3)(24,"div",16)(25,"form",17)(26,"div",18)(27,"label",19),e._uU(28,"Id"),e.qZA(),e._UZ(29,"input",20),e.qZA(),e.TgZ(30,"div",21)(31,"label",22),e._uU(32,"Name"),e.qZA(),e._UZ(33,"input",23),e.qZA(),e.TgZ(34,"div",24)(35,"label",25),e._uU(36,"File Name"),e.qZA(),e._UZ(37,"input",26),e.qZA(),e.TgZ(38,"div",27)(39,"label",28),e._uU(40,"Release Date"),e.qZA(),e._UZ(41,"input",29),e.qZA(),e.TgZ(42,"div",30)(43,"div",31)(44,"div",32)(45,"label",33),e._uU(46,"wikipedia"),e.qZA(),e.TgZ(47,"div",34)(48,"div",35)(49,"span",36)(50,"a",37),e._UZ(51,"i",38),e.qZA()()(),e._UZ(52,"input",39),e.qZA()()()(),e.TgZ(53,"div",18)(54,"div",40),e._UZ(55,"input",41),e.TgZ(56,"label",42),e._uU(57," Movie "),e.qZA()()(),e.TgZ(58,"div",18)(59,"div",40),e._UZ(60,"input",43),e.TgZ(61,"label",44),e._uU(62," Show "),e.qZA()()()()(),e.TgZ(63,"div",45)(64,"div",32),e.YNc(65,Z,1,1,"img",46),e.qZA()()()()()()),2&o&&(e.xp6(25),e.Q6J("formGroup",n.form),e.xp6(25),e.MGl("href","https://en.wikipedia.org/wiki/",n.form.value.wikipediaLink,"",e.LSH),e.xp6(15),e.Q6J("ngIf",null!==n.form.value.image))},dependencies:[h.O5,a._Y,a.Fj,a.Wl,a.JJ,a.JL,a.sg,a.u],styles:[".card-nga-form[_ngcontent-%COMP%]{display:block;background-color:#fffc;box-shadow:0 1px 3px #0000001f,0 1px 2px #0000003d;border-radius:2px;transition:all .2s ease-in-out;cursor:pointer}.card-nga-form[_ngcontent-%COMP%]:hover{box-shadow:0 10px 20px #00000030,0 6px 6px #0000003b;color:#0d6efd}.btn-nga-primary[_ngcontent-%COMP%]{border:2px solid #4285f4;color:#4285f4;background-color:transparent}"]}),t})()}];let w=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.Bz.forChild(f),m.Bz]}),t})(),i=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[h.ez,w,a.UX,a.u5]}),t})()},8568:(x,v,s)=>{s.d(v,{L:()=>b});var h=s(529),a=s(9646),m=s(262),g=s(4004),e=s(1571);const Z={headers:new h.WM({"Content-Type":"application/json"})};let b=(()=>{class f{constructor(i){this.http=i}filterJsonItem(i,t){let r=null;return i.map((o,n,l)=>{const u=parseInt(t,10);l[n].id===u&&(r=l[n])}),r}filterJsonItemsCount(i,t){let r=0;if(void 0!==t&&null!=t){const o=t.toString().toLowerCase();r=i.filter(l=>0===l.name.toLowerCase().indexOf(o)).length}else r=i.length;return{count:r}}filterJsonItems(i,t,r,o){let n;if(void 0!==t&&null!=t){const c=t.toString().toLowerCase();n=i.filter(d=>0===d.name.toLowerCase().indexOf(c))}else n=i;const l=r*(o-1),u=r*(o-1)+r-1,p=[];return n.map((c,d)=>{d>=l&&d<=u&&p.push(n[d])}),p}getItemsCount(i,t,r){let o="";void 0!==r&&""!==r&&null!==r&&(o="?q="+r);const n=(t+=i?"/count":".json")+o;let l;return l=i?this.http.get(n).pipe((0,m.K)(this.handleError("getItems",[]))):this.http.get(n).pipe((0,g.U)(u=>this.filterJsonItemsCount(u,r)),(0,m.K)(this.handleError("getItems",[]))),l}getItems(i,t,r,o,n){i||(t+=".json");let l="";if(void 0!==r||void 0!==o||void 0!==n){let d;d=0,0===o&&(o=1),void 0!==o&&(d=(o-1)*r),void 0!==n&&""!==n&&null!==n&&(l="?q="+n),l=""!==l?l+"&limit="+r+"&offset="+d:"?limit="+r+"&offset="+d}const u=t+l;let p;return p=i?this.http.get(u).pipe((0,m.K)(this.handleError("getItems",[]))):this.http.get(u).pipe((0,g.U)(c=>this.filterJsonItems(c,n,r,o)),(0,m.K)(this.handleError("getItems",[]))),p}getItem(i,t,r){i||(t+=".json");let o={};return void 0!==r&&(o=i?this.http.get(t+"/"+r).pipe((0,m.K)(this.handleError(`getItem id=${r}`))):this.http.get(t).pipe((0,g.U)(l=>this.filterJsonItem(l,r)),(0,m.K)(this.handleError("getItems",[])))),o}addItem(i,t){const r=JSON.stringify(t);return this.http.post(i,r,Z).pipe((0,m.K)(this.handleError("addItem")))}updateItem(i,t,r){return this.http.put(r+"/"+t,i,Z).pipe((0,m.K)(this.handleError("updateItem")))}deleteItem(i,t){return this.http.delete(i+"/"+t,Z).pipe((0,m.K)(this.handleError("deleteItem")))}handleError(i="operation",t){return r=>(console.error(`${i} failed: ${r.message}`),(0,a.of)(t))}}return f.\u0275fac=function(i){return new(i||f)(e.LFG(h.eN))},f.\u0275prov=e.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()}}]);