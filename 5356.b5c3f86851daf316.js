"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[5356],{5356:(b,m,l)=>{l.r(m),l.d(m,{ExerciceModule:()=>Z});var u=l(6895),t=l(433),s=l(7905),e=l(1571);let c=(()=>{class o{transform(n,...r){return JSON.stringify(n,null,2).replace(/ /g,"&nbsp;").replace(/\n/g,"<br/>")}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275pipe=e.Yjl({name:"prettyjson",type:o,pure:!0}),o})();const d=[{path:"",component:(()=>{class o{constructor(n){this.fb=n,this.name=new t.NI(""),this.email=new t.NI(""),this.job=new t.NI(""),this.comment=new t.NI(""),this.friend01=new t.NI(""),this.friend02=new t.NI(""),this.exampleForm2=new t.cw({name:new t.NI(""),email:new t.NI(""),job:new t.NI(""),comment:new t.NI("")}),this.exampleForm3=this.fb.group({name:[""],email:[""],job:[""],comment:[""],friends:this.fb.array([])}),this.onResetForm1(),this.onResetForm2(),this.onResetForm3()}onResetForm1(){this.name.setValue("Darth Vader"),this.email.setValue("darthvader@starwars.com"),this.job.setValue("Sith"),this.comment.setValue("Father of Luke Skywalker"),this.friend01.setValue("friend01"),this.friend02.setValue("friend02")}onSetValueForm1(){this.name.setValue("Anakin Skywalker"),this.email.setValue("anakinskywalker@starwars.com"),this.job.setValue("Jedi"),this.comment.setValue("Son of Shmi Skywalker")}onPatchValueForm2(){this.exampleForm2.patchValue({name:"Ben solo",email:"bensolo@starwars.com",job:"Jedi",comment:"Son of Han Solo : PatchValue"})}onSetValueForm2(){this.exampleForm2.setValue({name:"Ben solo",email:"bensolo@starwars.com",job:"Jedi",comment:"Son of Han Solo : SetValue"})}onResetForm2(){this.exampleForm2.value.name="Kylo Ren",this.exampleForm2.value.email="kyloren@starwars.com",this.exampleForm2.value.job="Sith",this.exampleForm2.value.comment="Killer of Han solo"}get friends(){return this.exampleForm3.get("friends")}onResetForm3(){this.exampleForm3.patchValue({name:"Rey Palpatine",email:"reypalpatine@starwars.com",job:"Sith",comment:"Granddaughter of Palpatine"}),this.friends.push(this.fb.control("Finn")),this.friends.push(this.fb.control("Poe Damaron")),this.friends.push(this.fb.control("C-3PO"))}onUpdateForm3(){this.exampleForm3.patchValue({name:"Rey Skywalker",email:"reyskywalker@starwars.com",job:"Jedi",comment:"Padawan of Luke Skywalker"})}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(t.qu))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-form-appli"]],decls:181,vars:22,consts:[[1,"container-fluid","mb-5"],[1,"row","mb-5"],[1,"col","mt-5"],["id","exampleForms"],[1,"text-center"],["data-toggle","collapse","data-target","#form1",1,"btn","btn-outline-primary","font-weight-bold"],["data-toggle","collapse","data-target","#form2",1,"btn","btn-outline-success","font-weight-bold","ml-4"],["data-toggle","collapse","data-target","#form3",1,"btn","btn-outline-danger","font-weight-bold","ml-4"],[1,"accordion-group"],["id","form1","data-parent","#exampleForms",1,"collapse","show"],[1,"col-4","mt-5"],[1,"card"],[1,"card-body"],[1,"card-title","text-primary","font-weight-bold"],[1,"font-weight-bold"],[1,"col-8","mt-5"],[1,"form-row"],[1,"form-group","col-md-4"],["for","name"],["type","text",1,"form-control",3,"formControl"],["for","email"],["type","email",1,"form-control",3,"formControl"],["for","job"],[1,"form-control",3,"formControl"],[1,"form-group","col-md-6"],["for","comment"],["rows","2",1,"form-control",3,"formControl"],[1,"form-row","justify-content-center"],["type","submit",1,"btn","btn-primary","mr-4",3,"click"],["id","form2","data-parent","#exampleForms",1,"collapse"],[1,"card-title","text-success","font-weight-bold"],[3,"innerHTML"],[3,"formGroup"],["type","text","formControlName","name",1,"form-control"],["type","email","formControlName","email",1,"form-control"],["formControlName","job",1,"form-control"],["rows","2","formControlName","comment",1,"form-control"],[1,"table","table-bordered","table-sm"],["type","submit",1,"btn","btn-success","mr-4",3,"click"],["id","form3","data-parent","#exampleForms",1,"collapse"],[1,"card-title","text-danger","font-weight-bold"],["scope","col"],["type","submit",1,"btn","btn-danger","mr-4",3,"click"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"button",5),e._uU(6,"Form Control"),e.qZA(),e.TgZ(7,"button",6),e._uU(8,"Form Group"),e.qZA(),e.TgZ(9,"button",7),e._uU(10,"Form Builder"),e.qZA()(),e.TgZ(11,"div",8)(12,"div",9)(13,"div",0)(14,"div",1)(15,"div",10)(16,"div",11)(17,"div",12)(18,"h5",13),e._uU(19,"Result With formControl "),e.qZA(),e._UZ(20,"br"),e.TgZ(21,"span",14),e._uU(22,"ExampleForm1 : Value"),e.qZA(),e._UZ(23,"br")(24,"br"),e._uU(25),e.ALo(26,"json"),e._UZ(27,"br"),e._uU(28),e.ALo(29,"json"),e._UZ(30,"br"),e._uU(31),e.ALo(32,"json"),e._UZ(33,"br"),e._uU(34),e.ALo(35,"json"),e._UZ(36,"br"),e.qZA()()(),e.TgZ(37,"div",15)(38,"div",11)(39,"div",12)(40,"h5",13),e._uU(41,"Reactive Form with FormControl"),e.qZA(),e.TgZ(42,"div",16)(43,"div",17)(44,"label",18),e._uU(45,"Name"),e.qZA(),e._UZ(46,"input",19),e.qZA(),e.TgZ(47,"div",17)(48,"label",20),e._uU(49,"Email"),e.qZA(),e._UZ(50,"input",21),e.qZA(),e.TgZ(51,"div",17)(52,"label",22),e._uU(53,"Job"),e.qZA(),e.TgZ(54,"select",23)(55,"option"),e._uU(56,"Jedi"),e.qZA(),e.TgZ(57,"option"),e._uU(58,"Sith"),e.qZA()()()(),e.TgZ(59,"div",16)(60,"div",24)(61,"label",25),e._uU(62,"Comment"),e.qZA(),e._UZ(63,"textarea",26),e.qZA()(),e.TgZ(64,"div",27)(65,"button",28),e.NdJ("click",function(){return r.onSetValueForm1()}),e._uU(66,"SetValue"),e.qZA(),e.TgZ(67,"button",28),e.NdJ("click",function(){return r.onResetForm1()}),e._uU(68,"Reset"),e.qZA()()()()()()()(),e.TgZ(69,"div",29)(70,"div",0)(71,"div",1)(72,"div",10)(73,"div",11)(74,"div",12)(75,"h5",30),e._uU(76,"Result with FormGroup & FormControl"),e.qZA(),e._UZ(77,"br"),e.TgZ(78,"span",14),e._uU(79,"ExampleForm2 : Value"),e.qZA(),e._UZ(80,"br")(81,"br")(82,"div",31),e.ALo(83,"prettyjson"),e.qZA()()(),e.TgZ(84,"div",15)(85,"div",11)(86,"div",12)(87,"h5",30),e._uU(88,"Reactive Form with FormGroup & FormControl "),e.qZA(),e.TgZ(89,"form",32)(90,"div",16)(91,"div",17)(92,"label",18),e._uU(93,"Name"),e.qZA(),e._UZ(94,"input",33),e.qZA(),e.TgZ(95,"div",17)(96,"label",20),e._uU(97,"Email"),e.qZA(),e._UZ(98,"input",34),e.qZA(),e.TgZ(99,"div",17)(100,"label",22),e._uU(101,"Job"),e.qZA(),e.TgZ(102,"select",35)(103,"option"),e._uU(104,"Jedi"),e.qZA(),e.TgZ(105,"option"),e._uU(106,"Sith"),e.qZA()()()(),e.TgZ(107,"div",16)(108,"div",24)(109,"label",25),e._uU(110,"Comment"),e.qZA(),e._UZ(111,"textarea",36),e.qZA(),e.TgZ(112,"div",24)(113,"table",37)(114,"thead")(115,"tr")(116,"th"),e._uU(117,"Friends"),e.qZA()()(),e._UZ(118,"tbody"),e.qZA()()(),e.TgZ(119,"div",27)(120,"button",38),e.NdJ("click",function(){return r.onSetValueForm2()}),e._uU(121,"SetValue"),e.qZA(),e.TgZ(122,"button",38),e.NdJ("click",function(){return r.onPatchValueForm2()}),e._uU(123,"PatchValue"),e.qZA(),e.TgZ(124,"button",38),e.NdJ("click",function(){return r.onResetForm2()}),e._uU(125,"Reset"),e.qZA()()()()()()()()(),e.TgZ(126,"div",39)(127,"div",0)(128,"div",1)(129,"div",10)(130,"div",11)(131,"div",12)(132,"h5",40),e._uU(133,"Result with FormBuilder "),e.qZA(),e._UZ(134,"br"),e.TgZ(135,"span",14),e._uU(136,"ExampleForm3 : Value"),e.qZA(),e._UZ(137,"br")(138,"br")(139,"div",31),e.qZA()()(),e.TgZ(140,"div",15)(141,"div",11)(142,"div",12)(143,"h5",40),e._uU(144,"Reactive Form with FormBuilder"),e.qZA(),e.TgZ(145,"form",32)(146,"div",16)(147,"div",17)(148,"label",18),e._uU(149,"Name"),e.qZA(),e._UZ(150,"input",33),e.qZA(),e.TgZ(151,"div",17)(152,"label",20),e._uU(153,"email"),e.qZA(),e._UZ(154,"input",34),e.qZA(),e.TgZ(155,"div",17)(156,"label",22),e._uU(157,"Job"),e.qZA(),e.TgZ(158,"select",35)(159,"option"),e._uU(160,"Jedi"),e.qZA(),e.TgZ(161,"option"),e._uU(162,"Sith"),e.qZA()()()(),e._UZ(163,"div",16),e.TgZ(164,"div",16)(165,"div",24)(166,"label",25),e._uU(167,"Comment"),e.qZA(),e._UZ(168,"textarea",36),e.qZA(),e.TgZ(169,"div",24)(170,"table",37)(171,"thead")(172,"tr")(173,"th",41),e._uU(174,"Friends"),e.qZA()()(),e._UZ(175,"tbody"),e.qZA()()(),e.TgZ(176,"div",27)(177,"button",42),e.NdJ("click",function(){return r.onUpdateForm3()}),e._uU(178,"Load"),e.qZA(),e.TgZ(179,"button",42),e.NdJ("click",function(){return r.onResetForm3()}),e._uU(180,"Reset"),e.qZA()()()()()()()()()()()()()()),2&n&&(e.xp6(25),e.hij(" name : ",e.lcZ(26,12,r.name.value),""),e.xp6(3),e.hij(" email : ",e.lcZ(29,14,r.email.value),""),e.xp6(3),e.hij(" job : ",e.lcZ(32,16,r.job.value),""),e.xp6(3),e.hij(" comment : ",e.lcZ(35,18,r.comment.value),""),e.xp6(12),e.Q6J("formControl",r.name),e.xp6(4),e.Q6J("formControl",r.email),e.xp6(4),e.Q6J("formControl",r.job),e.xp6(9),e.Q6J("formControl",r.comment),e.xp6(19),e.Q6J("innerHTML",e.lcZ(83,20,r.exampleForm2.value),e.oJD),e.xp6(7),e.Q6J("formGroup",r.exampleForm2),e.xp6(50),e.Q6J("innerHTML",r.exampleForm3.value,e.oJD),e.xp6(6),e.Q6J("formGroup",r.exampleForm3))},dependencies:[t._Y,t.YN,t.Kr,t.Fj,t.EJ,t.JJ,t.JL,t.oH,t.sg,t.u,u.Ts,c]}),o})(),children:[]}];let p=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[s.Bz.forChild(d),s.Bz]}),o})(),Z=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,p,t.u5,t.UX]}),o})()}}]);