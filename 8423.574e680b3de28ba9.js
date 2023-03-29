"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[8423],{8423:(A,s,r)=>{r.r(s),r.d(s,{AboutModule:()=>T});var l=r(6895),g=r(7905),t=r(1571);class u{constructor(){this.name="",this.title="",this.link=""}}var c=r(5163);function p(n,e){if(1&n){const a=t.EpF();t.TgZ(0,"figure")(1,"blockquote",35)(2,"p",36)(3,"strong"),t._uU(4),t.qZA()()(),t.TgZ(5,"figcaption")(6,"cite",36)(7,"a",37)(8,"i"),t._uU(9),t.qZA()()(),t.TgZ(10,"button",38),t.NdJ("click",function(){t.CHM(a);const i=t.oxw();return t.KtG(i.loadQuote())}),t._UZ(11,"i",39),t.qZA()()()}if(2&n){const a=t.oxw();t.xp6(4),t.Oqu(a.quote.title),t.xp6(3),t.s9C("href",a.quote.link,t.LSH),t.xp6(2),t.Oqu(a.quote.name)}}function h(n,e){if(1&n&&(t.TgZ(0,"h4",8),t._UZ(1,"i",40),t._uU(2),t.qZA()),2&n){const a=e.$implicit;t.xp6(2),t.Oqu(a.name)}}function m(n,e){if(1&n&&(t.TgZ(0,"a",42),t._UZ(1,"i",43),t.qZA()),2&n){const a=t.oxw().$implicit;t.s9C("href",a.englishTutorial,t.LSH)}}function d(n,e){if(1&n&&(t.TgZ(0,"a",42),t._UZ(1,"i",43),t.qZA()),2&n){const a=t.oxw().$implicit;t.s9C("href",a.frenchTutorial,t.LSH)}}function b(n,e){if(1&n&&(t.TgZ(0,"tr")(1,"td")(2,"h4",8),t._uU(3),t.qZA()(),t.TgZ(4,"td"),t.YNc(5,m,2,1,"a",41),t.qZA(),t.TgZ(6,"td"),t.YNc(7,d,2,1,"a",41),t.qZA()()),2&n){const a=e.$implicit;t.xp6(3),t.Oqu(a.name),t.xp6(2),t.Q6J("ngIf",null!==a.englishTutorial),t.xp6(2),t.Q6J("ngIf",null!==a.frenchTutorial)}}function f(n,e){if(1&n&&(t.TgZ(0,"h4",8),t._UZ(1,"i",44),t._uU(2),t.qZA()),2&n){const a=e.$implicit;t.xp6(2),t.hij("",a.name," ")}}function w(n,e){if(1&n&&(t.TgZ(0,"h4",8),t._UZ(1,"i",44),t._uU(2),t.qZA()),2&n){const a=e.$implicit;t.xp6(2),t.hij("",a.name," ")}}const Z=[{path:"",component:(()=>{class n{constructor(a,o){this.seoService=a,this.platformId=o,this.seoService.setMetaDescription("About content with meta"),this.id=0,this.quote=new u,this.dependencies={frontend:[{name:"Angular 15.2.4"},{name:"Angular CLI 15.2.4"},{name:"Angular Universal 15.2.0"},{name:"Bootstrap 5.2.3"},{name:"Font Awesome 6.4.0"}],backend:[{name:"Node.js 16.15.0"},{name:"Express 4.18.1"},{name:"pg-promise 10.10.2"}]},this.features={frontend:[{name:"Angular CLI",englishTutorial:"https://www.ganatan.com/tutorials/getting-started-with-angular",frenchTutorial:"https://www.ganatan.com/tutorials/demarrer-avec-angular"},{name:"Routing",englishTutorial:"https://www.ganatan.com/tutorials/routing-with-angular",frenchTutorial:"https://www.ganatan.com/tutorials/routing-avec-angular"},{name:"Lazy loading",englishTutorial:"https://www.ganatan.com/tutorials/lazy-loading-with-angular",frenchTutorial:"https://www.ganatan.com/tutorials/lazy-loading-avec-angular"},{name:"Bootstrap",englishTutorial:"https://www.ganatan.com/tutorials/bootstrap-with-angular",frenchTutorial:"https://www.ganatan.com/tutorials/bootstrap-avec-angular"},{name:"Server side Rendering",englishTutorial:"https://www.ganatan.com/tutorials/server-side-rendering-with-angular-universal",frenchTutorial:"https://www.ganatan.com/tutorials/server-side-rendering-avec-angular-universal"},{name:"HTTPClient",englishTutorial:"https://www.ganatan.com/tutorials/httpclient-with-angular",frenchTutorial:"https://www.ganatan.com/tutorials/httpclient-avec-angular"},{name:"Transfer State",englishTutorial:"https://www.ganatan.com/tutorials/transfer-state-with-angular",frenchTutorial:"https://www.ganatan.com/tutorials/transfer-state-avec-angular"},{name:"Progressive Web App",englishTutorial:"https://www.ganatan.com/tutorials/progressive-web-app-with-angular",frenchTutorial:"https://www.ganatan.com/tutorials/progressive-web-app-avec-angular"},{name:"Search Engine optimization",englishTutorial:"https://www.ganatan.com/tutorials/search-engine-optimization-with-angular",frenchTutorial:"https://www.ganatan.com/tutorials/search-engine-optimization-avec-angular"},{name:"Components",englishTutorial:"",frenchTutorial:"https://www.ganatan.com/tutorials/components-avec-angular"},{name:"Services",englishTutorial:"",frenchTutorial:"https://www.ganatan.com/tutorials/services-avec-angular"}],backend:[{name:"Local JSON"},{name:"RESTFull API"},{name:"CRUD API"},{name:"Database Creation"},{name:"Data Import"},{name:"Data Export"}]}}ngOnInit(){this.loadQuote(),this.seoService.setMetaDescription("Cette application a \xe9t\xe9 d\xe9velopp\xe9e avec Angular version 15.2.4 et bootstrap 5.2.3 Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)"),this.seoService.setMetaTitle("angular-starter Title : About Page")}loadQuote(){const a=[{name:"Lawrence of Arabia",title:"There is nothing in the desert and no man needs nothing",link:"https://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)"},{name:"Alien Prometheus",title:"Big things have small beginnings",link:"https://en.wikipedia.org/wiki/Prometheus_(2012_film)"},{name:"Blade Runner",title:"All those moments will be lost in time... like tears in rain... Time to die.",link:"https://en.wikipedia.org/wiki/Blade_Runner"}],o=a.length;let i=this.id;for(;this.id===i;)i=Math.floor(Math.random()*o);this.id=i,this.quote=a[i]}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(c.v),t.Y36(t.Lbi))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-about"]],decls:76,vars:5,consts:[[1,"py-5"],[1,"container"],[1,"row"],[1,"col-lg-4","col-md-12","pb-4"],[1,"card","nga-card-about","card-logo"],["src","./assets/params/images/about/ganatan-about.png","height","160","width","160","alt","logo Ganatan","title","logo Ganatan",1,""],[1,"card-body"],[1,"card-title","h5"],[1,"h6"],["type","button","href","https://github.com/ganatan","aria-label","Github ganatan",1,"nga-btn-about","nga-btn-github"],[1,"fab","fa-github"],["type","button","href","https://www.linkedin.com/in/dannyganatan/","aria-label","Linkedin ganatan",1,"nga-btn-about","nga-btn-linkedin"],[1,"fab","fa-linkedin-in"],["type","button","href","https://twitter.com/dannyganatan","aria-label","Twitter ganatan",1,"nga-btn-about","nga-btn-twitter"],[1,"fab","fa-twitter"],[1,"h6","text-primary","p-4"],[4,"ngIf"],[1,"col-lg-8","text-center"],[1,"col-lg-6","mb-2"],[1,"card","nga-card-about","p-4"],[1,"h5","mb-4","text-primary"],[1,"row","mb-2"],[1,"fas","fa-desktop","mb-2"],[1,"h5"],["class","h6",4,"ngFor","ngForOf"],[1,"row","ml-4"],[1,"col"],[1,"table-responsive"],[1,"table","table-hover","table-striped","table-bordered","table-responsive-md","table-sm"],["src","./assets/params/images/about/gb.png","alt","Tutoriel Anglais",1,"ms-2"],[1,"h6","font-weight-bold","text-center"],["src","./assets/params/images/about/fr.png","alt","Tutoriel Fran\xe7ais",1,"ms-2"],[4,"ngFor","ngForOf"],[1,"col-lg-6","col-md-12","mb-2"],[1,"fas","fa-laptop","mb-2"],[1,"blockquote"],[2,"font-size","1rem"],[3,"href"],["type","button",1,"ms-4","btn","nga-about-hint","btn-sm",3,"click"],["aria-hidden","true",1,"fas","fa-random"],[1,"fa","fa-square","fa-xs","text-primary","me-2"],["style","cursor: pointer",3,"href",4,"ngIf"],[2,"cursor","pointer",3,"href"],[1,"nga-tutorial","fas","fa-desktop"],["aria-hidden","true",1,"fa","fa-square","fa-xs","text-primary","me-2"]],template:function(a,o){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"section",4),t._UZ(5,"img",5),t.TgZ(6,"div",6)(7,"h1",7)(8,"strong"),t._uU(9,"danny Collodet"),t.qZA()(),t.TgZ(10,"h2",8),t._uU(11,"Web Developer Angular, Node.js"),t.qZA(),t.TgZ(12,"p"),t._uU(13,"dannyganatan@gmail.com"),t.qZA(),t.TgZ(14,"a",9),t._UZ(15,"i",10),t.qZA(),t.TgZ(16,"a",11),t._UZ(17,"i",12),t.qZA(),t.TgZ(18,"a",13),t._UZ(19,"i",14),t.qZA(),t._UZ(20,"hr"),t.TgZ(21,"h3",15),t._uU(22,"Updated 2022, 14 December"),t.qZA(),t.YNc(23,p,12,3,"figure",16),t.qZA()()(),t.TgZ(24,"div",17)(25,"div",2)(26,"div",18)(27,"div",19)(28,"h2",20)(29,"strong"),t._uU(30,"Front End"),t.qZA()(),t.TgZ(31,"div",21),t._UZ(32,"i",22),t.TgZ(33,"h3",23),t._uU(34,"Dependencies"),t.qZA()(),t.TgZ(35,"div",2),t.YNc(36,h,3,1,"h4",24),t.qZA(),t._UZ(37,"hr"),t.TgZ(38,"div",21),t._UZ(39,"i",22),t.TgZ(40,"h3",23),t._uU(41,"Features"),t.qZA()(),t.TgZ(42,"div",25)(43,"div",26)(44,"div",27)(45,"table",28)(46,"thead")(47,"tr")(48,"th",8),t._uU(49,"Name"),t.qZA(),t.TgZ(50,"th",8),t._uU(51,"Tutorial"),t._UZ(52,"img",29),t.qZA(),t.TgZ(53,"th",30),t._uU(54,"Tutoriel"),t._UZ(55,"img",31),t.qZA()()(),t.TgZ(56,"tbody"),t.YNc(57,b,8,3,"tr",32),t.qZA()()()()()()(),t.TgZ(58,"div",33)(59,"div",19)(60,"h2",20)(61,"strong"),t._uU(62,"Back End"),t.qZA()(),t.TgZ(63,"div",21),t._UZ(64,"i",34),t.TgZ(65,"h3",23),t._uU(66,"Dependencies"),t.qZA()(),t.TgZ(67,"div",2),t.YNc(68,f,3,1,"h4",24),t.qZA(),t._UZ(69,"hr"),t.TgZ(70,"div",21),t._UZ(71,"i",34),t.TgZ(72,"h3",23),t._uU(73,"Features"),t.qZA()(),t.TgZ(74,"div",25),t.YNc(75,w,3,1,"h4",24),t.qZA()()()()()()()()),2&a&&(t.xp6(23),t.Q6J("ngIf",o.quote),t.xp6(13),t.Q6J("ngForOf",o.dependencies.frontend),t.xp6(21),t.Q6J("ngForOf",o.features.frontend),t.xp6(11),t.Q6J("ngForOf",o.dependencies.backend),t.xp6(7),t.Q6J("ngForOf",o.features.backend))},dependencies:[l.sg,l.O5],styles:[".nga-btn-about[_ngcontent-%COMP%]{position:relative;z-index:1;display:inline-block;padding:0;margin:10px;overflow:hidden;vertical-align:middle;cursor:pointer;border-radius:50%;box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;transition:all .2s ease-in-out;width:47px;height:47px}.nga-btn-about[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.25rem;line-height:47px;display:inline-block;width:inherit;color:#fff;text-align:center}.nga-btn-about[_ngcontent-%COMP%]:hover{box-shadow:0 8px 17px #0003,0 6px 20px #00000030}.nga-btn-about[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:#000}.nga-card-about[_ngcontent-%COMP%]{box-shadow:0 2px 5px #00000029,0 2px 10px #0000001f}.nga-card-about.card-logo[_ngcontent-%COMP%]{margin-top:5rem;text-align:center}.nga-card-about.card-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:-5rem}hr[_ngcontent-%COMP%]{color:#0d6efd}.nga-about-hint[_ngcontent-%COMP%]{box-shadow:0 2px 5px #00000029,0 2px 10px #0000001f;border-radius:.125rem;border:1px solid #4285f4;color:#4285f4;background-color:transparent}.nga-about-hint[_ngcontent-%COMP%]:hover, .nga-about-hint[_ngcontent-%COMP%]:active, .nga-about-hint[_ngcontent-%COMP%]:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;color:#000}.nga-btn-github[_ngcontent-%COMP%]{background-color:#333}.nga-btn-linkedin[_ngcontent-%COMP%]{background-color:#0082ca}.nga-btn-twitter[_ngcontent-%COMP%]{background-color:#55acee}.nga-tutorial[_ngcontent-%COMP%]{color:#0d6efd}.nga-tutorial[_ngcontent-%COMP%]:hover{color:#000}"]}),n})()}];let _=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.Bz.forChild(Z),g.Bz]}),n})(),T=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,_]}),n})()}}]);